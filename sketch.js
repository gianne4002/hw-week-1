function setup() {
    createCanvas(400,300);
  }
  
  function draw() {
    background(54,76,132);
    stroke(255);
    strokeWeight(2);
    noFill();
    
    if(mouseX<210) {
      fill(245,199,77);
    }
    
    ellipse(200,150,100,100)
    ellipse(mouseX,mouseY,30);
      fill(245,199,77);
  }