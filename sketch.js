
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground
var hammer
var rubber
var stone
var sand1
var sand2
var sand3
var sand4
var sand5
var sand6
var sand7
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer = new Hammer(400,200,200,30)
ground = new Ground(400,680,800,40)
rubber = new Rubber(400,200,80,80)
stone = new Stone(300,300,60,60)
sand1 = new Sand(400,200,10,10)
sand2 = new Sand(400,200,10,10)
sand3 = new Sand(400,200,10,10)
sand4 = new Sand(400,200,10,10)
sand5 = new Sand(400,200,10,10)
sand6 = new Sand(400,200,10,10)
sand7 = new Sand(400,200,10,10)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();
  ground.display();
  rubber.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
 
  drawSprites();
 
}



