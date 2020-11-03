const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
//var ground;
//var ball;
var box1;
var box2;
var ground;
var pig1;
var log1;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  /*var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20, ground_options);
  World.add(world, ground);
  var ball_options = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world, ball);
  console.log(ground);*/
  box1 = new Box(170,320,70,70);
  box2 = new Box(920,320,70,70);
  ground = new Ground(600,height,1200,20);
  pig1 = new Pig(810,350);
  log1 = new Log(810,260,300,PI/2);
  log2 = new Log(810,180,300,PI/2);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
}

function draw() {
  background(0); 
  Engine.update(engine);
  /*rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);*/
box1.display();
box2.display();
box3.display();
box4.display();
ground.display();
pig1.display();
log1.display();
log2.display();
}