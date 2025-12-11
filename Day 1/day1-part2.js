const fetchInput = require("./fetchInput");

console.log("Day 1 started!");

function countZerosDuringRotation(rotations) {
  let countZeros = 0;
  let currentPosition = 50;

  for (const rotation of rotations) {
    let rotationDirection = rotation.charAt(0);
    let rotationValue = rotation.substring(1);
    let validDigitRotationValue = 0;

    if (rotationValue.length < 3) {
      validDigitRotationValue = Number(rotationValue);
    } else {
      validDigitRotationValue = Number(
        rotationValue.substring(rotationValue.length - 2)
      );
      countZeros = countZeros + parseInt(rotationValue / 100);
      console.log(
        "Zeros crossed by big number:" +
          countZeros +
          " " +
          parseInt(rotationValue / 100)
      );
    }

    if (rotationDirection === "L") {
      console.log(
        "Position: " +
          currentPosition +
          " - " +
          validDigitRotationValue +
          " = " +
          (currentPosition - validDigitRotationValue)
      );

      if (currentPosition == 0) {
        currentPosition = currentPosition - validDigitRotationValue + 100;
        continue;
      }

      currentPosition = currentPosition - validDigitRotationValue;
      if (currentPosition <= 0) {
        if (currentPosition != 0) {
          currentPosition = currentPosition + 100;
        }
        countZeros++;
        console.log("Zeros crossed :" + countZeros);
      }
    } else {
      console.log(
        "Position: " +
          currentPosition +
          " + " +
          validDigitRotationValue +
          " = " +
          (currentPosition + validDigitRotationValue)
      );

      currentPosition = currentPosition + validDigitRotationValue;
      if (currentPosition > 99) {
        currentPosition = currentPosition - 100;
        countZeros++;
        console.log("Zeros crossed :" + countZeros);
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
