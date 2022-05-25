let c;
function createCube(){
  c= new Clickable(150,400);
  c.resize(90,90);
  c.cornerRadius = 0;
  c.color = "blue";
  c.onPress = function(){
    c.isClicked = true;
  }
  c.onRelease = function(){
    c.isClicked = false;
    c.text = "";
    c.x = Math.floor(st.x / 30) * 30;
    c.y = Math.floor(st.y / 30) * 30;
    findSquare();
  }
  
}
