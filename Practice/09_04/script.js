/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const container = document.querySelector(".container");
const cell01 = document.querySelector("body > main > ul > li.cell.cell01");
const cell02 = document.querySelector("body > main > ul > li.cell.cell02");
const cell03 = document.querySelector("body > main > ul > li.cell.cell03");
const cell04 = document.querySelector("body > main > ul > li.cell.cell04");
const cell05 = document.querySelector("body > main > ul > li.cell.cell05");

container.addEventListener(
  "mouseenter",
  () => {
    container.classList.add("black");
  },
  false
);
container.addEventListener(
  "mouseleave",
  () => {
    container.classList.remove("black");
  },
  false
);

cell01.addEventListener(
  "mouseenter",
  () => {
    cell01.classList.add("blue");
  },
  false
);
cell01.addEventListener(
  "mouseleave",
  () => {
    cell01.classList.remove("blue");
  },
  false
);
cell02.addEventListener(
  "click",
  () => {
    cell02.classList.toggle("yellow");
  },
  false
);

cell03.addEventListener(
  "mouseenter",
  () => {
    cell03.style.backgroundColor = "red";
  },
  false
);
cell04.addEventListener(
  "mouseenter",
  () => {
    cell04.innerText = "red";
  },
  false
);
cell04.addEventListener(
  "mouseleave",
  () => {
    cell04.innerText = "goooooo";
  },
  false
);
cell05.addEventListener(
  "mouseenter",
  () => {
    cell05.innerText = "red";
  },
  false
);
cell05.addEventListener(
  "mouseleave",
  () => {
    cell05.innerText = "goooooo";
  },
  false
);
