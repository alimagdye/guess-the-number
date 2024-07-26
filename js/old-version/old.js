"use strict";

//  generating the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const check = document.querySelector(".check");
let score = 20;
let highScore = 0;

const message = document.querySelector(".message");
const scoreText = document.querySelector(".score");
const theNumber = document.querySelector(".the-number");

check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value); // if the guess is string it will return NaN

  console.log(secretNumber, guess, score);
  if (!guess) {
    // if 0, Nan
    message.textContent = "⛔ No Number!";
  } else if (guess < 1 || guess > 20) {
    message.textContent = "⛔ Between 1 and 20";
  } else if (guess === secretNumber) {
    message.textContent = "🏆 You won!";
    document.querySelector("body").style.backgroundColor = "var(--color-win)";
    theNumber.textContent = secretNumber;
    theNumber.style.width = "16rem";
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Lower Number!";
      scoreText.textContent = --score;
    } else {
      scoreText.textContent = 0;
      message.textContent = "💥 You Lost!";
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 higher Number!";
      scoreText.textContent = --score;
    } else {
      scoreText.textContent = 0;
      message.textContent = "💥 You Lost!";
    }
  }
});

const again = document.querySelector(".again");

again.addEventListener("click", () => {
  score = 20;
  scoreText.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  theNumber.textContent = "?";
  theNumber.style.width = "8rem";
  message.textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "var(--game-color)";
  document.querySelector(".guess").value = "";
});

/* TODO: 
  - show a popup message when first loading the page, the message tellls the rules of the game. 
  - prevent the user from using right click. 
  - allow him using the enter key insteed of the button
  */
