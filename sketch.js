//Create variables here
var dog,Food;
var database;
var gameState=0;
var form,game,player;
var playerCount;
function preload()
{/*
  //load images here
var  DogImg=loadImage("Dog(1).png");
var  DogHappy=loadImage("images/dogImg(1).png");
*/
}

function setup() {
  createCanvas(800, 700);
  
 dog=createSprite(400,350,50,50);
 dog.shapeColor = "brown";
 //dog.addImage(DogImg);
 database=firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock,writeStock);

game=new Game();
game.getState();
game.start();
}


function draw() {  
  if(gameState==1){
  background(46,139,87);
  textSize(30);
  fill("white");
 text("Food remaining : "+Food,280,250);
 
 if(keyWentDown(UP_ARROW)){
   writeStock(Food);
  //dog.addImage(dogHappy);
 }
if(playerCount==2)
gameState=1;

  drawSprites();
  //add styles here
}//if close
}
function readStock(data){
Food=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1;
}
  database.ref('/').update({
    Food:x
  })


}



