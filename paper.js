class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 50;
      this.height = 50;
      this.img = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("#FF8C00");
      image(this.img,0, 0, this.width, this.height);
      pop();
    }
  };
  