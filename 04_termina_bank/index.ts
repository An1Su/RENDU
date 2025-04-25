export const deposit: number = Number(process.argv[2]);
export const days: number = Number(process.argv[3]);
const interestRate: number = 0.04; 

if (isNaN(deposit) || isNaN(days) || deposit < 0 || days < 0) {
    console.error('Please provide valid numbers for deposit and days');
    process.exit(1);
}

let result: number = deposit;
for (let i = 0; i < days; i++) {
    result = result + (result * interestRate);
}

const earned: number = result - deposit;
console.log(`You will earn ${earned.toFixed(2)} rupees after ${days} day${days === 1 ? '' : 's'}.`); 