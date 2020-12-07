const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split("\r\n");
const getTrees = (right, down) => {
  let trees = 0;
  let posX = 0;
  let posY = 0;
  const rowLen = input[0].length - 1;
  const colLen = input.length - 1;

  while (posY < colLen) {
    posX = posX + right <= rowLen ? posX + right : posX - rowLen + right - 1;
    posY += down;
    if (input[posY][posX] === "#") trees++;
  }

  return trees;
};

const partOne = getTrees(3, 1);
const partTwo = getTrees(1, 1) * getTrees(3, 1) * getTrees(5, 1) * getTrees(7, 1) * getTrees(1, 2);
console.log(partOne, partTwo);
