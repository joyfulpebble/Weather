class Gradient {
  constructor(){
    this.cnv = document.querySelector('canvas');
    this.ctx = this.cnv.getContext('2d');

    this.particlesNum = 7;

    this.setCanvasSize();
    this.createParticles();
    window.onresize = () => {
      this.setCanvasSize()
      this.createParticles()
    }
  }
  setCanvasSize(){
    this.w = this.cnv.width  = innerWidth;
    this.h = this.cnv.height = innerHeight;
  }
  createParticles(){
    this.particles = [];
    for (let i = 0; i < this.particlesNum; i++) {   
      this.particles.push(new Particle(this.w, this.h));
      this.drawParticles()
    }
  }
  drawParticles(){
    this.particles.forEach((particle) => {
      particle.draw(this.ctx);
    })
  }
}

class Particle{
  constructor(w, h){
    this.x = Math.random() * w;
    this.y = Math.random() * h; 
    this.radius = 50;
  }
  draw(ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

window.onload = () => new Gradient();