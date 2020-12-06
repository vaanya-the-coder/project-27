
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(250,500,50);
	bobObject2 = new Bob(300,500,50);
	bobObject3 = new Bob(350,500,50);
	bobObject4 = new Bob(400,500,50);
	bobObject5 = new Bob(450,500,50);
	roof = new Roof(400,100,400,30);

	rope1 = new Rope(bobObject1.body,{x:250,y:100})
	rope2 = new Rope(bobObject2.body,{x:300,y:100})
	rope3 = new Rope(bobObject3.body,{x:350,y:100})
	rope4 = new Rope(bobObject4.body,{x:400,y:100})
	rope5 = new Rope(bobObject5.body,{x:450,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  drawSprites();
 
}

function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); } }




