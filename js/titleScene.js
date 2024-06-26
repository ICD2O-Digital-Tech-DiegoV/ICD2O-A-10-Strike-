
class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#259B9F')
  }

  preload() {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/A-10image.png')

    // PLAY BUTTON
    this.load.image("playButton", "./assets/playButton.png");
    this.load.image("button", "./assets/playButtonclicked.png");
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
      this.playButton.setTexture("button")
      setTimeout(function(){this.scene.switch("gameScene")}.bind(this), 400);
    } );

    // Add text
    // this.titleSceneText = this.add.text(400,300, "A-10 Strike!")

    // INSTRUCTION BUTTON
    this.instructionsButton = this.add.text(500,400,"INSTRUCTIONS", {
      fontSize: "32px",
      backgroundColor: "f0550f",
    });
    this.instructionsButton.setInteractive({useHandCursor : true});
    this.instructionsButton.on( "pointerdown", () => {
      this.scene.switch("instructScene")
    } );
  }

  update(time, delta) {
    // pass
  }
}

export default TitleScene
