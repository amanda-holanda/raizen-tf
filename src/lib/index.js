import { getAuth, signInWithEmailAndPassword} from './export.js';

import {app} from './config-firebase.js';

  export function loginEmailPassword(email, password) {
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, email, password);
  }
 