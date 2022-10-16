import React from 'react';

import './GameLoader.css';

const GameLoader = () => {
  return (
    <div id="game-loader">
      <div className="ls-particles ls-part-1"></div>
      <div className="ls-particles ls-part-2"></div>
      <div className="ls-particles ls-part-3"></div>
      <div className="ls-particles ls-part-4"></div>
      <div className="ls-particles ls-part-5"></div>
      <div className="light-saber ls-left ls-green"></div>
      <div className="light-saber ls-right ls-red"></div>
      <p className="game-loading-text">Loading...</p>
    </div>
  );
};

export default GameLoader;
