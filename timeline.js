let counter = 0;

// 1 Big Bang
let explode = document.querySelector(".bigbang");
let explosionButton = document.querySelector("#point1");

explosionButton.addEventListener("click", explosionBigBang);

function explosionBigBang() {
  explode.classList.add("explosion");
}

// 2 Inflation
let wave1 = document.querySelector("#waves_5_");
let wave2 = document.querySelector("#waves_4_");
let wave3 = document.querySelector("#waves_3_");
let waveButton = document.querySelector("#point2");

waveButton.addEventListener("click", waveMoving);

function waveMoving() {
  wave1.classList.add("moving");
  wave2.classList.add("moving");
  wave3.classList.add("moving");
}

// 3 Matter Fixed
let radiation = document.querySelector("#radiation");
// let atom1 = document.querySelector("#hydrogen");
// let atom2 = document.querySelector("#hydrogen_1_");
// let atom3 = document.querySelector("#hydrogen_2_");
// let atom4 = document.querySelector("#helium");

let radiationButton = document.querySelector("#point3");

radiationButton.addEventListener("click", slidingRadiation);

function slidingRadiation() {
  radiation.classList.add("slide");
  // atom1.classList.add("rotating");
}

// 4 CMB
let light1 = document.querySelector("#lightOne");
let light2 = document.querySelector("#lightTwo");
let light3 = document.querySelector("#lightThree");
let light4 = document.querySelector("#lightFour");
let lightButton = document.querySelector("#point4");

lightButton.addEventListener("click", showerLights);

function showerLights() {
  light1.classList.add("shower");
  light2.classList.add("shower");
  light3.classList.add("shower");
  light4.classList.add("shower");
}

// 5 Dark Ages
let gaz1 = document.querySelector("#gaz1");
let gaz2 = document.querySelector("#gaz2");
let gazButton = document.querySelector("#point5");

gazButton.addEventListener("click", gazDispersion);

function gazDispersion() {
  gaz1.classList.add("dispersion");
  gaz2.classList.add("dispersion");
}
