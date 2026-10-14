let x, y, d, xDir, yDir, speed, r, g, b;

let px, py, pd, angle, angle2, angleSpeed, angleSpeed2, pr, pg, pb;

let sx, sy, sd, sxDir, syDir, sAngle, sAngleSpeed;
let sr, sg, sb;

let trailLayer;
let stackLayer;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);

  trailLayer = createGraphics(width, height);
  trailLayer.angleMode(DEGREES);

  stackLayer = createGraphics(width, height);

  x = random(width);
  y = random(height);
  d = random(30, 100);

  xDir = random(-2, 2);
  yDir = random(-2, 2);

  speed = random(1, 10);

  r = 155;
  g = 255;
  b = 200;

  px = width / 2;
  py = height / 2;

  pd = 100;

  angle = 0;
  angle2 = 90;

  angleSpeed = 3;
  angleSpeed2 = 10;

  pr = random(0, 255);
  pg = random(0, 255);
  pb = random(0, 255);

  sr = 100;
  sg = 200;
  sb = 100;

  sx = width / 2;
  sy = height / 2;

  sd = 10;

  sxDir = random(-2, 2);
  syDir = random(-2, 2);

  sAngle = 0;
  sAngleSpeed = random(3, 10);
}

function draw() {
  background(0);

  pd = mapSin(angle, 3, 200);

  pr = mapSin(angle2, 100, 255);
  pg = mapSin(angle2, 50, 200);

  trailLayer.background(0, 5);
  trailLayer.fill(pr, pg, pb);
  trailLayer.circle(px, py, pd);
  image(trailLayer, 0, 0);

  angle += angleSpeed;
  angle2 += angleSpeed2;

  stackLayer.erase(10, 0);
  stackLayer.rect(0, 0, width, height);
  stackLayer.noErase();

  displayStack();
  updateStack();
  KeepStackInCanvas();
  image(stackLayer, 0, 0);

  fill(r, g, b);
  circle(x, y, d);

  x += xDir * speed;
  y += yDir * speed;

  KeepInCanvas();
}

function KeepInCanvas() {
  if ((x > width) || (x < 0)) {
    xDir = -xDir; // changes direction
    randomColor();
  }
  if ((y > height) || (y < 0)) {
    yDir = -yDir; // changes direction
    randomColor();
  }
}

function randomColor() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

/// myfunctions

function displayStack() {

  for (let i = 10; i > 0; i--) {

    let offSetX = mapSin(sAngle, -5, 5);
    let offSetY = mapSin(sAngle, -3, 7);
    stackLayer.stroke('yellow');
    stackLayer.fill(sr, sg, sb);
    stackLayer.circle(sx + offSetX * i, sy + offSetY * i, sd * i);

  }

}

function KeepStackInCanvas() {

  if ((sx > width) || (sx < 0)) {

    sxDir = -sxDir;

  }
  if ((sy > height) || (sy < 0)) {

    syDir = -syDir;

  }

}

function updateStack() {

  sx += sxDir;
  sy += syDir;

  sAngle += sAngleSpeed;

}

//Return function

function mapSin(angle, minVal, maxVal) {
  let sinMap;

  sinMap = map(sin(angle), -1, 1, minVal, maxVal);

  return sinMap;
}