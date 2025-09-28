// let str = "I am sumit";

// let splittedString = str.split(" ").reverse().join(" ");
// console.log(splittedString)

let str = "sumit";

// Step 1: Split
let splitted = str.split("");
console.log("After split:", splitted);

//Step 2: Reverse
let reversedArray = splitted.reverse();
console.log("After reverse:", reversedArray);

// Step 3: Join
let finalString = reversedArray.join("");
console.log("After join:", finalString);
