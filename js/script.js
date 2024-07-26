"use strict";

//  functions

//  generating the secret number
const generateSecret = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const changeScoreTo = function (score) {
  document.querySelector(".score").textContent = score;
};

const changeBackgroundColor = function (option) {
  if (option === 0) {
    // default option
    document.body.style.backgroundColor = "var(--game-color)";
  } else {
    document.body.style.backgroundColor = "var(--color-win)";
  }
};

const showSecretNumber = function (option) {
  const theNumber = document.querySelector(".the-number");
  if (option === 0) {
    // default option
    theNumber.textContent = "?";
    theNumber.style.width = "8rem";
  } else {
    theNumber.textContent = secretNumber;
    theNumber.style.width = "16rem";
  }
};

const handleCheck = function () {
  const guess = Number(document.querySelector(".guess").value); // if the guess is string it will return NaN

  // console.log(secretNumber, guess, score);

  if (!guess) {
    // if 0, Nan, ''
    displayMessage("⛔ No Number!");
  } else if (guess < 1 || guess > 20) {
    displayMessage("⛔ Between 1 and 20!");
  } else if (guess === secretNumber) {
    displayMessage("🏆 You won!");
    changeBackgroundColor(1);
    showSecretNumber(1);
    if (highScore < score) { // take the highest score
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(
        (guess < secretNumber ? "📉 Lower " : "📈 higher ") + "Guess!"
      );
      changeScoreTo(--score); // decreament the value in memory and code
    } else {
      changeScoreTo(0);
      displayMessage("💥 You Lost!");
    }
  }
};

const handlePlayAgain = function () {
  score = 20;
  changeScoreTo(score);
  secretNumber = generateSecret();
  // console.log(secretNumber);
  showSecretNumber(0);
  displayMessage("Start guessing...");
  changeBackgroundColor(0);
  document.querySelector(".guess").value = "";
};

// variables states
let secretNumber = generateSecret();
// console.log(secretNumber);
let score = 20;
let highScore = 0;

// events listeners

// if the user clicks on the check button
document.querySelector(".check").addEventListener("click", handleCheck);

// if the user presses the enter key
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleCheck();
  }
});

// if the user clicks on the again button
document.querySelector(".again").addEventListener("click", handlePlayAgain);

// prevent the user from using right click
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

/* TODO: 
  - show a popup message when first loading the page, the message tellls the rules of the game: if you reloaded the page you will lose your highscore. 
  */
