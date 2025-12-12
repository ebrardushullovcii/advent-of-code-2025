const fetchInput = require("./fetchInput");

console.log("Day 2 started!");

function getAllInvalidIds(input) {
  const invalidIds = [];
  const ranges = input.trim().split(",");
  for (const range of ranges) {
    const [id1, id2] = range.split("-");
    let num1 = Number(id1);
    let num2 = Number(id2);
    while (num1 <= num2) {
      const numStr = num1.toString();
      if (numStr.length % 2 === 0) {
        const mid = numStr.length / 2;
        const part1 = numStr.slice(0, mid);
        const part2 = numStr.slice(mid);
        if (part1 === part2) {
          invalidIds.push(num1);
        }
      }
      num1++;
    }
  }
  return invalidIds;
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
