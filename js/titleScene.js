
class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#13f0b9')
  }

  preload() {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/A-10.png')

    // PLAY BUTTON
    this.load.image("playButton", "./assets/playButton.png");
  }

  create(data) {
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground')

    // Position of image
    this.titleSceneBackgroundImage.x = 800 / 2
    this.titleSceneBackgroundImage.y = 600 / 2

    // size of image
    this.titleSceneBackgroundImage.scaleX = 0.4;

    //
    this.playButton = this.add.sprite(400,200,"playButton");
    this.playButton.setInteractive({useHandCursor : true});
    this.playButton.on( "pointerdown", () => {

    } );

    // Add text
    // this.titleSceneText = this.add.text(400,300, "A-10 Strike!")
  }

  update(time, delta) {
    // pass
  }
}

export default TitleScene
