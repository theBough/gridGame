let c;
function createCube(){
  c= new Clickable(150,400);
  c.resize(90,90);
  c.cornerRadius = 0;
  c.color = "blue";
  c.onPress = function(){
    c.isClicked = true;
  }//end onPress
  c.onRelease = function(){
    c.isClicked = false;
    c.text = "";
    c.x = Math.floor(c.x / 30) * 30;
    c.y = Math.floor(c.y / 30) * 30;
    findCube();
  }//end on Release
  
}//end createCube

function findCube() {
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      if (s[i][j].x == c.x && s[i][j].y == c.y) {
        //we found the square where the stick was dropped.
        s[i][j].color ="yellow";
        s[i+1][j].color ="yellow";
        s[i+2][j].color ="yellow";
        s[i][j+1].color ="yellow";
        s[i][j+2].color ="yellow";
        s[i+1][j+1].color ="yellow";
        s[i+1][j+2].color ="yellow";
        s[i+2][j+1].color = "yellow";
        s[i+2][j+2].color ="yellow";
        
        c.locate(20,400);
      } //if
    } //j loop
  } //i loop
} //find square
