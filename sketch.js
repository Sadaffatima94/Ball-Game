var ball;
var img;
function setup(){
canvas=createCanvas(400,400);

ball=createSprite(200,200,30,30);
ball.addAnimation("a",img);
ball.scale=0.12;
}

function draw(){
background("black");

if(keyDown(UP_ARROW)){
  ball.y-=5;
}

drawSprites();
}

function preload(){
img=loadImage("img2.png")
}

