var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground,groundImage
var survivaltime=0;
var score=0;





function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png") 
 
bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  
  
  
  monkey=createSprite(80,350,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  monkey.setCollider("rectangle",0,0);
  monkey.debug = false
  
obstacleGroup=createGroup(); 
foodGroup=createGroup();  

 
 
  
  
  
 
}

function draw() {
  background("white");
  //displaying score
 Ground=createSprite(400,350,900,10);
Ground.velocityX = -4
 monkey.collide(Ground);
  
   if (Ground.x < 0){
      Ground.x = Ground.width/2;
    } 
    
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
        
    }
   monkey.velocityY = monkey.velocityY + 0.7  
   
 if(obstacleGroup.isTouching(monkey))  {
  obstacleGroup.setVelocityXEach(0)
  foodGroup.setVelocityXEach(0);
   survivaltime=0;
}  

   Obstacle();
   Banana();
  
  stroke=("black");
  textSize(20);
  fill("black");
 survivaltime=Math.ceil(frameCount/frameRate());
text("survival Time:"+survivaltime,100,50)
  
  drawSprites();
   
  
}

function Banana(){
  if(frameCount%80===0){
  banana = createSprite(610,200,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5
  banana.Y=Math.round(random(120,200));
  banana.lifetime=-1
  foodGroup.add(banana)}
}
function Obstacle(){
  if(frameCount%300===0){
  obstacle=createSprite(601,309,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2
  obstacle.velocityX=-8
  obstacle.lifetime=-1
  obstacleGroup.add(obstacle);

  }
}

