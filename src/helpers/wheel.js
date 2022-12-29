import {
  doc,
  updateDoc,
  getDoc,
  increment,
  serverTimestamp,
} from 'firebase/firestore';

import { db } from '../services/firebase';

export const detectCurrentSpin = async () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  if (user) {
    const query = doc(db, 'users', user.mobile);
    const userData = await getDoc(query);
    if (userData && userData.exists() && userData.data()) {
      const currentSpin = userData.data().spinsLeftToday;
      const updateConfig = {
        spinsLeftToday: increment(-1),
      };
      if (currentSpin === 1) {
        updateConfig['lastSpin'] = serverTimestamp();
        updateConfig['spinsLeftToday'] = 5;
      }
      await updateDoc(query, updateConfig);
    }
  }
};

export const canSpin = async () => {
  const user = JSON.parse(sessionStorage.getItem('user'));
  if (user) {
    const query = doc(db, 'users', user.mobile);
    const userData = await getDoc(query);
    if (userData && userData.exists()) {
      const data = userData.data();
      const currentTimeStamp = new Date().toDateString();
      const lastTimeStamp = data.lastSpin.toDate().toDateString();
      return data.spinsLeftToday > 0 && currentTimeStamp !== lastTimeStamp;
    }
    return false;
  }

  return false;
};
