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
            width:1000,
            height:200,
            x:0,
            y:200,
            velocity:0.7,
            observer_velocity:0,
            zoom:0.6
        });
        document.getElementById("toggle").onclick =river.toggle_play;
        Boat(this,{
            river_velocity:river.getVelocity(),
            boat_velocity:0,
            x:100,
            y:200,
            zoom:0.5
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
