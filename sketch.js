var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness ,height/2);
  thickness = random( 22,83); 
  speed=random (223,321);
  weight=random(30,52)

  car.velocityX=speed;

}

function draw() {
  background("black");
  
  if (wall.x-car.x < (car.widht+wall.widht)/2){

    car.velocityX = 0;

  var deformation = 0.5 * weight * speed * speed/22509;
  

}
if (deformation>180 ) {
  car.shapeColor = "red";
}

if (deformation <180 && deformation> 100)

car.shapeColor = "yellow";

if (deformation>180 ) {
  
  car.shapeColor = "green"; 

}
 
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage = 0.5*weight*speed/(thickness*thickness*thickness);
  if (damage>10)
  {
    wall.shapecolor=("red");
  }
  if (damage<10)
  {
    wall.shapecolor=("green");
  }
}

}
  drawSprites();



function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.widht;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true 
  }
    return false ;
}