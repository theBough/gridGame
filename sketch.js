function setup() {
  createCanvas(400, 400);+
  createSquares();
}

function draw() {
  background(220);
  for(j=0 ; j <5 ; j++){
    s[j].draw();
    if(s[j].isClicked){
      s[j].x = mouseX;
      s[j].y = mouseY;
    }
  }//end loop
  
}
