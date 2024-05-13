


class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' })
     this.background = null
    this.ship = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#259B9F')
  }

  preload () {
    console.log('Game Scene')
   //images
    this.load.image('Backgound', './assets/background.png')
    this.preload.image ( 'A-10', './assets/A-10.png')
  }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'Background')
   this.background.setOrigion(0,0)
    this.A-10 = this.physics.add.sprite(1920 / 2, 1080 - 100 'A-10')
  }

  update(time, delta) {
  }
}

export default GameScene
