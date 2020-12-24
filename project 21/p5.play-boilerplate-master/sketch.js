var bullet, wall;
var speed,weight, thickness

function setup() {
  createCanvas(1600,500);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  
  
  car = createSprite(50,250,50,20);
  wall = createSprite(1200,250,thickness,height/2)

  wall.shapeColor=color(170);
  car.shapeColor=color(255);

  car.velocityX=speed;
}

function draw() {
  background(0);

 if(car.isTouching(wall)){
   car.velocityX=0
   
   var damage = 0.5 * weight * speed * speed/thickness * thickness * thickness
   
   if(damage > 10){
     wall.shapeColor="red"
   }

   else if (damage < 10){
     wall.shapeColor="green";
   }
 }
  
  
  drawSprites();
}