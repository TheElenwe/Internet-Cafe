let readlineSync = require("readline-sync");

let hoursSpent = readlineSync.question("Please input how many hours you have spent \n");
let memberStatus = readlineSync.question("Input yes if you're a member, no if you're not. \n");

if (memberStatus === "yes") {
  console.log(hoursSpent * 2 * 1.1);
} else if (memberStatus === "no") {
  console.log(hoursSpent * 5 * 1.2);
} else {
  console.log("Input not valid.");
}
