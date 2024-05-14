
//A-10 Strike! by Diego.V
// Game scene code.

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' })
    this.background = null
    this.ship = null
    this.fireMissile = false
    this.fireGun = false
  }
  //color
  init(data) {
    this.cameras.main.setBackgroundColor('#259B9F')
  }

  preload() {
    console.log('Game Scene')
    //images  
    this.load.image('Background', './assets/background.png')
    this.load.image('A10', './assets/A10.png')
    this.load.image('missile', './assets/missile.png')
    this.load.image('gun', './assets/Gun.png')
  }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(400, 300, 'Background').setScale(2);

    // this.background.setOrgin(0,0);

    this.A10 = this.physics.add.sprite(400, 300, 'A10').setScale(1);
    this.A10.flipY = true;

    // creat missile
    this.missileGroup = this.physics.add.group();

    // creat Gun
    this.GunGroup = this.physics.add.group();
  }

  update(time, delta) {
    // movement (setting up the IDs)
    const keyUpObj = this.input.keyboard.addKey('UP')
    const keyDownObj = this.input.keyboard.addKey('DOWN')

    const keyLeftObj = this.input.keyboard.addKey('LEFT')
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
    const keyEObj = this.input.keyboard.addKey('E')
    const keyQObj = this.input.keyboard.addKey('Q')

    //the code for the movement it self.

    if (keyLeftObj.isDown === true) {
      this.A10.x -= 5
      if (this.A10.x < 0) {
        this.A10.x = 800
      }
    }

    if (keyRightObj.isDown === true) {
      this.A10.x += 5
      if (this.A10.x > 800) {
        this.A10.x = 0

      }
    }

    if (keyUpObj.isDown === true) {
      this.A10.y -= 5
      if (this.A10.y < 0) {
        this.A10.y = 600
      }

    }

    if (keyDownObj.isDown === true) {
      this.A10.y += 5
      if (this.A10.y > 600) {
        this.A10.y = 0
      }


    }
    // Shooting code missles 
    if (keyEObj.isDown === true) {
      if (this.fireMissile === false) {
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.A10.x, this.A10.y, 'missile').setScale(0.06)
        this.missileGroup.add(aNewMissile)
      }
    }
    if (keyEObj.isUp === true) {
      this.fireMissile = false
    }
    // Shooting Guns.
    if (keyQObj.isDown === true) {
      if (this.fireGun === false) {
        this.fireGun = true
        const aNewGun = this.physics.add.sprite(this.A10.x, this.A10.y, 'gun').setScale(0.03)
        this.GunGroup.add(aNewGun)
      }
    }

    if (keyQObj.isUp === true) {
      this.fireGun = false
    }
  }
}

export default GameScene
