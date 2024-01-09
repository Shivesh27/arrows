var scl = 100;

var rows, cols;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  rows = floor(width/scl);
  cols = floor(height/scl);
  
}

function draw() {
  background(0);
  
  for(let i = 0; i <= cols; i++ ) {
    for(let j = 0; j <= rows; j ++ ){
      
        let x = mouseX - (j*scl);
        let y = mouseY - (i*scl);
        let a = atan2(y, x);
    
      
      var v = p5.Vector.fromAngle(PI/4)
      
      stroke(`rgba(255,255,255,${dist(mouseX, mouseY, j*scl, i*scl)/130} )`)
      strokeWeight(2)
      push()
      translate(j*scl, i*scl)
      rotate(a)
      
      line(0,0,scl/2,0)
      
      pop()
      
      //rect(i * scl, j * scl, scl, scl)
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  
  rows = floor(width/scl);
  cols = floor(height/scl);
}