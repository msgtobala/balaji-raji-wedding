import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../services/firebase';

import Footer from '../../components/footer/Footer';
import GameCard from '../../components/GameCards/GameCard';
import GameLoader from '../../components/GameLoader/GameLoader';
import ProfileCard from '../../components/Login/ProfileCard';
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar';
import SectionTitle from '../../components/SectionTitle';
import './styles.css';

const PlayGamesPage = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const userLikes = sessionStorage.getItem('balaji-raji-wedding-likes');
    console.log(userLikes);

    if (userLikes) {
      const likes = {
        flames: false,
        'love-calculator': false,
        'stone-paper-scissors': false,
      };
    }

    const query = collection(db, 'games');
    const unsubscribe = onSnapshot(query, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setGameData(data);
    });
    return unsubscribe;
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="container padding-container">
        <SectionTitle MainTitle={'The Game !'} />
      </div>
      <div
        style={{
          marginBottom: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProfileCard user={user} hidePlay />
      </div>
      <div className="container">
        <div className="play-game-container">
          <h1>Games</h1>
          <NavLink className="theme-btn leader-board-btn" to="/live">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="mobile" style={{ fontSize: '24px' }}>
                <i className="fi flaticon-wedding"></i>&nbsp;&nbsp;
              </span>
              <span
                className="text"
                style={{ fontSize: '18px', fontWeight: '500' }}
              >
                LEADERBOARD
              </span>{' '}
            </div>
          </NavLink>
        </div>
        {gameData ? (
          <GameCard games={gameData} />
        ) : (
          <div className="game-loading-section">
            <GameLoader />
          </div>
        )}
      </div>
      <Scrollbar scrollId={'games'} />
      <Footer />
    </Fragment>
  );
};

export default PlayGamesPage;
