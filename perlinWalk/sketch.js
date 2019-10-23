//let x = 0;
let y = 0;
let width = 800;
let height = 800;
let angle = 0;
let offset = 30;
let size = 30;

function setup() {
  createCanvas(width, height, WEBGL);
  ma = atan(cos(QUARTER_PI))
}

function draw() {
  background(100);
  ortho(-400,400,400,-400,0,1000);

  pointLight(255,255,255,0,0,400);
  directionalLight(150,150,150,-0.8,-0.8,0);
  rotateX(ma);
  rotateY(-QUARTER_PI);

  let offsetH = 0;
  for(let x=0;x<width;x+=size){
    let a = angle + offsetH
    let h = map(sin(a),-1,1,offset,100);
    translate(x-width/2,0,0);
    box(size,h,size);
    //rect(i*(size+5)+35,height/2,size,h);
    offsetH += 0.3;
  }
  angle +=0.06;
}
