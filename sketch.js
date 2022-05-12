function setup() {
  createCanvas(400, 600);+
  createSquares();
  createStick();
}

function draw() {
  background(220);
  for(i=0 ; i <10 ; i++){
    for(j=0 ; j<10; j++){
      s[i][j].draw();
    }//end j loop    
  }//end i loop
  st.draw();
  if(st.isClicked){
    st.locate(mouseX, mouseY)
  }
  
}
