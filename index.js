import Phaser from 'phaser';
import River from './river_MVP1';
import Boat from './boat';
class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        // Load assets here
    }

    create() {
        let river=River(this,{
            width:600,
            height:200,
            x:50,
            y:200,
            velocity:1,
            observer_velocity:0,
            zoom:0.5
        });
        console.log(river.getVelocity());
        Boat(this,{
            river_velocity:river.getVelocity(),
            boat_velocity:0
        });
        river.draw_ending_pilors()
    }

    update() {
        // Game loop logic here
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 600,
    scene: MainScene,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
};

const game = new Phaser.Game(config);
