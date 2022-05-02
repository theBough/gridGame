function setup() {
  createCanvas(400, 400);+
  createSquares();
}

function draw() {
  background(220);
  for(j=0 ; j <5 ; j++){
    s[j].draw();  
  }//end loop
  
}
