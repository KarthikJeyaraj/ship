var sea, sea_ing
var ship, ship_moving
function preload(){
 ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 sea_ing=loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  
  
  sea=createSprite(200,200,10,10)
  sea.scale=0.25
  sea.addImage(sea_ing)
  ship=createSprite(100,200,50,50)
  ship.addAnimation("move",ship_moving)
  ship.scale=0.25
}

function draw() {
  background("blue");
  drawSprites()
  sea.velocityX=-3
  if(sea.x<0){
    sea.x = sea.width/2;
  }
}

