/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  description: "picture of an image",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> 
      ${frogpack.volume}
      l</span></li>
      <li class="packprop backpack__color">Color:<span> 
      ${frogpack.color}
      </span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> 
      ${frogpack.pocketNum}
      </span></li>
      <li class="packprop backpack__strap">Left strap length:<span> 
      ${frogpack.strapLength.left}
       inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> 
      ${frogpack.strapLength.right}
       inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> 
      ${frogpack.lidOpen ? "open" : "closed"}
      </span></li>
    </ul>
`;

const addImg = (dataObj) => {
  let newFig = document.createElement("figure");
  let newImg = document.createElement("img");
  newImg.setAttribute("src", dataObj.image);
  let figDesc = document.createElement("figcaption");
  figDesc.innerText = dataObj.description;
  newFig.append(newImg, figDesc);
  return newFig;
};

const createArticle = (frogpack) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = content;
  newArticle.prepend(addImg(frogpack));
  return newArticle;
};
const main = document.querySelector("main");
main.append(createArticle(frogpack));
// const newFig = (dataObj) => {
//   const addFig = document.createElement("figure");
//   const addImg = document.createElement("img");
//   addImg.setAttribute("src", dataObj.image);
//   const addFigCap = document.createElement("figcaption");
//   addFigCap.innerText = dataObj.description;
//   addFig.append(addImg, addFigCap);
//   return addFig;
// };

// const createArticle = (frogpack) => {
//   const newArticle = document.createElement("article");
//   newArticle.innerHTML = content;
//   newArticle.prepend(newFig(frogpack));
//   return newArticle;
// };

// const main = document.querySelector("main");
// main.append(createArticle(frogpack));
