
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var world,engine;
var boy,mango1,mango2,mango3,mango4,mango5;
var stone1,tree;
function preload(){
  
}


function setup() {
	createCanvas(800, 700);
engine = Engine.create();
	world = engine.world;
boy=new Boy(300,400,50,70);
tree=new Tree(600,300,30,50);
mango1=new Mango(400,300,50,50);
mango2=new Mango(460,320,50,50);
mango3=new Mango(490,340,50,50);
mango4=new Mango(340,280,50,50);
mango5=new Mango(450,360,50,50);
stone1=new Stone(255,365,30,30);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
stone1.display();
  
  drawSprites();
 
}
function mouseDragged(){

	Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
	}
	
	function mouseReleased(){
	chain.fly();
	
	
	}


