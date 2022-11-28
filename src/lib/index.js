import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from './exports.js';

import app from './config-firebase.js';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export function loginEmailPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  export function signInGoogle() {
    return signInWithPopup(auth, provider);
  }