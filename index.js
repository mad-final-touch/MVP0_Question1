import Phaser from 'phaser';
import River from './river';
import Boat from './boat';
class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        // Load assets here
    }

    create() {
        let vel_fun=River(this,{
            width:1500,
            height:300,
            x:10,
            y:200,
            velocity:-1,
            observer_velocity:0,
            zoom:0.75
        });
        console.log(vel_fun());
        Boat(this,{
            river_velocity:vel_fun(),
            boat_velocity:100
        });
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
