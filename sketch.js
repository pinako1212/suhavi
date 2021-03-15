const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thunderbolt1,thunderbolt2,thunderbolt3,thunderbolt4;
var umbrella;
var maxDrops=100;
var canvas,engine,world;
var drops=[];


var thunder, thunder1,thunder2,thunder3,thunder4;
var thunderFrame;

function preload(){
    thunderbolt1=loadImage("1.png")
    thunderbolt2=loadImage("2.png")
    thunderbolt3=loadImage("3.png")
    thunderbolt4=loadImage("4.png")
}

function setup(){
    var canvas = createCanvas(1350,650);
    
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,350)

     //creating drops 
    if(frameCount%100===0){
        for(var i=0; i<maxDrops;i++){
          drops.push(new Drops(random(0,400),random(0,400),3,10));
         }
        }
        }

function draw(){
    background(0)
    Engine.update(engine)

    var rand =Math.round(random(1,4))

    if(frameCount%80===0){
        thunder = createSprite(random(10,330),random(10,30),10,10);
       thunderFrame = frameCount;

       switch(rand){
        case 1 : thunder.addImage(thunderbolt1);
        break;
        case 2 : thunder.addImage(thunderbolt2);
        break;
        case 3 : thunder.addImage(thunderbolt3);
        break;
        case 4: thunder.addImage(thunderbolt4);
        break;
        default : break;
      }
      //scaling 
      thunder.scale=random(0.2,0.4)

    }
    if(thunderFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }
    umbrella.display();
   
     //displaying the drops
    for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
      }
     
     
      
      drawSprites();
    }
    
    
