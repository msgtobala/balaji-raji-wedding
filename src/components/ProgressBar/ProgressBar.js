import React from 'react';

import './styles.css';

const ProgressBar = (props) => {
  const { progress } = props;
  return (
    <svg viewBox="0 0 36 36" class="progress-circular-chart orange">
      <path
        class="progress-circle-bg"
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="progress-circle"
        stroke-dasharray={`${progress ?? 0}, 100`}
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">
        {progress}%
      </text>
    </svg>
  );
};

export default ProgressBar;
