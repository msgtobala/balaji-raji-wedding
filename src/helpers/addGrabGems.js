import { doc, updateDoc, getDoc, increment } from 'firebase/firestore';

import { db } from '../services/firebase';

export const addGrabGems = async (gems) => {
  if (gems) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      const query = doc(db, 'users', user.mobile);
      const userData = await getDoc(query);
      if (userData && userData.data()) {
        await updateDoc(query, {
          grabGems: increment(gems ?? 0),
        });
      }
    }
  }
};
