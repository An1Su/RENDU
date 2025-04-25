export const username: string = process.argv[2];

if (!username) {
    console.error('Please provide a username');
    process.exit(1);
}

console.log(`Hello ${username}!`); 