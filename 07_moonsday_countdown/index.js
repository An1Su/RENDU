'use strict';

{
    const distance = Number(process.argv[2]);
    const speed = 1;

    if (isNaN(distance) || distance < 0) {
        console.error('Please provide a valid distance in kilometers');
        process.exit(1);
    }

    const hoursLeft = Math.floor(distance / (speed * 3600));
    
    for (let i = hoursLeft; i >= 0; i--) {
        console.log(i);
    }
} 