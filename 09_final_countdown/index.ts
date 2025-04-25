{
    if (process.argv.length !== 4) {
        console.error('Please provide two parametrs: a number and a message');
        process.exit(1);
    }

    const seconds: number = Number(process.argv[2]);
    const message: string = process.argv[3];

    if (isNaN(seconds) || seconds < 0 || !message) {
        console.error('Please provide a valid number of seconds and a message');
        process.exit(1);
    }

    let currentSeconds = seconds;
    while (currentSeconds >= 0) {
        if (currentSeconds >= 60) {
            const minutes = Math.floor(currentSeconds / 60);
            const remainingSeconds = currentSeconds - (minutes * 60);
            console.log(`${minutes}'${remainingSeconds}`);
        } else {
            if (currentSeconds <= 10) {
                console.log(`${currentSeconds}...`);
            } else {
                console.log(currentSeconds);
            }
        }
        currentSeconds--;
    }

    console.log(message.toUpperCase() + '!');
} 