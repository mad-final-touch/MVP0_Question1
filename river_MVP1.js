function River(scene,options) {
    let {
        width,
        height,
        x,
        y,
        velocity,
        observer_velocity,
        zoom,
        paused
    } = options;
    const gap =100;
    const line_space_ratio=50;
    const left_flow=velocity<observer_velocity;

    for (let i=0;i<=(height/zoom);i+=gap/2){
        for (let j=0;j<(width/zoom);j+=gap){
            let oddj = (i*2/gap%2==1) ? 0 : gap/2;
            if(left_flow && j==0){
                j+=gap;
            }else if(!left_flow && width/zoom<=gap+j){
                continue;
            }
            let line_river=scene.add.rectangle(
                x+(j+oddj+line_space_ratio/2)*zoom,
                y+i*zoom,
                line_space_ratio*zoom,
                2*zoom,
                0xeeeeee
            )
            scene.tweens.add({
                targets:line_river,
                x:x+(j+oddj+line_space_ratio/2+gap*(left_flow?-1:1))*zoom,
                duration:left_flow?
                1000/(observer_velocity-velocity):
                1000/(velocity-observer_velocity),
                ease: 'Linear',
                repeat:-1
            })
        }
    }
    // const graphics = scene.add.graphics();
    // graphics.lineStyle(2, 0xffffff); // lineWidth = 2, color = white
    // graphics.beginPath();
    // for (let i=100;i<=100+400*zoom;i+=50*zoom){
    //     graphics.moveTo(i, 0);         // x = 100, start from top
    //     graphics.lineTo(i, 600);       // x = 100, end at bottom (assuming 600 is your game height)
    //     graphics.strokePath();
    // }
    function draw_ending_pilors(){
        const graphics = scene.add.graphics();
        graphics.clear();
            // Create gradient fill
        graphics.fillGradientStyle(
            0x000000, 0x000000,          // Colors for top
            0x000000, 0x000000,          // Colors for bottom
            1, 0,          // Alpha for top (0-1)
            1, 0          // Alpha for bottom (0-1)
        );
        
        // Draw the rectangle
        graphics.fillRect(x, y, gap, height);
        graphics.fillGradientStyle(
            0x000000, 0x000000,          // Colors for top
            0x000000, 0x000000,          // Colors for bottom
            0, 1,          // Alpha for top (0-1)
            0, 1          // Alpha for bottom (0-1)
        );
        graphics.fillRect(x+width-gap*zoom, y, gap*zoom, height);
    };
    function getVelocity(){
        return gap*zoom*(velocity-observer_velocity);
    };
    function toggle_play(){
        console.log(paused);
        if(!paused){
            scene.tweens.pauseAll();
            paused=true;
        }else{
            scene.tweens.resumeAll();
            paused=false;
        }
    }
    return {draw_ending_pilors,getVelocity,toggle_play};
}
export default River;