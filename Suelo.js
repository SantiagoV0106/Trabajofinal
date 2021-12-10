function Piso(x, y){
  this.x = x;
  this.y = y;

  this.show = function(){
    image(pisoImag, x,y,40,40);
  }
}
