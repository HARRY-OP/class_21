var fixedRect, movingRect;
var rex,ob;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 rex= createSprite(50,100,80,30);
ob= createSprite(400,100,30,80);
rex.velocityX=4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(rex,ob)){
rex.shapeColor="cyan";

  }
  bounceoff(rex,ob)


  
  drawSprites();
}
 





































