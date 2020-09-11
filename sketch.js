var fixRect, movRect;

var gameObj1, gameObj2, gameObj3, gameObj4;

function setup() {
    createCanvas(800,400);
    
    fixRect = createSprite(400, 200, 26, 50);
    fixRect.shapeColor = "red";
  
    movRect = createSprite(600,150,50,26);
    movRect.shapeColor = "red";
    movRect.velocityX = -3;

    gameObj1 = createSprite(200,150,20,20);
    gameObj1.shapeColor = "red";

    gameObj2 = createSprite(400,150,20,20);
    gameObj2.shapeColor = "red";

    gameObj3 = createSprite(600,150,20,20);
    gameObj3.shapeColor = "red";

    gameObj4 = createSprite(700,150,20,20);
    gameObj4.shapeColor = "red";
  }  

function draw() {
    background("lightBlue");  
  
    //movRect.y = World.mouseY;
    //movRect.x = World.mouseX;

    console.log(movRect.x - fixRect.x);  

    if(isTouching(movRect, gameObj1)){
        gameObj1.shapeColor = "blue";
        movRect.shapeColor = "blue";   

    }
    else {
        gameObj1.shapeColor = "red";
        movRect.shapeColor = "red";    
    }

    bounceOff(movRect, gameObj2);

    drawSprites();
}