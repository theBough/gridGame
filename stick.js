let st;
function createStick() {
  st = new Clickable(20, 400);
  st.resize(30, 150);
  st.cornerRadius = 1;

  st.onPress = function () {
    st.isClicked = true;
  }; //end onPress
  st.onRelease = function () {
    st.isClicked = false;
    st.text = st.x;
    st.x = Math.floor(st.x / 30) * 30;
    st.y = Math.floor(st.y / 30) * 30;
    findSquare();
  }; //end onRelease
}
function findSquare() {
  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      if (s[i][j].x == st.x && s[i][j].y == st.y) {
        //we found the square where the stick was dropped.
        s[i][j].color ="yellow";
        s[i+1][j].color ="yellow";
        st.locate(20,400);
      } //if
    } //j loop
  } //i loop
} //find square
