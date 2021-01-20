var fixed;
var move;

function setup() {
  createCanvas(800,400);
  move = createSprite(400, 200, 50, 100);
  move.shapeColor="blue";
  fixed = createSprite(200,200,100,50);
  fixed.shapeColor="blue";
  move.velocityX = -2;
  fixed.velocityX = 3;
  move.velocityY = -3;
  fixed.velocityY = 2;

  
}

function draw() {
  background(255,255,255);  

  console.log(move.width/2+fixed.width/2,move.x-fixed.x);

  if(move.x-fixed.x<move.width/2+fixed.width/2 && fixed.x-move.x<move.width/2+fixed.width/2 ){
     move.velocityX = move.velocityX *(-1);
     fixed.velocityX = fixed.velocityX *(-1);
  }
  if(move.y-fixed.y<move.height/2+fixed.height/2 && fixed.y-move.y<move.height/2+fixed.height/2){
    move.velocityY =  move.velocityY *(-1);
    fixed.velocityY = fixed.velocityY *(-1);
  }
  

  
  drawSprites();
}