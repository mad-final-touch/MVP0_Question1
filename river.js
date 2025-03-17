function River(scene,options) {
    let {
        width,
        height,
        x,
        y,
        velocity,
        observer_velocity,
        zoom
    } = options;
    // scene.add.rectangle(100,100,100,2,'#111');
    let rec;
    let finalj;
    // scene.add.rectangle(100*1-100, 300, 80, 2, 0xffffff)
    for (let i=100;i<(height/zoom+500);i+=50){
        for (let j=-100;j<(width/zoom+500);j+=100){
            // scene.add.rectangle(i, j, 80, 2, 0xffffff)
            
            if(i/50 % 2==1){
                rec = scene.add.rectangle(
                    x+(j-100)*zoom, 
                    y+i*zoom, 
                    60*zoom, 
                    2*zoom, 
                    0xeeeeee
                )
                finalj=0;
            }else{
                rec = scene.add.rectangle(
                    x+(j-100+50)*zoom, 
                    y+i*zoom, 
                    60*zoom, 
                    2*zoom, 
                    0xeeeeee
                )
                finalj = 50;
            }
            scene.tweens.add({
                targets: rec, 
                x: velocity-observer_velocity>0?(j+100+finalj)*zoom+x:x+(j-300+finalj)*zoom,         // Move to X = 700
                duration:velocity-observer_velocity>0?
                1000/(velocity-observer_velocity):
                1000/(observer_velocity-velocity), // Takes 2 seconds
                ease: 'Linear', // Moves at a constant speed
                repeat: -1      // Loops forever
            });
        }
    }
    function getVelocity(){
        return (200)*zoom*(velocity-observer_velocity);
    }
    return getVelocity;
}

export default River;

