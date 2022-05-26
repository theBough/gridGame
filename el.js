let l;
let l2;
function createEl(){
  l = new Clickable(200,400);
  l2 = new Clickable(200,430);
  l.resize(30,60);
  l2.resize(60,30);
  l.color = "pink"
  l2.color = "pink"
  l.cornerRadius = 0;
  l2.cornerRadius = 0;
  l.text = ""
  l2.text = ""
  l.onPress = function(){
    l.isClicked = true;
  }
  l2.onPress = function(){
    l2.isClicked = true;
  }
  l.onRelease = function(){
    l.isClicked = false;
    l.x = Math.floor(l.x / 30) * 30;
    l.y = Math.floor(l.y / 30) * 30;
    findEl();
  } 
  l2.onRelease = function(){
    l2.isClicked = false;
    l2.x = Math.floor(l.x / 30) * 30;
    l2.y = Math.floor(l.y / 30) * 30;
    l2.y += 30   
  }
}//end createEl
function findEl(){
  
}
