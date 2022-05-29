/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import House from "./house.js";
import Machines from "./machines.js";

const almereHouse = new House(
  "Sweet Home",
  "Drknstey... 00",
  "Almere",
  "Yellow",
  "attached",
  92,
  1992,
  400000,
  false,
  1,
  1
);

console.log(almereHouse);
almereHouse.diffCity("Ams");
console.log(almereHouse);
console.log(`the house was earlier ${almereHouse.color} color`);
almereHouse.repaint("white");
console.log(`but now its ${almereHouse.color} color`);

const washingMachine = new Machines(
  "Siemens",
  "white",
  9,
  true,
  "bathroom",
  true,
  false,
  true
);
console.log(washingMachine);
console.log(`This machine was called ${washingMachine.brand} before`);
washingMachine.reBrand("Bosch");
console.log(`And now this machine is called ${washingMachine.brand}`);
console.log(`the color of this machine was ${washingMachine.color} earlier`);
washingMachine.rePaint("offWhite");
console.log(`the color of this machine is ${washingMachine.color} now`);
console.log(`it was size${washingMachine.size}`);
washingMachine.reSize(12);
console.log(`it is size${washingMachine.size} now`);
console.log(`is it working? Answer:${washingMachine.isWorking}`);
washingMachine.workingCond(false);
console.log(`recently working? Answer${washingMachine.isWorking}`);
console.log(`It was in the ${washingMachine.place} before`);
washingMachine.changePlace("attic");
console.log(`It is in the ${washingMachine.place} now`);
console.log(
  `does it have remote and wifi? ${washingMachine.features.isRemote} and ${washingMachine.features.isWifi} respectively.`
);
washingMachine.newFeat(true, false);
console.log(
  `does it have remote and wifi now? ${washingMachine.features.isRemote} and ${washingMachine.features.isWifi} respectively.`
);
console.log(`it was new? Answer: ${washingMachine.isNew}`);
washingMachine.bought(false);
console.log(`is it still new? Answer: ${washingMachine.isNew}`);

const television = new Machines(
  "philips",
  "black",
  40,
  true,
  "living-room",
  false,
  true,
  false
);
console.log(television);
console.log(`this was a ${television.brand} TV`);
television.reBrand("LG");
console.log(`this is an ${television.brand} TV now`);
console.log(television.color);
television.rePaint("silver");
console.log(television.color);
console.log(
  `remote: ${television.features.isRemote}, wifi: ${television.features.isWifi}`
);
television.newFeat(false, true);
console.log(
  `remote: ${television.features.isRemote}, wifi: ${television.features.isWifi}`
);
