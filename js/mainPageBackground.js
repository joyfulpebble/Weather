class Gradient {
  constructor(){
    this.cnv = document.querySelector('canvas');
    this.ctx = this.cnv.getContext('2d');

    this.particlesNum = 10;
    this.speed = .005;
    this.minRadius = 300;
    this.maxRadius = 900;

    this.setCanvasSize();
    this.createParticles();
    this.animationParticles();

    window.onresize = () =>{
      this.setCanvasSize();
    }
  }
  setCanvasSize(){
    this.w = this.cnv.width  = innerWidth;
    this.h = this.cnv.height = innerHeight;
  }
  createParticles(){
    this.particles = [];
    for (let i = 0; i < this.particlesNum; i++) {   
      this.particles.push(new Particle(this.w, this.h, this.minRadius, this.maxRadius));
    }
  }
  clearCanvas(){
    this.ctx.clearRect(0, 0, this.w, this.h);
  }
  drawParticles(){
    this.particles.forEach((ptc) => {
      ptc.draw(this.ctx, this.speed);
    })
  }
  animationParticles(){
    this.clearCanvas();
    this.drawParticles();
    window.requestAnimationFrame(() => this.animationParticles());
  }
}

class Particle{
  constructor(w, h, minR, maxR){
    this.x = Math.random() * w;
    this.y = Math.random() * h; 
    this.angle  = Math.random() * Math.PI * 2; 
    this.radius = Math.random() * (maxR - minR) + minR;
    this.firstColor  = `hsla(${Math.random() * 360}, 100%, 50%, 1)`
    this.secondColor = `hsla(${Math.random() * 360}, 100%, 50%, 0)`
  }
  draw(ctx, speed){
    this.angle += speed
    const x = this.x + Math.cos(this.angle) * 200;
    const y = this.y + Math.sin(this.angle) * 200;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius)
          gradient.addColorStop(0, this.firstColor)
          gradient.addColorStop(1, this.secondColor)

    ctx.fillStyle = gradient
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

window.onload   = () => new Gradient();