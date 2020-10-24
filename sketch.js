//To declare the variables outside the functions so that they are declared globally.
var bullet,wall;
var thickness,speed,weight;
var damage;

function setup()
{
  //To create the canvas with the values shown below(1600,400) i.e.height & width.
  var canvas=createCanvas(1600,400);

  //To create a sprite named bullet whose colour is white.
  bullet=createSprite(70,200,50,10);
  bullet.shapeColor="White";

  //To give random values to some variables.
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  //To give values to the var- wall.
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor="80,80,80";

  //To give velocity to the var-bullet.
  bullet.velocityX=speed;
  }

function draw()
{
  //To change the colour of the background.
  background("DarkViolet");

  //To call the function hasCollided().
  if (hasCollided (bullet,wall))
  {
    bullet.velocityX=0;

   //To give the formula to the var- damage.
   damage=0.5*weight*speed*speed/thickness*thickness*thickness;
   
   if(damage<10)
   {
     wall.shapeColor="green";
   }
   else
   {
     wall.shapeColor="red";
   }
  }
  
  //To draw the sprites.
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+ lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }
}