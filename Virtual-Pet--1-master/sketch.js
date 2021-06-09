//Create variables here
var dog,happyDog;
var dataBase;
var foodS,foodStock;
function preload()
{
	//load images here
  dogIMG=loadImage("dogImg.png")
  dogIMG2=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250);
  dog.addImage(dogIMG);
  dog.scale = 0.15;
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStocks(foodS);
  dog.addImage(happyDog);
}
}



