import { initializeApp } from './export.js';

const firebaseConfig = {
  apiKey: "AIzaSyAHzSlsgl91xsO4mOIF61o98RPyVHHmEf4",
  authDomain: "raizen-tf.firebaseapp.com",
  projectId: "raizen-tf",
  storageBucket: "raizen-tf.appspot.com",
  messagingSenderId: "1043543382133",
  appId: "1:1043543382133:web:fb944d74110feff845003c",
  measurementId: "G-2X0WWK1MY8"
};

export const app = initializeApp(firebaseConfig);