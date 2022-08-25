var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,15,15);
  box.shapeColor = "green";
}



function draw() 
{
  background(30);

  if(keyDown("w")){
    box.y = box.y-5;
  }
  if(keyDown("s")){
    box.y = box.y+5;
  }
  if(keyDown("a")){
    box.x = box.x-5;
  }
  if(keyDown("d")){
    box.x = box.x+5;
  }
  drawSprites();

}




