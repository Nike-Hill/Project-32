
class Box2{
  constructor(x, y, width, height) {
      var options = {
          'restitution': 0.1,
          'friction': 1.0,
          'density': 0.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/ThanosVector.png");
      World.add(world, this.body);
      this.Visiblity = 255
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 7){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
         
       }
      }

      score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score += 5;
        }
      }

    }

    


  