const fetchInput = require("./fetchInput");

console.log("Day 1 started!");

function countZerosDuringRotation(rotations) {
  let countZeros = 0;
  let currentPosition = 50;
  for (const rotation of rotations) {
    let rotationValue = rotation.substring(1);
    let validDigitRotationValue = 0;
    if (rotationValue.length < 3) {
      validDigitRotationValue = Number(rotationValue);
    } else {
      validDigitRotationValue = Number(
        rotationValue.substring(rotationValue.length - 2)
      );
    }
    let rotationDirection = rotation.charAt(0);
    if (rotationDirection === "L") {
      console.log(
        "Position: " + currentPosition + " - " + validDigitRotationValue
      );

      currentPosition =
        Number(currentPosition) - Number(validDigitRotationValue);
      if (currentPosition < 0) {
        currentPosition = Number(currentPosition) + 100;
      }
      console.log("Current position: " + currentPosition);
      if (currentPosition === 0) {
        countZeros++;
        console.log("Zero found at position: " + currentPosition);
      }
    } else {
      console.log(
        "Position: " + currentPosition + " + " + validDigitRotationValue
      );

      currentPosition =
        Number(currentPosition) + Number(validDigitRotationValue);
      if (currentPosition > 99) {
        currentPosition = Number(currentPosition) - 100;
      }
      console.log("Current position: " + currentPosition);
      if (currentPosition === 0) {
        countZeros++;
        console.log("Zero found at position: " + currentPosition);
      }
    }
  }
  return countZeros;
}

async function main() {
  try {
    const rawInput = await fetchInput();
    const rotations = rawInput
      .trim()
      .split(/[\s,]+/)
      .filter(Boolean);

    console.log(countZerosDuringRotation(rotations));
  } catch (error) {
    console.error("Error fetching or processing input:", error);
  }
}

main();
