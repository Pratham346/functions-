var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
   movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX=5;
  movingRect.velocityY=6;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  

 if(isTouching(movingRect,fixedRect)===true){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 } 
 bounceOff(movingRect, fixedRect);
  drawSprites();
}






