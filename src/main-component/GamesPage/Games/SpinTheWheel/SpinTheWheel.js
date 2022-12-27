import React from 'react';

import Wheel from './Wheel';
import GameNavigation from '../GameNavigation';

const SpinTheWheel = () => {
  const gems = [2, 0, 1, 1, 0, 3, 1, 0];
  return (
    <div className="container">
      <div className="game-space">
        <Wheel items={gems} />
      </div>
      <GameNavigation />
    </div>
  );
};

export default SpinTheWheel;
