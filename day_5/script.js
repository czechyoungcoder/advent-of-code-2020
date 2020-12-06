const fs = require("fs");

const passes = fs.readFileSync("input.txt", "utf-8").split("\r\n");

const BSP = (number, instructions, keys = { up: "B", down: "F" }) => {
  let a = 0;
  let b = number - 1;
  let divider = number / 2;

  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === keys.up) {
      a += divider;
    } else if (instructions[i] === keys.down) {
      b -= divider;
    }
    if (a === b) return a;
    divider /= 2;
  }
};

// PART ONE
const partOne = () => {
  let highestID = 0;

  passes.forEach((pass) => {
    const row = BSP(128, pass.slice(0, 7));
    const column = BSP(8, pass.slice(7), { up: "R", down: "L" });
    const seatID = row * 8 + column;
    if (seatID > highestID) highestID = seatID;
  });

  return highestID;
};

// PART TWO
const partTwo = () => {
  let highestID = 0;
  let seatIDs = new Set();

  passes.forEach((pass) => {
    const row = BSP(128, pass.slice(0, 7));
    const column = BSP(8, pass.slice(7), { up: "R", down: "L" });
    const seatID = row * 8 + column;
    if (seatID > highestID) highestID = seatID;
    seatIDs.add(seatID);
  });

  for (let i = 0; i < highestID; i++) {
    if (!seatIDs.has(i) && seatIDs.has(i - 1) && seatIDs.has(i + 1)) return i;
  }
};

const highestID = partOne();
const missingID = partTwo();
console.log(highestID, missingID);
