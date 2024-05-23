// Instruction Scene
class InstructScene extends Phaser.Scene {
  constructor() {
    super({ key: 'instructScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#259B9F')
  }

  preload() {
    console.log('Instruction Scene')
  }

  create(data) {
    //INSTRUCTIONS
    this.add.text(100,
                  100,
                  'INSTRUCTIONS:\n Use Arrow Keys for movent, E key for missiles, and Q key for guns! ',
                  { fontSize: '16px', fill: '#fff' })

    // BACK BUTTON
    this.backButton = this.add.text(500,400,"BACK", {
      fontSize: "32px",
      backgroundColor: "f0550f",
    });
    this.backButton.setInteractive({useHandCursor : true});
    this.backButton.on( "pointerdown", () => {
      this.scene.switch("titleScene")
    } );

    // Add text
    // this.titleSceneText = this.add.text(400,300, "A-10 Strike!")
  }

  update(time, delta) {
    // pass
  }
}

export default InstructScene
