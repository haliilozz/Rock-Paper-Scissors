"use strict";

//*--------------selector
//?resimler
const rockImg = document.getElementById("rock");
const paperImg = document.getElementById("paper");
const scissorImg = document.getElementById("scissor");
const selectionArticle = document.querySelector(".selection");
//?secilen elemamların taşıyıcıları
const yourChoiceDiv = document.getElementById("your-choice");

//*--------------variables
let userSelectImg = document.createElement("img");

//*--------------event listeners
selectionArticle.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    yourChoiceDiv.appendChild(userSelectImg);
  }
});
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
