const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plinkos=[];
var particals=[];

var score =0;
var count = 0;
var gameState ="drop";

function preload(){



}

function setup() {
	createCanvas(500, 400);
  
console.log(count);
  engine = Engine.create();
	world = engine.world;

	ground=new Ground(240,400,900,20);
	stand1=new Dvision(5,350,10,200);
	stand2=new Dvision(100,350,10,200);
	stand3=new Dvision(200,350,10,200);
	stand4=new Dvision(300,350,10,200);
	stand5=new Dvision(400,350,10,200);
	stand6=new Dvision(495,350,10,200);


	for (var i =35; i <=width; i=i+50) {
		plinkos.push(new Plinko(i,75,10));
	}
	  
	for (var i = 10; i <=width-10; i=i+50) {
		plinkos.push(new Plinko(i,110,10));
	}
	  
	for (var i = 35; i <=width; i=i+50) {
		plinkos.push(new Plinko(i,145,10));
	}
	  
	 for (var i = 10; i <=width-10; i=i+50) {
		plinkos.push(new Plinko(i,180,10));
	 }
  
}

function draw() {
  background("rgb(51,204,255)");  
  Engine.update(engine);

  


  if ( gameState =="drop") {
	
	textSize(35)
	fill("black"); 
	text("Score : "+score,20,40);
	fill("black");
	textSize(35)
	text(" 200 ", 7, 300);
	text(" 200 ", 110, 300);
	text(" 500 ", 210, 300);
	text(" 100 ", 310, 300);
	text(" 100 ", 410, 300);

	
   
	ground.display();
	fill('#FF6F6F'); 
	stand1.display();
	fill('#FF6F6F');
	stand2.display();
	fill('#FF6F6F');
	stand3.display();
	fill('#FF6F6F');
	stand4.display();
	fill('#FF6F6F');
	stand5.display();
	fill('#FF6F6F');
	stand6.display();  

  


	for(var i=0;i<plinkos.length;i++){
	  plinkos[i].display();
	  }

	 if(particals!=null)
    {
		for(var t=0;t<particals.length;t++){
			particals[t].display();

			}
        
			if (particals.y<= 370)
			{
				console.log("c");
				if (particals.x >= 300 && particals.x <= 500) 
				{
					score=score+100;      
					particals=null;
					if ( count>= 15) gameState ="end";                          
					console.log("d");
				}
	
				else if (particals.x >= 200 && particals.x <= 300 ) 
				{
					score = score + 500;
					particals=null;
					if ( count>= 15) gameState ="end";
					console.log("e");
				}
				
				else if (particals.x <= 195 && particals.x >= 0 )
				{
					score = score + 200;
					particals=null;
					console.log("f");
					if ( count>= 15)  gameState ="end";
				}          				
	        }
		}
	}
	if ( gameState =="end") {
    
		textSize(100);
		text("GameOver", 150, 250);
		text("press tab to start again", 150, 250);
		if(gameState==="end" && keyCode === 32){
			gameState ="drop";
		}  
	
	}


  drawSprites();
}

function keyPressed(){
	if(keyCode === 32 && gameState === "drop" ){
		particals.push(new Particals(mouseX, 10, 10, 10));	
		count=count+1;
	}
	}


	