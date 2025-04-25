'use strict';

import { username } from './index';

if (!username) {
    console.error('Please provide a username');
    process.exit(1);
}

switch (username) {
    case 'Link':
        console.log('Welcome, Hero.');
        break;
    case 'Zelda':
        console.log('Greetings, Princess.');
        break;
    default:
        console.log('You can\'t be here, get away!');
} 