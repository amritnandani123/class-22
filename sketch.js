const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var myEngine,myWorld,ground;
var ball;
function setup() {
  createCanvas(400,400);

  myEngine = Engine.create(); 
  myWorld = myEngine.world;
  
  
  var options={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(myWorld,ground);
  
 var ball_options= {
   restitution:1.0
 }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);

  var render = Render.create({
    element: document.body,
    engine: myEngine,
    options: {
      width: 600,
      height: 400,
      wireframes: false
    }
  });
	
	Engine.run(myEngine);
  Render.run(render);

 
}

function draw() {
  background(0);  


  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  console.log(ball.position.y)
  
}
