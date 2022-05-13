class Gradient {
  constructor(){
    this.cnv = document.querySelector('canvas');

    this.setCanvasSize()
    window.onresize = () => {
      this.setCanvasSize()
    }
  }
  setCanvasSize(){
    this.w = this.cnv.width  = innerWidth;
    this.h = this.cnv.height = innerHeight;
  }
}

window.onload = () => new Gradient();