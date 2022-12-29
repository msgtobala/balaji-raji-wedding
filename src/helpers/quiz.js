import { doc, updateDoc } from 'firebase/firestore';

import { db } from '../services/firebase';

export const setMaxQuiz = async () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  if (user && user.mobile) {
    const query = doc(db, 'users', user.mobile);
    await updateDoc(query, {
      maxQuiz: true,
    });
  }
};
