var canvas;
var music;
var movingBox;
var red,
    blue,
    green,
    pink;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    background.shapeColor="yellow";
    //create 4 different surfaces
    red = createSprite(700, 599, 190, 80);
    red.shapeColor = "red";
   
    
    blue = createSprite(300,599,190,80);
    blue.shapeColor = "blue";
   
  
    green =  createSprite(100, 599, 190, 80);
    green.shapeColor = "green";
  
    pink =  createSprite(500, 599, 190, 80);
    pink.shapeColor = "pink";

   
    


    //create box sprite and give velocity
    movingBox =  createSprite(random(20,750), 50, 50, 50);
    movingBox.velocityY = 5;    
    movingBox.velocityX = 3;    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   

   if(movingBox.isTouching(green) && movingBox.bounceOff(green)){
    movingBox.shapeColor = "green";
   
   }
 
   if(movingBox.isTouching(blue) && movingBox.bounceOff(blue)){
    movingBox.shapeColor = "blue";
    
   }
 
   if(movingBox.isTouching(pink) && movingBox.bounceOff(pink)){
    movingBox.shapeColor = "pink";
    movingBox.velocityX  = 0;
    music.stop();
   }
 
    if(movingBox.isTouching(red) && movingBox.bounceOff(red)){
    movingBox.shapeColor = "red";
    
   }

       
 createEdgeSprites();

 

    //add condition to check if box touching surface and make it box
    drawSprites();
}
