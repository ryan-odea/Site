let myColors = ["#FF0000", "#00A08A", "#F2AD00", "#F98400", "#5BBCD6"]
let randCircles = [];

function rotateCircle(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}


class randCircle{
  constructor(){
    this.randCol = random(myColors.length);
    this.randCol = floor(this.randCol);
    this.switch = random([-1, 1])
    
    this.x = random(width);
    this.y = random(height);
    this.r = random(80, 160);
    
    
  }
  drawCircle(){
    let [deltaX, deltaY] = rotateCircle(height/2, width/2, this.x, this.y, 0.025*this.switch);
    this.x = deltaX;
    this.y = deltaY;
    
    fill(addAlpha(myColors[this.randCol], 0.5));
    noStroke();
    ellipse(this.x, this.y, this.r*2, this.r*2)
  }
}


function addAlpha(color, opacity) {
    var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  for (var i = 0; i < 25; i++) {
  randCircles.push(new randCircle());  
    
    }
  
  
  
}

function draw() { 
  background(255);
 
  for (var i = 0; i < randCircles.length; i++){
    randCircles[i].drawCircle();
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}