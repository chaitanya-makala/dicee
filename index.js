document.querySelector(".img1").setAttribute("src", "./images/6.png");
document.querySelector(".img2").setAttribute("src", "./images/6.png");
let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);
let src1 = "./images/" + dice1 + ".png";
let src2 = "./images/" + dice2 + ".png";
document.querySelector(".img1").setAttribute("src", src1);
document.querySelector(".img2").setAttribute("src", src2);
if (dice1 === dice2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (dice1 > dice2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
