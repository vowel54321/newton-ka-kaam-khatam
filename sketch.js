
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b,b2,b3,b4,b5,r1,r2,r3,r4,r5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	b1= new Box(250,300)
	b2 = new Box(300,300)
	b3 = new Box(350,300)
	b4 = new Box(400,300)
	b5 = new Box(450,300)
     ground = new Ground(350,100,300,10)
	 r1= new Rope(b1.body,ground.body,-100,100);
	 World.add(world,r1);
	 r2= new Rope(b2.body,ground.body,-50,100);
	 World.add(world,r2);
	 r3= new Rope(b3.body,ground.body,0,100);
	 World.add(world,r3);
	 r4= new Rope(b4.body,ground.body,50,100);
	 World.add(world,r4);
	 r5= new Rope(b5.body,ground.body,100,100);
	 World.add(world,r5);
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
r1.display();
r2.display();
r3.display();
r4.display();
r5.display();
ground.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-700,y:0})
	}
}



