function setup() {
  createCanvas(800,800);
  rect1 = createSprite(400,100,80,100);
  rect1.shapeColor = "red";
  rect1.debug = true

  rect2 = createSprite(400,700,80,100);
  rect2.shapeColor = "red";
  rect2.debug = true

  rect1.velocityY = 3;
  rect2.velocityY = -3;
}

function draw() {
  background(0,10,10); 
  

  if((rect2.x-rect1.x<rect2.width/2+rect1.width/2)&&
  (rect1.x-rect2.x<rect2.width/2+rect1.width/2))
  {
    rect1.velocityX = rect1.velocityX*(-1);
    rect2.velocityX = rect2.velocityX*(-1)
  }

  if((rect2.y-rect1.y<rect2.height/2+rect1.height/2)&&
  (rect1.y-rect2.y<rect2.height/2+rect1.height/2))
  {
    rect1.velocityY = rect1.velocityY*(-1);
    rect2.velocityY = rect2.velocityY*(-1)
  }



  drawSprites();
}