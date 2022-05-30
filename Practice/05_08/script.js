console.log(document);

// ----------------------  ATTRIBUTES  -------------------

// to show the node map of attributes
document.querySelector("img").attributes;

// to check whether it has attribute
document.querySelector("h1").hasAttribute("src"); //will return true or false

//    to get the names of the attributes of any element
document.querySelector("footer").getAttributeNames();

// to get a specific attribute
document.querySelector("h1").getAttribute("class");

// to set another value to the attribute "src"  of an img
// .setAttribute is used for both existing and non-existing ones

document
  .querySelector(".backpack__image img")
  .setAttribute("src", "../../assets/images/frog.svg");

//  to change the class of footer to a new class
document.querySelector("footer").setAttribute("class", "newclass");

// to select the last child of an element and rename its class
document
  .querySelector(".backpack:last-child")
  .setAttribute("class", "newBackpack");

document
  .querySelector(".backpack:last-child")
  .setAttribute("class", "backpack");

// to remove
document.querySelector("h1").removeAttribute("class");
document.querySelector("article").removeAttribute("style");

// ----------------------  CSS STYLING  -------------------

// to change the css display attibute into none/grid/flex
document.querySelector("#pack01").style.display = "flex";

// to change the font weight using JS and CSS
document.querySelector("em").style.fontWeight = "bold";
// to underline
document.querySelector("em").style.textDecoration = "underline";

// to remove the above two (underline and bold) instructions
document.querySelector("em").removeAttribute("style");

//  to see the html inside the first occurence of h1 tag (querySelectorAll can also be used)
document.querySelector("h1");
document.querySelectorAll(
  "ul li"
); /* to select all the lis in the ul
but if you want to apply a style then have to use foreach method. example:*/

document
  .querySelectorAll("ul li")
  .forEach((li) => (li.style.fontWeight = "bold"));

// to check the name of the class
document.querySelector("h1").className;

// to change the name of the class
document.querySelector("h1").className = "changedClass";

// to change multiple class names together
document
  .querySelectorAll(".backpack")
  .forEach((cls) => (cls.className = "changedClass"));

// BUTTTTTTT classNames should be avoided as it causes conflicts.
// instead can use.classList

/* METHODS FOR .classList :
.classList.add("new-class")
.classList.remove("new-class")
.classList.toggle("new-class")
.classList.replace("presentOneToBeReplaced", "newOne")
*/

// to change class name of ALLLLL h1s

document
  .querySelectorAll("h1")
  .forEach((last) => last.classList.add("newwwww"));

// all classes removed from all divs
document.querySelectorAll("div").forEach((dv) => dv.removeAttribute("class"));
