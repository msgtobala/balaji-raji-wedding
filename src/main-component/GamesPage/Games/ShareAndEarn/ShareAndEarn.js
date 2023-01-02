import React from 'react';
import { RWebShare } from 'react-web-share';

import 'react-fancybox/lib/fancybox.css';
import './styles.css';
import GameNavigation from '../GameNavigation';
import { websiteImages as Images } from '../../../../constants/images';

const ShareAndEarn = () => {
  return (
    <div className="container">
      <div className="game-space">
        <div>
          <img src={Images.ShareAndEarnBanner} alt="tic-tac-toe-banner" />
        </div>
        <div className="share-results">
          <div>
            Shares: <span>2</span>
          </div>
          <div>
            Grab Gems: <span>2</span>
          </div>
        </div>
        <div className="share-container">
          <RWebShare
            data={{
              text: 'Like humans, flamingos make friends for life',
              url: 'https://balaji-raji-wedding.vercel.app/',
              title: 'Share our wedding website to earn Grab gems',
            }}
            onClick={() => console.info('share successful!')}
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
