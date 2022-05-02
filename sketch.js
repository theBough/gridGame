function setup() {
  createCanvas(400, 400);+
  createSquares();
}

function draw() {
  background(220);
  for(i=0 ; i <5 ; i++){
    s[i].draw();  
  }//end loop
  
}
