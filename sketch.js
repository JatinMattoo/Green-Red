var fixedRect,movingRect; 

function setup() { 
  createCanvas(800,800);
   fixedRect=createSprite(300, 400, 50, 80);
    fixedRect.shapeColor="green"; 
    fixedRect.debug=true;
     movingRect=createSprite(600, 400, 80, 30);
     movingRect.shapeColor="green"; 
     movingRect.debug=true; 
     movingRect.velocityX=-4
     fixedRect.velocityX=4
    } 

function draw() {
   background("black");
    //movingRect.x=mouseX; 
    //movingRect.y=mouseY;
     console.log(movingRect.x-fixedRect.x) 
     if(movingRect.x-fixedRect.x <= fixedRect.width/2+movingRect.width/2&&
      fixedRect.x-movingRect.x<= fixedRect.width/2+movingRect.width/2&&
      fixedRect.y-movingRect.y<= fixedRect.height/2+movingRect.height/2&&
      movingRect.y-fixedRect.y <= fixedRect.height/2+movingRect.height/2)
     { 
       movingRect.velocityX=movingRect.velocityX*(-1)
       fixedRect.velocityX=fixedRect.velocityX*(-1)
      
      //fixedRect.shapeColor="red"; movingRect.shapeColor="red"; 
      } 
       /*else{ 
         fixedRect.shapeColor="green";
          movingRect.shapeColor="green"; 
        } */
        drawSprites();
       }