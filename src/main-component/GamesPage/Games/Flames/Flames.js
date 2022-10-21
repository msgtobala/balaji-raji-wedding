import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';

import './styles.css';
import { galleryImage as Images } from '../../../../constants/images';
import { useNavigate } from 'react-router-dom';
import {
  flameDifference,
  getLoveResult,
  nameToArray,
  flames,
} from '../../../../helpers/nameToArray';

const FlamesGame = () => {
  const [loveResult, setLoveResult] = useState(false);
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const [partnerName, setPartnerName] = useState('');

  const resultContainerRef = useRef();
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

  const reCalculateFlames = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.querySelector('#flames-form').reset();
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

export default FlamesGame;
