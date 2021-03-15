class Umbrella { 
    constructor(x,y){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         var radius = 50;
         this.body = Bodies.circle(x,y, radius, options);
        this.image=loadImage("Walking Frame/walking_8.png")
         World.add(world, this.body);
    }
  display(){
   var pos=this.body.position
   imageMode (CENTER)
   image(this.image,pos.x-90, pos.y-20,170,170)
  }
}