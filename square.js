let s = [];
function createSquares() {
  for (i = 0; i < 5; i++) {
    s[i] = new Clickable(200, 200 + i*50);
    s[i].resize(50, 50);
    s[i].color = " red";
    s[i].text = "W";
    s[i].cornerRadius = 1;
    s[i].onHover = function () {
      this.color = "blue";
    }; //onHover
    s[i].onOutside = function () {
      this.color = "grey";
    }; //onHover
  } //end loop
} //
