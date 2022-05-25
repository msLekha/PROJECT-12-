var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var invisibleGround,invisibleGround2;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadImage("Jake1.png","Jake2`.png");
}

function setup(){
createCanvas(400,400);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

boy = createSprite(180,340,30,30);
boy.scale=1;
boy.addAnimation("JakeRunning",boyImg);

invisibleGround = createSprite(370, 200, 100, 400);
invisibleGround.visible = false;

invisibleGround2 = createSprite(40, 200, 100, 400);
invisibleGround2.visible = false;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);

  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);


  if(path.y > 400 ){
    path.y = height/2;
  }
  drawSprites();
}