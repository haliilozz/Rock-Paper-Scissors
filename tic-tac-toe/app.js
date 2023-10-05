"use strict";

//*--------------selector
//?resimler
const rockImg = document.getElementById("rock");
const paperImg = document.getElementById("paper");
const scissorImg = document.getElementById("scissor");
const selectionArticle = document.querySelector(".selection");
//?secilen elemamların taşıyıcıları
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");
//?message
const messagePar = document.querySelector(".message");
//?score
const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const yourScoreSpan = document.getElementById("your-score");
//?modal
const modalCardSection = document.querySelector(".modal-card");

//*--------------variables
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
//?COLORS
const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";
//*--------------event listeners
selectionArticle.addEventListener("click", (e) => {
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});
//*--------------functions
const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
  calculateResult();
};

const calculateResult = () => {
  //?eşitlik durumu
  if (userSelectImg.alt === pcSelectImg.alt) {
    draw();
  } else {
    if (userSelectImg.alt === "rock") {
      pcSelectImg.alt === "paper" ? youLost() : youWin();
    } else if (userSelectImg.alt === "scissor") {
      pcSelectImg.alt === "rock" ? youLost() : youWin();
    } else if (userSelectImg.alt === "paper") {
      pcSelectImg.alt === "scissor" ? youLost() : youWin();
    }
  }
  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal();
  }
};
const draw = () => {
  messagePar.textContent = "Its a draw";
  scoreCardSection.style.color = YELLOW;
  messagePar.style.backgroundColor = YELLOW;
};

const youLost = () => {
  messagePar.textContent = "you lost";
  scoreCardSection.style.color = RED;
  messagePar.style.backgroundColor = RED;
  pcScoreSpan.textContent++;
};
const youWin = () => {
  messagePar.textContent = "you WİN";
  scoreCardSection.style.color = GREEN;
  messagePar.style.backgroundColor = GREEN;
  yourScoreSpan.textContent++;
};

const openModal = () => {
  modalCardSection.classList.add("show");
};
