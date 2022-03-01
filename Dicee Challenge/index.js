var randomNumber1 = Math.floor(Math.random()*6)+1;
var str = "images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",str);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var str1 = "images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",str1);

var win;
if(randomNumber1 > randomNumber2){
  win = "play 1 wins";
}
else if(randomNumber1 < randomNumber2){
  win = "play 2 wins";
}
else{win = "Draw!";}
document.querySelector("h1").innerHTML = win;
