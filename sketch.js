//let x = 0;
let y = 0;
let width = 800;
let height = 800;
let angle = 0;
let offset = 5;
let size = 20;
let max = 400;
let viewDist = 600;
let offX;
let offY;
let noiseScale = 0.1;

function setup() {
  cvn = createCanvas(width, height, WEBGL);
  ma = atan(cos(QUARTER_PI))+0.25;
  offX = random(10000);
  offY = random(10000);
}

function draw() {
  background(color('#8bbabb'));
  ortho(-viewDist,viewDist,viewDist,-viewDist,0,1300);
  pointLight(255,255,255,0,0,400);
  directionalLight(150,150,150,-0.8,-0.8,0);
  rotateX(ma);
  rotateY(-QUARTER_PI);
  normalMaterial();
  for(let z=0;z<height;z+=size){
    for(let x=0;x<width;x+=size){
      push();
      let n = noise(offX+(x/size)*noiseScale,offY+(z/size)*noiseScale);
      let h = floor(map(n,0,1,offset,max));

      //fill('rgba(50,150,50, 1)');
      translate(x-width/2+90,h/2,z-height/2+90);
      box(size,h,size);
      pop();
    }
  }
  offX+=0.01;
}
/*
function mouseWheel(event) {
  viewDist +=event.delta;
  viewDist = constrain(viewDist,300,1000);
}*/
