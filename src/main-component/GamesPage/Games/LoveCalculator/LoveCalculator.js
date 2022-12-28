import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { doc, updateDoc, increment } from 'firebase/firestore';

import '../styles.css';
import { galleryImage as Images } from '../../../../constants/images';
import { defaultPairNames } from '../../../../helpers/nameToArray';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import GameNavigation from '../GameNavigation';
import { db } from '../../../../services/firebase';

const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'aa972a1fa2msh14a3b30405c0e1ep1ccac0jsn51e3a43b67ee',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
  },
};

const LoveCalculator = () => {
  const [loveResult, setLoveResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const resultRef = useRef();

  useLayoutEffect(() => {
    document.body.style.background = '#FAF1F2';
  });

  useEffect(() => {
    return () => {
      document.body.style.background = 'unset';
    };
  });

  const calculateLovePercentage = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const partnerName = e.target.elements.partner_name.value;

    if (!name || !partnerName) {
      return;
    }
    setLoading(true);

    if (
      defaultPairNames.includes(name.toLowerCase()) ||
      defaultPairNames.includes(partnerName.toLowerCase())
    ) {
      setLoveResult(95);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://love-calculator.p.rapidapi.com/getPercentage?sname=${name}&fname=${partnerName}`,
        apiOptions
      );
      const result = await response.json();
      setLoading(false);
      setLoveResult(result?.percentage ?? 10);
    } catch (err) {
      setLoading(false);
      console.err(err);
    }
  };

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [loveResult]);

  const reCalculateLove = async () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const gameUser = JSON.parse(sessionStorage.getItem('user'));
    document.querySelector('#love-calculator-form').reset();
    const query = doc(db, 'games', 'love-calculator');
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
      setLoveResult(null);
    }, 500);
  };

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
          <h1>Love Calculator</h1>
          <h4>Know the level of love towards your partner</h4>
          <p>
            Super funny approach to find the connection with your partner. It
            helps you to find the love percentage with your partner.
          </p>
        </div>
        <div className="flames-container">
          <h3>Love percentage by Name</h3>
          <form onSubmit={calculateLovePercentage} id="love-calculator-form">
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
              <button type="submit">
                {loading ? 'Calculating Love' : 'Calculate Love'}
              </button>
            </div>
          </form>
        </div>
        {loveResult && (
          <div ref={resultRef} className="flames-result-container">
            <ProgressBar progress={loveResult} />
            <div className="flame-button">
              <button type="button" onClick={reCalculateLove}>
                RECALCULATE LOVE
              </button>
            </div>
          </div>
        )}
        <GameNavigation />
      </div>
    </div>
  );
};

export default LoveCalculator;
