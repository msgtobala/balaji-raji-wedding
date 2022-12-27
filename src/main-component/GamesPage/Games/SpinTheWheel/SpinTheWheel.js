import React from 'react';

import Wheel from './Wheel';
import GameNavigation from '../GameNavigation';

const SpinTheWheel = () => {
  const gems = [1, 0, 1, 50, 0, 15, 10, 0];
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
