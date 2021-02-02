
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer1, plane1, stone1, rubber1, iron1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	plane1 =new Plane(600, 700, 1200, 200);
	stone1 = new Stone(500,0,90,80);
	rubber1 = new Rubber(700,0 ,60);
	iron1 = new Iron(300,0);

	sand1 = new Sand(400,0,15);
	sand2 = new Sand(415,0,15);
	sand3 = new Sand(425,0,15);
	sand4 = new Sand(435,0,15);
	sand5 = new Sand(445,0,15);
	sand6 = new Sand(455,0,15);
	sand7 = new Sand(465,0,15);
	sand8 = new Sand(475,0,15);
	sand9 = new Sand(485,0,15);
	sand10 = new Sand(495,0,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");
  Engine.update(engine);
 
  hammer1 = new Hammer(300,300,100,100,);


  hammer1.display();
  plane1.display();
  stone1.display();
  rubber1.display();
  iron1.display();

  sand1.display(); 
  sand2.display(); 
  sand3.display(); 
  sand4.display(); 
  sand5.display(); 
  sand6.display(); 
  sand7.display(); 
  sand8.display(); 
  sand9.display(); 
  sand10.display(); 

  drawSprites();

 
}



