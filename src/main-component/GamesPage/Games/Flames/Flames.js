import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, updateDoc, increment } from 'firebase/firestore';

import '../styles.css';
import { galleryImage as Images } from '../../../../constants/images';
import {
  flameDifference,
  getLoveResult,
  nameToArray,
  flames,
} from '../../../../helpers/nameToArray';
import GameNavigation from '../GameNavigation';
import { db } from '../../../../services/firebase';

const FlamesGame = () => {
  const [loveResult, setLoveResult] = useState(false);
  const [partnerName, setPartnerName] = useState('');

  const resultContainerRef = useRef();

  useLayoutEffect(() => {
    document.body.style.background = '#FAF1F2';
    const musicContainer = document.querySelector('.scale-container');
    musicContainer.style.display = 'none';
  });

  useEffect(() => {
    return () => {
      document.body.style.background = 'unset';
    };
  });

  const calculateFlames = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const partnerName = e.target.elements.partner_name.value;

    if (!name || !partnerName) {
      return;
    }

    setPartnerName(partnerName);
    const casedName = nameToArray(name);
    const casedPartnerName = nameToArray(partnerName);
    const flamesLength =
      flameDifference(casedName, casedPartnerName)?.length ?? 0;
    const flamesMatch = flames(flamesLength % 6);
    const loveResult = getLoveResult(flamesMatch);
    setLoveResult(loveResult);
  };

  const reCalculateFlames = async () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.querySelector('#flames-form').reset();
    const gameUser = JSON.parse(sessionStorage.getItem('user'));
    const query = doc(db, 'games', 'flames');
    const gameQuery = doc(db, 'users', gameUser.mobile);
    if (gameUser) {
      await updateDoc(gameQuery, {
        gamesPlayed: increment(1),
      });
    }
    await updateDoc(query, {
      played: increment(1),
    });
    setTimeout(() => {
      setPartnerName('');
      setLoveResult(null);
    }, 500);
  };

  useEffect(() => {
    if (resultContainerRef.current) {
      resultContainerRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [loveResult]);

  const matchLetter = loveResult && loveResult[0];

  const user = JSON.parse(sessionStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/games" />;
  }

  return (
    <div className="container">
      <div className="game-space">
        <div>
          <img src={Images.FlamesBanner} alt="flames-banner" />
        </div>
        <div className="game-details">
          <h1>Flames</h1>
          <h4>Friend, Love, Affection, Marriage, Enemy, Sister</h4>
          <p>
            Super funny approach to find the connection with your partner. It
            helps you to find the relationships with your partner.
          </p>
        </div>
        <div className="flames-container">
          <h3>Flames by Name</h3>
          <form onSubmit={calculateFlames} id="flames-form">
            <div className="flame-inputs">
              <div className="flame-input">
                <i className="fa fa-heart" aria-hidden="true"></i>
                <input type="text" id="name" name="name" required />
                <label className="name">Enter Your Name</label>
              </div>
              <div className="flame-input">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
                <input
                  type="text"
                  id="partner_name"
                  name="partner_name"
                  required
                />
                <label className="partner_name">Enter Partner Name</label>
              </div>
            </div>
            <div className="flame-button">
              <button type="submit">FLAMES US</button>
            </div>
          </form>
        </div>
        {loveResult && (
          <div ref={resultContainerRef} className="flames-result-container">
            <div className="game-details">
              <h1>
                Love Flames : {loveResult[0]} - {loveResult}
              </h1>
              <h4>
                <span
                  style={{ fontWeight: matchLetter === 'F' ? '400' : '200' }}
                >
                  Friend
                </span>
                ,{' '}
                <span
                  style={{ fontWeight: matchLetter === 'L' ? '400' : '200' }}
                >
                  Love
                </span>
                ,{' '}
                <span
                  style={{ fontWeight: matchLetter === 'A' ? '400' : '200' }}
                >
                  Affection
                </span>
                ,{' '}
                <span
                  style={{ fontWeight: matchLetter === 'M' ? '400' : '200' }}
                >
                  Marriage
                </span>
                ,{' '}
                <span
                  style={{ fontWeight: matchLetter === 'E' ? '400' : '200' }}
                >
                  Enemy
                </span>
                ,{' '}
                <span
                  style={{ fontWeight: matchLetter === 'S' ? '400' : '200' }}
                >
                  Sister
                </span>
              </h4>
              <p>
                Wow, you have a very nice connection of {loveResult[0]} -{' '}
                {loveResult} with your partner {partnerName.substring(0, 1)}
                {partnerName.substring(1)}.
              </p>
              <div className="flame-button">
                <button type="button" onClick={reCalculateFlames}>
                  RECALCULATE FLAMES US
                </button>
              </div>
            </div>
          </div>
        )}
        <GameNavigation />
      </div>
    </div>
  );
};

export default FlamesGame;
