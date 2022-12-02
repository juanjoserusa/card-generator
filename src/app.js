/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const numero = Math.floor(Math.random() * 11);
  const palo2 = Math.floor(Math.random() * 4);

  document.getElementById("randomNumber").innerText = numero;
  let suitValue = generateRandomSuit();
  document.getElementById("palo1").innerText = suitValue;
  document.getElementById("palo2").innerText = suitValue;
};

let generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  if (suit[indexSuit] === "♦" || suit[indexSuit] === "♥") {
    let color = document.getElementsByClassName("palo");
    let colorArray = [...color];
    colorArray.map(element => {
      element.style.color = "red";
      return element;
    });
    console.log(color);
  }
  return suit[indexSuit];
};

function miFunc() {
  document.getElementById("randomNumber").innerText = numero + 1;
  let suitValue = generateRandomSuit();
  document.getElementById("palo1").innerText = suitValue;
  document.getElementById("palo2").innerText = suitValue;
}

window.onclick = function() {
  const numero = Math.floor(Math.random() * 12 + 1);
  const palo2 = Math.floor(Math.random() * 4);

  document.getElementById("randomNumber").innerText = numero;
  let suitValue = generateRandomSuit();
  document.getElementById("palo1").innerText = suitValue;
  document.getElementById("palo2").innerText = suitValue;
};
