
class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: 'splashScene' })
     this.splashSceneBackgroundImage = null
     this.topGunAudio = null
  }
//background color
  init (data) {
    this.cameras.main.setBackgroundColor('#259B9F')
  }
// assets
  preload() {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
    this.load.audio('topGunAudio', '././assets/topGun.mp3')
  }
// image positioning and audio
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 800 / 2
    this.splashSceneBackgroundImage.y = 600 / 2
    this.topGunAudio = this.sound.add('topGunAudio')
    this.topGunAudio.play()
  }
// time between the screens
  update(time, delta) {
    if (time>5000) {
      this.scene.start('titleScene');
    }
  }
}

export default SplashScene
