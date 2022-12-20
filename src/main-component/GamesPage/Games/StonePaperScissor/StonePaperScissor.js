import React, { useState } from 'react';

import '../styles.css';
import GameNavigation from '../GameNavigation';
import Images from '../../../../constants/images';

const StonePaperScissor = () => {
  return (
    <div className="container">
      <div className="game-space">
        <div>
          <img src={Images.TicTacToeBanner} alt="flames-banner" />
        </div>
      </div>
      <GameNavigation />
    </div>
  );
};

export default StonePaperScissor;
