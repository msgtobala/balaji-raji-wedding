import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Navigate } from 'react-router-dom';

import './styles.css';
import { galleryImage as Images } from '../../../../constants/images';
import { useNavigate } from 'react-router-dom';
import { defaultPairNames } from '../../../../helpers/nameToArray';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';

const apiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'aa972a1fa2msh14a3b30405c0e1ep1ccac0jsn51e3a43b67ee',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
  },
};

const LoveCalculator = () => {
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const [loveResult, setLoveResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const resultRef = useRef();
  const navigate = useNavigate();

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

  const toggleFloatingIcon = () => {
    setShowFloatingIcon(!showFloatingIcon);
  };

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
      setLoveResult(100);
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

  const reCalculateLove = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.querySelector('#love-calculator-form').reset();
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
        <div className="game-navigation" onClick={toggleFloatingIcon}>
          <div id="hamburger" className={showFloatingIcon ? 'show' : ''}>
            <div id="game-wrap">
              <span className="icon-bar" id="one"></span>
              <span className="icon-bar" id="two"></span>
              <span className="icon-bar" id="thr"></span>
            </div>
          </div>
          <div
            className={['game-nav', showFloatingIcon ? 'show' : ''].join(' ')}
            id="settings"
            onClick={() => navigate('/')}
          >
            <i className="fa fa-home" aria-hidden="true"></i>
          </div>
          <div
            className={['game-nav', showFloatingIcon ? 'show' : ''].join(' ')}
            id="thumb"
            onClick={() => navigate('/play')}
          >
            <i className="fa fa-mail-reply" aria-hidden="true"></i>
          </div>
          <div id="overlay" className={showFloatingIcon ? 'show' : ''}></div>
        </div>
      </div>
    </div>
  );
};

export default LoveCalculator;
