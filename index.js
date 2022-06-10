var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomdice1 = "dice" + randomNumber1 + ".png";
var randomimgsource = "images/" + randomdice1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomimgsource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomdice2 = "dice" + randomNumber2 + ".png";
var randomimgsource2 = "images/" + randomdice2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomimgsource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!! 🏆";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!! 🏆";
}
else {
    document.querySelector("h1").innerHTML = "Draw!! 😐";
}

