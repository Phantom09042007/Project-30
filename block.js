class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.Image = loadImage("Box.png");
        this.visible = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        console.log(this.body.speed);
        if (this.body.speed>3){
          World.remove(world,this.body);
          push();
          tint(255,this.visible);
          this.visible-=5;
          image(this.Image,this.body.position.x,this.body.position.y,30,40);
          pop()
        }else{
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.Image,0,0,this.width,this.height);
        pop();
        }
      }
}
