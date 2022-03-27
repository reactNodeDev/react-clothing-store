let doseinMgArray = [];
let doseInBallsArray = [];
let finalDoseList = [];

const divider = 0.9;
const maxDoseInMg = 75;
const maxNoOfBalls = 130;
let nextDoseInMg = maxDoseInMg;

for (let i = maxNoOfBalls; i > 2; i--) {
  nextDoseInMg = nextDoseInMg * divider;
  doseinMgArray.push(nextDoseInMg);
}

doseinMgArray.forEach((doseInMg) =>
  doseInBallsArray.push(Math.round(doseInMg * 1.7333))
);

for (let [i] of doseInBallsArray.entries()) {
  if (finalDoseList.indexOf(doseInBallsArray[i]) === -1)
    finalDoseList.push(doseInBallsArray[i]);
}
