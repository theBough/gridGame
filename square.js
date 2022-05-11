let s = [];
function createSquares() {
  for (i = 0; i < 10; i++) {
    s[i] = [];
    for(j=0 ; j<10 ; j++){
      s[i][j] = new Clickable(20 + j*20, 20 + i*20);
    s[i][j].resize(20, 20);
    s[i][j].color = " red";
    s[i][j].text = "";
    s[i][j].cornerRadius = 1;
    s[i][j].onHover = function () {
      this.color = "blue";
    }; //onHover
   
    }//end j loop    
  } //end loop
} //
