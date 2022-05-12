let st;
function createStick(){
  st = new Clickable(20,400);
  st.resize(30,150);
  st.cornerRadius = 1;
  st.text = "";
  st.onPress = function(){
    st.isClicked = true;
  }//end onPress
  st.onRelease = function(){
    st.isClicked = false;
  }//end onRelease
}
