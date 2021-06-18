
var seaimage
var ship_running,ship
var sea
function preload(){
  ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaimage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(20,180,400,30)
  sea.addImage(seaimage)

  ship=createSprite(80,300)
  ship.addAnimation("running",ship_running)
  ship.scale=0.2
  

 
 
}

function draw() {
  background("blue");
  sea.velocityX=-3

  if(sea.x<0) {
    sea.x=sea.width/2
  }
  drawSprites()
 
}