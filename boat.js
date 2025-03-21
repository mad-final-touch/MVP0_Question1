import River from "./river_MVP1";

function Boat(scene,options){
        let{x,y,river_velocity,zoom,boat_velocity }=options;
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

        // Draw dashed line manually
        graphics.lineStyle(2, 0xffffff, 1);
        let startY = 150;
        let endY = -150;
        let dashLength = 10;
        let gapLength = 5;
        
        for (let y = startY; y > endY; y -= (dashLength + gapLength)) {
            let segmentEnd = Math.max(y - dashLength, endY);
            graphics.beginPath();
            graphics.moveTo(200, y);
            graphics.lineTo(200, segmentEnd);
            graphics.strokePath();
        }
        // Convert to texture for reusability
        graphics.generateTexture('boat', 300, 400);
        graphics.destroy();

        scene.boat=scene.physics.add.sprite(x,y,'boat');
        // console.log(boat);
        scene.boat.setVelocity(river_velocity+boat_velocity,0);
        scene.boat.setScale(zoom);
    }

export default Boat;