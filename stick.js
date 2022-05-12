let st;
function createStick(){
  st = new Clickable(20,400);
  st.resize(30,150);
  st.cornerRadius = 1;
  
  st.onPress = function(){
    st.isClicked = true;
  }//end onPress
  st.onRelease = function(){
    st.isClicked = false;
    st.text = st.x;
    st.x = Math.floor(st.x /30) *30
    st.y = Math.floor(st.y /30) *30
  }//end onRelease
}
