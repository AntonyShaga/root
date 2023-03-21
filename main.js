window.addEventListener('load', function () {
  const canvas = document.getElementById('root__canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 350;
  canvas.height = 350;

  class Mandrake {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.image = document.getElementById('mandrake');
      this.spriteWidth = 256;
      this.spriteHeight = 256;
      this.width = this.spriteWidth;
      this.height = this.spriteHeight;
      this.scale = 1;
      this.x = this.canvasWidth / 2 - this.width * this.scale / 2;
      this.y = this.canvasHeight / 2 - this.height * this.scale / 2;
      this.frame = 0;
      this.minFrame = 0;
      this.maxFrame = 355;
      this.frameX = 0;
      this.frameY = 0;
    }
    draw(context) {
      context.drawImage (this.image,this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale)
    }
    update() {
       if (this.frame < this.maxFrame) {
        this.frame++;
        
      } else {
        this.frame = this.minFrame;
      }
      this.frameX = this.frame % 18;
      this.frameY = Math.floor(this.frame / 18);

    }
    setAnimation (newMinFrame, newMaxFrame) {
      this.minFrame = newMinFrame;
      this.maxFrame = newMaxFrame;
      this.frame = this.minFrame;
    }
  }

  const mandrke = new Mandrake(canvas.width, canvas.height);

  function animate (timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mandrke.draw(ctx);
    mandrke.update();
    requestAnimationFrame(animate);
  };

  animate();

  this.addEventListener ('click', function (event) {
    if (event.target.id === 'all'){
      mandrke.setAnimation(0, 355)
    } else if (event.target.id === 'grow') {
      mandrke.setAnimation(0, 75)
    } else if (event.target.id === 'wink') {
      mandrke.setAnimation(76, 112)
    } else if (event.target.id === 'float') {
      mandrke.setAnimation(113, 262)
    } else if (event.target.id === 'hide') {
      mandrke.setAnimation(262, 355)
    }
  })
} )