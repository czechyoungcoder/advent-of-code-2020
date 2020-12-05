const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split("\r\n\r\n");
const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const passports = input.map((passport) => {
  return passport.split("\r\n").join(" ");
});

const hasRequiredFields = (passport) => {
  for (let field of requiredFields) {
    if (!passport.includes(field)) return false;
  }
  return true;
};

const isFieldValid = ([key, value]) => {
  const validateNum = (num, min, max) => {
    num = Number(num);
    return num >= min && num <= max ? true : false;
  };

  switch (key) {
    case "byr":
      return validateNum(value, 1920, 2002);

    case "iyr":
      return validateNum(value, 2010, 2020);

    case "eyr":
      return validateNum(value, 2020, 2030);

    case "hgt":
      if (/^\d{3}cm$/.test(value)) {
        const num = value.match(/\d{3}/)[0];
        return validateNum(num, 150, 193);
      } else if (/^\d{2}in$/.test(value)) {
        const num = value.match(/\d{2}/)[0];
        return validateNum(num, 59, 76);
      }
      return false;

    case "hcl":
      return /^#[0-9a-f]{6}$/.test(value);

    case "ecl":
      return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value);

    case "pid":
      return /^\d{9}$/.test(value);

    case "cid":
      return true;
  }
};

// PART ONE
const partOne = (passports) => {
  let validPassports = 0;

  passports.forEach((passport) => {
    if (hasRequiredFields(passport)) validPassports++;
  });

  return validPassports;
};

// PART TWO
const partTwo = (passports) => {
  let validPassports = 0;

  passports.forEach((passport) => {
    if (hasRequiredFields(passport)) {
      const fields = passport.split(" ");

      if (fields.every((field) => isFieldValid(field.split(":")))) validPassports++;
    }
  });

  return validPassports;
};

console.log(partOne(passports));
console.log(partTwo(passports));
