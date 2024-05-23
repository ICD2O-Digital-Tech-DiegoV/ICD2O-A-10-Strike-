/* global Phaser */

import SplashScene from './splashScene.js';
import TitleScene from './titleScene.js';
import GameScene from './gameScene.js'
import InstructScene from './instructScene.js'

const splashScene = new SplashScene();
const titleScene = new TitleScene();
const gameScene = new GameScene();
const instructScene = new InstructScene();

const config = {
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },

    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    backgroundColor: 0x555555
}

const game = new Phaser.Game(config);
console.log(game);
game.scene.add('splashScene', splashScene);
game.scene.add('titleScene', titleScene);
game.scene.add('gameScene', gameScene)
game.scene.add('instructScene', instructScene)
game.scene.start('splashScene');