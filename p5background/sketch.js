let xpos = 0;
let ypos = 0;
let amount = 10;
let xArr = new Array(amount);
let yArr = new Array(amount);


function setup() {
  createCanvas(windowWidth, windowHeight);
  xpos = displayWidth/2;
  ypos = displayHeight/2;
    for(let i=0;i<amount;i++){
      xArr[i] = random(displayWidth);
      yArr[i] = random(displayHeight);
    }
    //noCursor();
}

function draw() {
  for(let i=0;i<amount;i++){
    ellipse(xArr[i],yArr[i],10,10);
  }
  xpos = lerp(xpos,mouseX,0.1);
  ypos = lerp(ypos,mouseY,0.1);
  background('#fae');
  fill('rgba(50,170,50, 1)');
  ellipse(xpos,ypos,20,20);
}
