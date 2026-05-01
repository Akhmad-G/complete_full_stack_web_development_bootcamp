randomNumber1 = Math.floor((Math.random() * 6) + 1);
randomNumber2 = Math.floor((Math.random() * 6) + 1);

randomDice1 = "images/dice" + randomNumber1 + ".png";
randomDice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDice1);
document.querySelector(".img2").setAttribute("src", randomDice2);

h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    h1.innerHTML = "Player 2 Wins!🚩"
} else {
    h1.innerHTML = "Draw!";
}


