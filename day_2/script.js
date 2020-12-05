const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split("\r\n");

// PART ONE
const partOne = input.reduce((acc, str) => {
  const [min, max] = str
    .match(/\d+-\d+/)[0]
    .split("-")
    .map((num) => Number(num));
  const char = str[str.indexOf(":") - 1];
  const password = str.match(/\w*$/)[0];
  const occurences = password.split(char).length - 1;

  if (occurences >= min && occurences <= max) return acc + 1;
  return acc;
}, 0);

// PART TWO
const partTwo = input.reduce((acc, str) => {
  const [pos1, pos2] = str
    .match(/\d+-\d+/)[0]
    .split("-")
    .map((num) => Number(num));
  const char = str[str.indexOf(":") - 1];
  const password = str.match(/\w*$/)[0];

  if (password[pos1 - 1] === char && password[pos2 - 1] !== char) return acc + 1;
  if (password[pos2 - 1] === char && password[pos1 - 1] !== char) return acc + 1;
  return acc;
}, 0);

console.log(partOne);
console.log(partTwo);
