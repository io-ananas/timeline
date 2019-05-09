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

// 6 First Stars
let star1 = document.querySelector("#star1");
let star2 = document.querySelector("#star2");
let star3 = document.querySelector("#star3");
let star4 = document.querySelector("#star4");
let star5 = document.querySelector("#star5");
let star6 = document.querySelector("#star6");
let star7 = document.querySelector("#star7");
let star8 = document.querySelector("#star8");

let starButton = document.querySelector("#point6");

starButton.addEventListener("click", starEvent);

function starEvent() {
  star1.classList.add("birth");
  star2.classList.add("birth");
  star3.classList.add("birth");
  star4.classList.add("birth");
  star5.classList.add("birth");
  star6.classList.add("birth");
  star7.classList.add("birth");
  star8.classList.add("birth");
}

// 7 First Galaxies
let galaxy2 = document.querySelector("#galaxy2");
let galaxy3 = document.querySelector("#galaxy3");
let galaxyButton = document.querySelector("#point7");

galaxyButton.addEventListener("click", collision);

function collision() {
  galaxy2.classList.add("collide");
  galaxy3.classList.add("collide");
}

// 8 Expansion
let expansion1 = document.querySelector("#expansion1");
let expansion2 = document.querySelector("#expansion2");
let expansion3 = document.querySelector("#expansion3");
let expansion4 = document.querySelector("#expansion4");

let expansionButtun = document.querySelector("#point8");

expansionButtun.addEventListener("click", expansion);

function expansion() {
  expansion1.classList.add("widen");
  expansion2.classList.add("widen");
  expansion3.classList.add("widen");
  expansion4.classList.add("widen");
}

// 9 Solar System
let cloud = document.querySelector("#cloud");
let sun = document.querySelector("#sun");

let solarButtun = document.querySelector("#point9");

solarButtun.addEventListener("click", solarBirth);

function solarBirth() {
  cloud.classList.add("solar");
  sun.classList.add("solar");
}

// 10 Present
let comet = document.querySelector("#comet");

let cometButtun = document.querySelector("#point10");

cometButtun.addEventListener("click", cometShot);

function cometShot() {
  comet.classList.add("shot");
}
