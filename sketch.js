//global variables
var butterFly;
var xpos;
var ypos;

//preloading assets
function preload(){
  butterFly = loadImage ("assets/butterfly.png");
}

function setup() {
  createCanvas (500,500);
  imageMode (CENTER);
  background (20,225,90);

  xpos = 100;
  ypos = 250;
 
}

function draw() {
  //background (200);
  frameRate (60);
  image(butterFly,xpos,ypos);
}

function keyPressed() {
  
  if (keyCode === DOWN_ARROW) {
    ypos = ypos + 10;
    
  }
    
  if (keyCode === RIGHT_ARROW) {
    xpos = xpos + 10;
    
  }
    
  if (keyCode === LEFT_ARROW) {
    xpos = xpos - 10;
    
  }
    
  if (keyCode === UP_ARROW) {
    ypos = ypos - 10;}
    
}