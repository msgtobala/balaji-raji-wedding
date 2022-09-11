import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAgnugLnYDtw9lJ3JGWKqJNHA0pFLwJ-LA',
  authDomain: 'balaji-raji-wedding.firebaseapp.com',
  projectId: 'balaji-raji-wedding',
  storageBucket: 'balaji-raji-wedding.appspot.com',
  messagingSenderId: '586661727699',
  appId: '1:586661727699:web:d0891a0bbe7005701bf326',
  measurementId: 'G-LWZJYEWXK5',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
