class Brush{
    constructor(){
      this.clx=mouseX
      this.cly=mouseY

      this.plx=pwinMouseX
      this.ply=pwinMouseY
    }
    display(){
     line(this.plx,this.ply,this.clx,this.cly)
    }
    
}