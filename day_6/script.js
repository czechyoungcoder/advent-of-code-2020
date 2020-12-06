const { ADDRGETNETWORKPARAMS } = require("dns");
const fs = require("fs");

let groups = fs.readFileSync("input.txt", "utf-8").split("\r\n\r\n");
groups = groups.map((group) => {
  return group.split("\r\n");
});

// PART ONE
const partOne = groups.reduce((acc, group) => {
  return (
    acc +
    group.reduce((chars, person) => {
      for (let char of person) {
        if (!chars.includes(char)) chars.push(char);
      }
      return chars;
    }, []).length
  );
}, 0);

// PART TWO
const partTwo = groups.reduce((acc, group) => {
  let answerCounter = 0;
  const answers = group.reduce(
    (obj, person) => {
      for (let char of person) {
        obj.letters[char] = obj.letters[char] + 1 || 1;
      }
      return obj;
    },
    { people: group.length, letters: {} }
  );
  for (char in answers.letters) {
    if (answers.letters[char] === answers.people) answerCounter++;
  }

  return acc + answerCounter;
}, 0);

console.log(partOne);
console.log(partTwo);
