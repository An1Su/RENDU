'use strict';

import { username } from './index';

if (!username) {
    console.error('Please provide a username');
    process.exit(1);
}

console.log(`Hello ${username}!`); 