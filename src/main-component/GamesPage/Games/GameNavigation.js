import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GameNavigation = () => {
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const navigate = useNavigate();

  const toggleFloatingIcon = () => {
    setShowFloatingIcon(!showFloatingIcon);
  };

  return (
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
  );
};

export default GameNavigation;
