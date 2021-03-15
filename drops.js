class Drops{
constructor(x,y){
    var options={
        isStatic:false,
        friction:0.1,
         restitution:0.2,
         density:1.5
    }
    this.body=Bodies.circle(x,y,20,options)
   //this.r=20
   World.add(world,this.body)

};

  display(){
     var pos=this.body.position;
     ellipseMode(CENTER) 
     fill ("blue")
     ellipse(pos.x,pos.y)
     
    
  }


  update(){
      //to reposition the drops
      if(this.body.position.y>height){
          Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
      }
  }





}