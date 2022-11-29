import { app } from './firebase.js';

import {
    getFirestore
  } from './export.js';

const db = getFirestore(app);

console.log(db);