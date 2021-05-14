var jerry, jeeryimg, jerryteasing, jerryrunning, jerrycaught;
var tom, tomimg, tomtocatch, tomgonnacatch, tomcaught;
var garden,gardenimg;


function preload() {


gardenimg= loadImage("images/garden.png");

tomimg= loadAnimation("images/cat1.png");
tomtocatch= loadAnimation("images/cat2.png");
tomgonnacatch= loadAnimation("images/cat3.png");
tomcaught= loadAnimation("images/cat4.png");

jerryimg= loadAnimation("images/mouse1.png");
jerryteasing= loadAnimation("images/mouse2.png");
jerryrunning= loadAnimation("images/mouse3.png");
jerrycaught= loadAnimation("images/mouse4.png");


}

function setup(){

createCanvas(1000,800);

jerry= createSprite(200,500);
jerry.addAnimation("jerry", jerryimg);
//jerry.velocityX=2;

tom= createSprite(800,500);
tom.addAnimation("tom", tomimg);
//tom.velocityX= 3;


tom.scale=0.2;
jerry.scale=0.1;

}

function draw() {

background(gardenimg);
  
if(tom.x-jerry.x<(tom.width-jerry.width)/2){
  tom.velocityX=0;
  tom.addAnimation("tomlastimage", tomcaught);
  tom.changeAnimation("tomlastimage");
  jerry.addAnimation("jerrylastimage", jerrycaught);
  jerry.changeAnimation("jerrylastimage");
}




drawSprites();


}


function keyPressed(){
   if(keyCode===LEFT_ARROW){
     tom.velocityX=-5;
     tom.addAnimation("tom", tomtocatch);
     jerry.addAnimation("jerryteasing", jerryteasing);
     jerry.frameDelay=25;
     jerry.changeAnimation("jerryteasing");

   }
   
  //For moving and changing animation write code here


}
