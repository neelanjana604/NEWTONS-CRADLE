var Roof,varRope1,varRope2,varRope3,varRope4,varRope5,varbobObject1;varbobObject2,varbobObject3,varbobObject4,varbobObject5,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render =Matter.Render;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Roof=newRoof(350,100,300,30);
World.add(world,Roof);

bobObject1=newbobObject1(250,300);
bobObject2=newbobObject2(300,300);
bobObject3=newbobObject3(350,300);
bobObject4=newbobObject4(400,300);
bobObject5=newbobObject5(450,300);

Rope1=newRope((bobObject1.body,Roof.body,-100,0));
World.add(world.Rope1);

Rope2=newRope((bobObject2.body,Roof.body,-50,0));
World.add(world.Rope2);

Rope3=newRope((bobObject3.body,Roof.body,0,0));
World.add(world.Rope3);

Rope4=newRope((bobObject4.body,Roof.body,+50,0));
World.add(world.Rope4);

Rope5=newRope((bobObject5.body,Roof.body,+100,0));
World.add(world.Rope5);
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine);

  Roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

 drawSprites();
 
}

functionkeyPressed(); {
	if(keyDown="UP_ARROW"){
		Matter.body.applyFORCE(bobObject1.body.position,{x:-730,y:0});
	}
}


