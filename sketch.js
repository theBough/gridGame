function setup() {
  createCanvas(400, 600);
  createSquares();
  createStick();
  createCube();
  createEl();
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
  c.draw();
  if(c.isClicked){
    c.locate(mouseX, mouseY)
  }
  
  l.draw();
  l2.draw();
  if(l2.isClicked){
    l2.locate(mouseX,mouseY+30)
    l.locate(mouseX, mouseY)
  }
  if(l.isClicked){
    l2.locate(mouseX,mouseY+30)
    l.locate(mouseX, mouseY)
  }
}
