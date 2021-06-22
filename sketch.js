
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var crumbledpaperimg

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	crumbledpaper = new Paper(100,645,50,50)
	Engine.run(engine);
  
}
function preload(){
	crumbledpaperimg = loadImage("paper.png")
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
crumbledpaper.display();

}

function keyPressed(){
    if(keyCode == 32){
        Matter.Body.applyForce(crumbledpaper.body,crumbledpaper.body.position,{ x: 195, y: -195})
    }
}