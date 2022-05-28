/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  volSize: function (size) {
    this.volume = size;
  },
  rename: function (newName) {
    this.name = newName;
  },
  rePaint: function (newColor) {
    this.color = newColor;
  },
  addedPockets: function (pockets) {
    this.pocketNum += pockets;
  },
};
console.log(backpack);
console.log(backpack.toggleLid(false));
console.log(backpack.lidOpen);
console.log(backpack.toggleLid(true));
console.log(backpack.lidOpen);
console.log(backpack.toggleLid(3));
console.log(backpack.lidOpen);
console.log(`original volume ${backpack.volume}`);
console.log(backpack.volSize(50));
console.log(`modified volume ${backpack.volume}`);
console.log(backpack.volSize(100));
console.log(`final volume ${backpack.volume}`);
console.log(`originally called ${backpack.name}`);
backpack.rename("Special");
console.log(`now renamed as ${backpack.name}`);
console.log(`original color ${backpack.color}`);
backpack.rePaint("Purple");
console.log(`now recolored as ${backpack.color}`);
console.log(`originally had ${backpack.pocketNum}`);
backpack.addedPockets(5);
console.log(`5 pockets added and now has ${backpack.pocketNum}`);
