var dog
var happyDog
var database
var foodS
var foodStock


function preload()
{
  dogImage=loadImage("images/dogImg.png")
dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(300,300)
  dog.addImage(dogImage)
  dog.scale=0.5
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
fill("yellow")
textSize(35)
text("food remaining: "+foodS,100,100)
  drawSprites();
  

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
  x=0;
}else{
  x=x-1
}
  database.ref("/").update({
    Food:x
  })
}


