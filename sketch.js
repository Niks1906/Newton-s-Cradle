
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 100, 600, 20);

	bob1 = new bob( 75, 575, 100);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  bob1.display();

  drawSprites();

}
