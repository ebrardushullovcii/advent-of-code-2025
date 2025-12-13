const fetchInput = require("./fetchInput");

console.log("Day 2 Part 2 started!");

function getAllInvalidIds(input) {
  const invalidIds = [];
  const ranges = input.trim().split(",");
  for (const range of ranges) {
    const [id1, id2] = range.split("-");
    let num1 = Number(id1);
    let num2 = Number(id2);
    while (num1 <= num2) {
      const numStr = num1.toString();
      const options = getEqualDivisionOptions(numStr);
      for (const option of options) {
        const parts = divideIntoEqualParts(numStr, option);
        if (allPartsAreTheSameTheyreRottingMyBrain(parts)) {
          invalidIds.push(num1);
          break;
        }
      }
      num1++;
    }
  }
  return invalidIds;
}

function getEqualDivisionOptions(num) {
  const options = [];
  for (let i = 2; i <= num.length; i++) {
    if (num.length % i === 0) {
      options.push(i);
    }
  }
  return options;
}

function divideIntoEqualParts(numStr, numParts) {
  const parts = [];
  const partLength = numStr.length / numParts;
  for (let i = 0; i < numParts; i++) {
    parts.push(numStr.slice(i * partLength, (i + 1) * partLength));
  }
  return parts;
}

//:3 :3 :3 :3 :3 :3
function allPartsAreTheSameTheyreRottingMyBrain(parts) {
  return parts.every((part) => part === parts[0]);
}

function sumInvalidIds(invalidIds) {
  let total = 0;
  for (let i = 0; i < invalidIds.length; i++) {
    total += invalidIds[i];
  }
  return total;
}

async function main() {
  try {
    const rawInput = await fetchInput();

    console.log(sumInvalidIds(getAllInvalidIds(rawInput)));
  } catch (error) {
    console.error("Error fetching or processing input:", error);
  }
}

main();
