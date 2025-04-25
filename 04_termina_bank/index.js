'use strict';

const deposit = Number(process.argv[2]);
const days = Number(process.argv[3]);
const interestRate = 0.04;

if (isNaN(deposit) || isNaN(days) || deposit < 0 || days < 0) {
    console.error('Please provide valid numbers for deposit and days');
    process.exit(1);
}

let result = deposit;
for (let i = 0; i < days; i++) {
    result = result + (result * interestRate);
}

const earned = result - deposit;
console.log(`You will earn ${earned.toFixed(2)} rupees after ${days} day${days === 1 ? '' : 's'}.`); 