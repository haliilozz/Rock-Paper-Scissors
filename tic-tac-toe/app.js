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
//*--------------variables
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
//*--------------event listeners
selectionArticle.addEventListener("click", (e) => {
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
  }
});
const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
};
// rockImg.addEventListener("click", () => {
//   image.src = "./assets/rock.png";
//   yourChoiceDiv.appendChild(image);
// });
// paperImg.addEventListener("click", () => {
//   image.src = "./assets/paper.png";
//   yourChoiceDiv.appendChild(image);
// });
// scissorImg.addEventListener("click", () => {
//   image.src = "./assets/scissor.png";
//   yourChoiceDiv.appendChild(image);
// });

//*--------------functions
