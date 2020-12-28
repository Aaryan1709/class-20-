function setup() {
    createCanvas(800,400);
    fixedRect = createSprite(200,200,80,100);
    fixedRect.shapeColor = "red";
    fixedRect.debug = true
  
    movingRect = createSprite(300,300,80,100);
    movingRect.shapeColor = "red";
    movingRect.debug = true
  }
  
  function draw() {
    background(0,10,10); 
    movingRect.x = mouseX;
    movingRect.y = mouseY;
  
    if((movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2)&&
    (fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)&&
    (movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2)&&
    (fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2))
    {
      fixedRect.shapeColor = "yellow";
      movingRect.shapeColor = "yellow";
    }
    else{
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  
    }
    
  
    drawSprites();
  }