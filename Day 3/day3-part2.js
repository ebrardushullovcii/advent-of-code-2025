const fetchInput = require("./fetchInput");

console.log("Day 3 Part 1 started!");

function getMaxJoltage(input) {
  const banks = input.trim().split("\n");
  const rowJoltage = [];
  for (const bank of banks) {
    rowJoltage.push(Number(getLargestBatteries(bank)));
  }
  return rowJoltage;
}

function getLargestBatteries(bank) {
  let largestBatteries = "";
  let numberOfBatteries = 0;
  let largestBatteriesThisIteration = 0;
  let previousBatteryIndex = 0;

  while (numberOfBatteries < 12) {
    for (
      let i = previousBatteryIndex;
      i < bank.length - 11 + numberOfBatteries;
      i++
    ) {
      let currentBattery = bank[i];
      if (currentBattery > largestBatteriesThisIteration) {
        largestBatteriesThisIteration = currentBattery;
        previousBatteryIndex = i + 1;
      }
    }
    largestBatteries = largestBatteries + "" + largestBatteriesThisIteration;
    largestBatteriesThisIteration = 0;
    numberOfBatteries++;
  }
  return largestBatteries;
}

function sumRowJoltage(rowJoltage) {
  let total = 0;
  for (let i = 0; i < rowJoltage.length; i++) {
    total += rowJoltage[i];
  }
  return total;
}

async function main() {
  try {
    const rawInput = await fetchInput();

    console.log(sumRowJoltage(getMaxJoltage(rawInput)));
  } catch (error) {
    console.error("Error fetching or processing input:", error);
  }
}

main();
