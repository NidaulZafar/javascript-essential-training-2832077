/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

let listObj = {
  first: "home",
  second: "about",
  third: "contact",
  fourth: "services",
};

const anotherObj = {
  first: "Welcome",
  second: "Sitemap",
  third: "customer service",
  fourth: "feedback",
};
const createList = (obj) => {
  const navBar = document.createElement("nav");
  navBar.innerHTML = `
  <ul>
  <li class="${obj.first}">${obj.first}</li>
  <li class="${obj.second}">${obj.second}</li>
  <li class="${obj.third}">${obj.third}</li>
  <li class="${obj.fourth}">${obj.fourth}</li>
  </ul>
    `;
  return navBar;
};
const main = document.querySelector("main");
main.append(createList(listObj));
main.prepend(createList(anotherObj));
document.querySelector("nav:last-child ul").style.display = "flex";
const firstObjFlex = document.querySelector("nav:first-child ul");
firstObjFlex.style.display = "flex";

const addClass = () => {
  document.querySelectorAll("li").forEach((item) => item.classList.add("neww"));
};

addClass();
