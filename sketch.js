var bullet,wall;
var speed,weight;
var damage,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,10,50);
  bullet.shapeColor = "white";
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  weight=random(30,52);
  speed=random(223,321);
  bullet.velocityX = speed;
}

function draw() {
  background("black");
  collide(wall,bullet);  
  drawSprites();
}
function collide(ob1,ob2){
if(ob1.x - ob2.x < ob1.width/2 + ob1.width/2){
 ob1.velocityX = 0;
 ob2.velocityX = 0; 
 damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  if(damage < 3.68){
    wall.shapeColor = "green";
  }
  if(damage > 12.43){
    wall.shapeColor = "red";
  }
}
}