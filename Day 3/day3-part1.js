const fetchInput = require("./fetchInput");

console.log("Day 3 Part 1 started!");

function getMaxJoltage(input) {
  const banks = input.trim().split("\n");
  const rowJoltage = [];
  for (const bank of banks) {
    let largestBattery = 0;
    let largestBatteryIndex = 0;
    let largestSecondBattery = 0;
    for (let i = 0; i < bank.length - 1; i++) {
      let currentBattery = bank[i];
      if (currentBattery > largestBattery) {
        largestBattery = currentBattery;
        largestBatteryIndex = i;
      }
    }

    for (let i = largestBatteryIndex + 1; i < bank.length; i++) {
      let currentBattery = bank[i];
      if (currentBattery > largestSecondBattery) {
        largestSecondBattery = currentBattery;
      }
    }

    rowJoltage.push(Number(largestBattery + "" + largestSecondBattery));
  }
  return rowJoltage;
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
