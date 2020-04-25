
let yStart;
//let yPos = 0;
let timePos = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  yStart = displayHeight/3;
}

function draw() {
  background('#f9b282');
  fill('#de6b35');
  ellipse(displayWidth/2, displayHeight/2-300, 400);

  fill(50);
  rect(0,displayHeight/3,displayWidth,displayHeight);
  stroke(color(0, 0, 255));
  strokeWeight(8);
  drawLines();

  stroke(color(100, 100, 255));
  strokeWeight(4);
  drawLines();

  stroke(color(255, 255, 255));
  strokeWeight(1);
  drawLines();

  timePos += 0.05;
  if(timePos>=1){
    timePos = 0;
  }
  //yPos += 0.1;
}

function drawLine(yPos, num){
  line(0,yStart+pow(yPos,3),displayWidth,yStart+pow(yPos,3));
}

function drawLines(){
  line(0,yStart,displayWidth,yStart);
  line(displayWidth/2,yStart,displayWidth/2,displayHeight);
  for(let i=1;i<6;i++){
    line(displayWidth/2-i*150,yStart,displayWidth/2-(i*i+2)*250,displayHeight);
    line(displayWidth/2+i*150,yStart,displayWidth/2+(i*i+2)*250-70,displayHeight);
  }

  for(let i=-10;i<10;i++){
    if((timePos-i)%10>=0){
      drawLine((timePos-i)%10);
    }
  }
}
