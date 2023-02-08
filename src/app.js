import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const palos = ["♣", "♠", "♥", "♦"];

let btnAddCard = document.getElementById("btn_add_card");
btnAddCard.addEventListener("click", generarCarta);

function generarCarta() {
  const random = el => el[Math.floor(Math.random() * el.length)];

  let getNumero = random(numeros);
  let getPalo = random(palos);

  const printNumero = document.getElementById("number");
  printNumero.innerHTML = getNumero;

  const printPalo = document.querySelectorAll(".palo");
  for (let i = 0; i < printPalo.length; i++) {
    printPalo[i].innerHTML = getPalo;

    if (getPalo === "♥" || getPalo === "♦") {
      (printPalo[i].style.color = "red") && (printNumero.style.color = "red");
    } else if (getPalo === "♠" || getPalo === "♣") {
      (printPalo[i].style.color = "black") &&
        (printNumero.style.color = "black");
    }
  }
}

window.onload = function() {
  generarCarta();
};
