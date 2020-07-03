class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,70,140);
    this.image = loadImage("sprites/StormbreakerVector.png");
  }

  display() {
   // this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
