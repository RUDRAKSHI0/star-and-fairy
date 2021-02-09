//var Engine = Matter.Engine;
//const World = Matter.World;
//var Bodies = Matter.Bodies;
var bg,bgImage;
var fairy,fairy_stact,fairy_flying,fairy_flying1;
var star,starImage;
var music;
 function preload(){
    bgImage=loadImage("starnight.png");
    fairy_stact=loadAnimation("fairy1.png");
    fairy_flying=loadAnimation("fairy2.png","fairy1.png");
    fairy_flying1=loadAnimation("fairy3.png","fairy4.png");
    starImage=loadImage("star.png");
    music=loadSound("JoyMusic.mp3");

}

function setup() {
  createCanvas(790, 600);

  //engine=Engine.create();
  //world=engine.world;

  fairy=createSprite(150,460,50,50);
  fairy.addAnimation("stationary",fairy_stact);
  fairy.addAnimation("flying",fairy_flying);
  fairy.addAnimation("flying1",fairy_flying1);
  fairy.scale=0.2;

  star=createSprite(500,50,50,50,{isStatic:false});
  star.addImage(starImage);
  star.scale=0.3;
  //star1=Bodies.star;
  //World.add(world,star1);
  
 
}


function draw() {
  background(bgImage);
  //Engine.update(engine);
  //imageMode(CENTRE);
//image(starImage,500,50,50,50);
  keyPressed();
if( fairy.x>520)
{fairy.velocityX=0;}
if( fairy.x<90)
{fairy.velocityX=0;}

  if(keyCode===DOWN_ARROW){
    star.velocityY=5;
  }

 // star.debug=(star.x);
star.setCollider("circle",-40,100,40);
  fairy.setCollider("circle",520,-50,40);

  if(star.isTouching(fairy)){
    music.stop();
    star.velocityY=0;
    fairy.velocityX=0;
  }
drawSprites();
}

function keyPressed(){
  if (keyCode===RIGHT_ARROW &&  fairy.x<540 ){
    music.play();
    fairy.velocityX=2;
    fairy.changeAnimation("flying", fairy_flying);
   
  }
  
  if (keyCode===LEFT_ARROW &&  fairy.x>80 ){
    music.play();
    fairy.x=fairy.x - 5;
    fairy.changeAnimation("flying1", fairy_flying1);
  } 
 // keyCode=21;
 
}