var fixedRect, movingRect;

function setup() {
  createCanvas(500,500);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2  && 
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2    &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2  &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2

    ) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}