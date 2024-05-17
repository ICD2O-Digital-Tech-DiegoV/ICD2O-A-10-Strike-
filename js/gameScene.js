
//A-10 Strike! by Diego.V
// Game scene code.

class GameScene extends Phaser.Scene {
 // creating the tanks
  createTank () {
    if (this.debounce) {return}
    this.debounce = true
    const tankXLocation = Math.floor(Math.random() * 1820) + 1 // random number for the x coordinate
    let tankXvelocity = Math.floor(Math.random() * 50) + 1 // random number for the x velocity
    tankXvelocity = tankXvelocity * Math.round(Math.random()) ? 1 : -1
    const anTank = this.physics.add.sprite(tankXLocation, -100, 'tank')
    anTank.body.velocity.y = 200
    anTank.body.velocity.x = tankXvelocity
    this.tankGroup.add(anTank)
    setTimeout(()=>{this.debounce=false},600)
  }
  
  // sound of Gun, missles and explosion
  this.load.audio('Gun', '././assets/explosion.mp3')
  this.load.audio('Missles', '././assets/explosion.mp3')
  this.load.audio('explosion', '././assets/explosion.mp3')

  //score set up
  this.scoreText = this.add.text(10, 10, 'Score: 0' + this.score.toString(), this.scoreTextStyle)
  
  constructor() {
    super({ key: 'gameScene' })
    this.ship = null
    this.fireguns = false
    this.firemissile = false
    this.score = 0
    this.scoreText = null
    this.scoreTextStyle = {font: '65px Arial', fill: '#ffffff', align: 'center'}
    this.gameOverTextStyle = {font: '65px Arial', fill: '#ff0000', align: 'center'}
    
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
        const aNewMissile = this.physics.add.sprite(this.A10.x, this.A10.y, 'missile').setScale(0.05)
        this.missileGroup.add(aNewMissile)
      }
    }
    if (keyEObj.isUp === true) {
      this.fireMissile = false
    }
    // Movemt code for the missles
    
  this.missileGroup.children.each(function (item){
      item.y = item.y - 15;
      if (item.y < 0){
        item.destroy();
      }
    })
    // Shooting Guns.
    if (keyQObj.isDown === true) {
      if (this.fireGun === false) {
        this.fireGun = true
        const aNewGun = this.physics.add.sprite(this.A10.x, this.A10.y, 'gun').setScale(0.01)
        this.GunGroup.add(aNewGun)
      }
    }

    if (keyQObj.isUp === true) {
      this.fireGun = false
    }
    // Movemt code for the missles
    this.GunGroup.children.each(function (item){
      item.y = item.y - 15;
      if (item.y < 0){
        item.destroy();
      }
    })
    // create agroup fo the tanks
    this.tankGroup = this.add.group();
    this.createTank();

    // colisions between projectiles and tanks
    this.physics.add.collider(this.missleGroup, this.tankGroup, function (missileCollide, tankCollide){
      tankCollide.destroy()
      missileCollide.desroy()
      this.sound.play('explosion')
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createTank()
      this.createTank()
      }.bind(this))

    // colisions between projectiles and tanks
    this.physics.add.collider(this.gunGroup, this.tankGroup, function (gunCollide, tankCollide){
      tankCollide.destroy()
      gunCollide.desroy()
      this.sound.play('explosion')
      this.score = this.score + 1
      this.scoreText.setText('Score: ' + this.score.toString())
      this.createTank()
      this.createTank()
      }.bind(this))

  // colissions between the A-10 and the tanks
    this.physics.add.collider(this.A10, this.tankGroup, function (A10collide, tankCollide){
      this.sound.play('explosion')
      this.physics.pause();
      tankCollide.destroy()
      A10collide.destroy()
      this.gameOverText = this.add.text(400, 300, 'Game Over!\nClick to play again.', this.gameOverTextStyle).setOrigin(0.5)       
      this.gameOverText.setInteractive({ useHandCursor: true })
      this.gameOverText.on('pointerdown', () => this.scene.start('gameScene'))
     }.bind(this))
  }
}

export default GameScene
