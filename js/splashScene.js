
class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: 'splashScene' })
     this.splashSceneBackgroundImage = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#259B9F')
  }

  preload() {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 800 / 2
    this.splashSceneBackgroundImage.y = 600 / 2
  }

  update(time, delta) {
    if (time>4000) {
      this.scene.start('titleScene');
    }
  }
}

export default SplashScene
