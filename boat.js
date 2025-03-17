import River from "./river";

function Boat(scene,options){
        let{river_velocity}=options;
        let graphics = scene.add.graphics();

        // Set fill and line style
        graphics.fillStyle(0x8B4513, 1); // Brown color for boat body
        graphics.lineStyle(2, 0x000000, 1); // Black outline

        // Draw the boat body (trapezoidal shape)
        graphics.beginPath();
        graphics.moveTo(100, 300);  // Bottom-left
        graphics.lineTo(300, 300);  // Bottom-right
        graphics.lineTo(250, 350);  // Top-right
        graphics.lineTo(150, 350);  // Top-left
        graphics.closePath();
        graphics.fillPath();
        graphics.strokePath();

        // Draw the mast
        graphics.lineStyle(5, 0xffffff, 1); // Black mast
        graphics.beginPath();
        graphics.moveTo(200, 300);
        graphics.lineTo(200, 200);
        graphics.strokePath();

        // Draw the sail (triangle)
        graphics.fillStyle(0xffffff, 1); // White sail
        graphics.beginPath();
        graphics.moveTo(200, 200); // Top
        graphics.lineTo(250, 280); // Bottom-right
        graphics.lineTo(200, 280); // Bottom-left
        graphics.closePath();
        graphics.fillPath();
        graphics.strokePath();

        // Convert to texture for reusability
        graphics.generateTexture('boat', 300, 400);
        graphics.destroy();

        // Add boat sprite
        // scene.add.sprite(200, 300, 'boat');
        // scene.tweens.add({
        //     targets: scene.add.sprite(10,300,'boat'),
        //     x:1500,
        //     duration:(1500/river_velocity)*1000,
        //     ease:'Linear',
        //     repeat:-1
        // });
        scene.boat=scene.physics.add.sprite(100,300,'boat');
        // console.log(boat);
        scene.boat.setVelocity(100,0);
    }

export default Boat;