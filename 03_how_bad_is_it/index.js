'use strict';

const bricksNumber = Number(process.argv[2]);
const maxBricksNumber = 348;

if (isNaN(bricksNumber) || bricksNumber < 0 || bricksNumber > maxBricksNumber) {
    console.error('Please provide a valid number between 0 and 348');
    process.exit(1);
}

const difference = maxBricksNumber - bricksNumber;
console.log(`The wall is missing ${difference} bricks.`);

if (difference <= 10) {
    console.log("It's not too bad yet, it shouldn't take too much time to repair the wall.");
} else if (difference <= 39) {
    console.log("Whoever did this was clearly playing some mischievous prank!");
} else if (difference <= 99) {
    console.log("The wall has been greatly damaged. We must save the village and repair the wall as soon as possible!");
} else {
    console.log("What happened to the wall!? This is catastrophic!");
} 