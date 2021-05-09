
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper,ground,dustbin;
var leftside,rightside,bottom;

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,360,20);
	ground = new Ground(400,380,800,20);

	leftside = new Dustbin(650,320,20,100);
	rightside = new Dustbin(770,320,20,100);
	bottom = new Dustbin(710,360,100,20);


	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();

  leftside.display();
  rightside.display();
  bottom.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}

}



