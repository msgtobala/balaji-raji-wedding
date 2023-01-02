import React, { Fragment, useEffect, useState, useRef } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
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
  const gameRef = useRef();

  useEffect(() => {
    if (gameRef.current) {
      setTimeout(() => {
        gameRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 500);
    }
    const userLikes = sessionStorage.getItem('balaji-raji-wedding-likes');

    if (userLikes === null) {
      const likes = {
        flames: false,
        'love-calculator': false,
        'stone-paper-scissors': false,
        'tic-tac-toe': false,
        'memory-game': false,
        'spin-wheel': false,
        'assess-us-quiz': false,
        'share-it-earn-it': false,
        'toss-a-coin': false,
      };

      sessionStorage.setItem(
        'balaji-raji-wedding-likes',
        JSON.stringify(likes)
      );
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

  if (!user) {
    return <Navigate to="/games" />;
  }

  return (
    <Fragment>
      <Navbar />
      <div className="container padding-container" id="scroll-to-game">
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
        <div className="play-game-container" ref={gameRef}>
          <h1>Games</h1>
          <NavLink className="theme-btn leader-board-btn" to="/leader-board">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="mobile" style={{ fontSize: '24px' }}>
                <i className="fi flaticon-wedding"></i>&nbsp;&nbsp;
              </span>
              <span
                className="text"
                style={{ fontSize: '16px', fontWeight: '500' }}
              >
                LEADERBOARD
              </span>{' '}
            </div>
          </NavLink>
        </div>
        <div>
          {gameData ? (
            <GameCard games={gameData} />
          ) : (
            <div className="game-loading-section">
              <GameLoader />
            </div>
          )}
        </div>
      </div>
      <Scrollbar scrollId={'scroll-to-game'} />
      <Footer />
    </Fragment>
  );
};

export default PlayGamesPage;
