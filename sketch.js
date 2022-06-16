function preload(){
shipImg=loadImage("Ship.png");
riverImg=loadImage("River.png");
ar treasureColletion=0;
ar PLAY=1;
ar END=0;
ar gameState=1;


}

function setup() {
 createCanvas(windowwidht,windowHeight);
 //createCanvas(widht,height);
 //createCanvas(200,200);
 path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;
ship=cretaeSprite(ship);

}

function draw() {
if(gameState===PLAY){
 background(0);
 // if(ship.x > height ){
  //   path.x = height/2;
  // }

  // if(ship.y > height ){
  //   path.x = height/2;
  // }

  // if(ship.x > height ){
  //   ship.y = height;
  // }
  if(ship.y > height ){
    ship.y = height/2;
  }
  
 
}