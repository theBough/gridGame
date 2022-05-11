function setup() {
  createCanvas(400, 400);+
  createSquares();
}

function draw() {
  background(220);
  for(i=0 ; i <10 ; i++){
    for(j=0 ; j<10; j++){
      s[i][j].draw();
    }//end j loop    
  }//end i loop
  
}
