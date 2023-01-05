import React, { useEffect, useState } from 'react';
import { RWebShare } from 'react-web-share';
import { doc, updateDoc, increment, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';

import './styles.css';
import GameNavigation from '../GameNavigation';
import { websiteImages as Images } from '../../../../constants/images';
import { addGrabGems } from '../../../../helpers/addGrabGems';
import { db } from '../../../../services/firebase';

const ShareAndEarn = () => {
  const [noOfShares, setNoOfShares] = useState(0);
  const [grabGemsEarned, setGrabGemsEarned] = useState(0);

  const shareSuccess = async () => {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (user) {
      addGrabGems(1);
      const query = doc(db, 'users', user.mobile);
      await updateDoc(query, {
        grabGemsEarnedOnShare: increment(1 ?? 0),
        noOfShares: increment(1 ?? 0),
      });
      toast(`Earned 1 grab gem`, {
        position: window.innerWidth < 720 ? 'bottom-center' : 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        bodyClassName: 'toast-body',
      });
    }
  };

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    let unsubscribe;
    if (user) {
      const query = doc(db, 'users', user.mobile);
      unsubscribe = onSnapshot(query, (querySnapshot) => {
        const data = querySnapshot.data();
        if (data) {
          setNoOfShares(data.noOfShares);
          setGrabGemsEarned(data.grabGemsEarnedOnShare);
        }
      });
    }
    return unsubscribe;
  }, []);

  return (
    <div className="container">
      <div className="game-space">
        <div>
          <img src={Images.ShareAndEarnBanner} alt="tic-tac-toe-banner" loading="lazy" />
        </div>
        <div className="share-results">
          <div>
            Shares: <span>{noOfShares}</span>
          </div>
          <div>
            Grab Gems: <span>{grabGemsEarned}</span>
          </div>
        </div>
        <div className="share-container">
          <RWebShare
            data={{
              text: '1 Share, 1 Grab Gem',
              url: 'https://balaji-raji-wedding.vercel.app/',
              title: 'Share our wedding website to earn Grab gems',
            }}
            onClick={shareSuccess}
          >
            <button>
              <i className="ti-sharethis"></i> Share
            </button>
          </RWebShare>
        </div>
      </div>
      <GameNavigation />
    </div>
  );
};

export default ShareAndEarn;
