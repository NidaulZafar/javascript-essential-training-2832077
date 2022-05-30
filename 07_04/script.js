/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const newArray = ["car", true, 12, "13", false, "Holland", "computer", 0];
console.log(newArray);

newArray.pop();
console.log(newArray);

// my code to remove the last item and put it in the first position
console.log(newArray.pop());
console.log(newArray.unshift("computer"));
console.log(newArray);

// better way to do the above thing
newArray.unshift(newArray.pop());
newArray.unshift("0");
console.log(newArray);

console.log(newArray.sort());

let found = newArray.find((elem) => elem === "computer");
console.log(found);
console.log(newArray.indexOf("computer"));

let cut = newArray.splice(5, 1);
console.log(cut);
console.log(newArray);

// better way to do the find and delete function
let toBeRemoved = false;
newArray.splice(newArray.indexOf(toBeRemoved), 1);
console.log(newArray);
