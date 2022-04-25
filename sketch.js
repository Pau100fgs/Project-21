
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var radius = 40;
var ground


function setup() {
	createCanvas(1600, 500);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
  
	ball= Bodies.circle(260,100,radius/2,ball_options);
    World.add(world,ball);

	Engine.run(engine);

	ground=new Ground(width/2,470,1600,20);
    wall1=new Ground(1100,450,20,120);
    wall2=new Ground(1300,450,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  ground.display();
  wall1.display();
  wall2.display();
  
}

function keyPressed(){
	if (keyCode==UP_ARROW){	
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}



}



