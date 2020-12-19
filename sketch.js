
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree1,stone,ground,boy,boyImage,mango1,mango2,mango3,mango4,mango5,mango6,launcher;

function preload()
{
boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 1200);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
   boy=createSprite(300,1130,20,100);
   boy.addImage(boyImage);
   boy.scale=0.1;
   
   tree1  = new Tree(1100,930,350,500);
   ground = new Ground(650,height,1300,20);
   stone  = new Stone(260,1070,30);

   mango1 = new Mango(1100,850,40);
   mango2 = new Mango(1060,800,38);
   mango3 = new Mango(1130,780,36);
   mango4 = new Mango(980,900,30);
   mango5 = new Mango(1200,890,40);
   mango6 = new Mango(1190,780,35);
   launcher = new Launcher(stone.body,{x:260, y:1070});
   
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 
 tree1.display();
 
 ground.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 stone.display();
 launcher.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

function detectCollision(stone,mango){
mangoBodyPosition=mango.body.position 
stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
if(distance<=mango.r+stone.r)
{
Matter.Body.setStatic(mango.body,false);
}
}
function keyPressed(){
  if(keyCode==32){
    Matter.Body.setPosition(stone.body,{x:260,y:1070})
      launcher.attach(stone.body);
  }
}

