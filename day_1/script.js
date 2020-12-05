const fs = require("fs");

const input = fs
  .readFileSync("input.txt", "utf-8")
  .split("\r\n")
  .map((num) => Number(num));

// PART ONE
const partOne = (numbers, targetSum) => {
  let n1, n2;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 2020) {
        n1 = numbers[i];
        n2 = numbers[j];
        return n1 * n2;
      }
    }
  }
};

// PART TWO
const partTwo = (numbers, targetSum) => {
  let n1, n2, n3;
  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      for (let k = 0; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === targetSum) {
          n1 = numbers[i];
          n2 = numbers[j];
          n3 = numbers[k];
        }
      }
    }
  }
  return n1 * n2 * n3;
};

console.log(partOne(input, 2020));
console.log(partTwo(input, 2020));
