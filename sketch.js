
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree1,stone,ground,boy;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
   boy= new Boy(200,600,200,250)
   tree1 = new Tree(600,450,350,500);
   ground = new Ground(600,height,1200,20);
   stone= new Stone(235,420,30);
   

   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  boy.display();
 tree1.display();
 stone.display();
 ground.display();
 

  drawSprites();
 
}



