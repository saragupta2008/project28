
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1,stone,ground,boy,boyImage;

function preload()
{
boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
   
   tree1 = new Tree(600,450,350,500);
   ground = new Ground(600,height,1200,20);
   stone= new Stone(235,420,30);
   
   boy=createSprite(200,100);
   boy.addImage(boyImage);
   boy=scale(0.1);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 
 tree1.display();
 stone.display();
 ground.display();
 

  drawSprites();
 
}



