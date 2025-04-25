'use strict';

{
    const numberOfCries = Number(process.argv[2]);
    const animal = process.argv[3].toLowerCase();

    if (isNaN(numberOfCries) || numberOfCries < 0) {
        console.error('Please provide a valid number of cries (0 or more)');
        process.exit(1);
    }

    let animalSound;
    switch (animal) {
        case 'dog':
        case 'dogs':
            animalSound = 'bark';
            break;
        case 'cat':
        case 'cats':
            animalSound = 'meow';
            break;
        case 'cow':
        case 'cows':
            animalSound = 'moo';
            break;
        default:
            console.error('Please provide one of the animals: dog, cat, cow');
            process.exit(1);
    }

    const password = `${animalSound} `.repeat(numberOfCries).trim() + '!';
    console.log(password);
} 