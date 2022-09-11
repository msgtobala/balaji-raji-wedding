import React from 'react';

import './Status.css';

const Status = (props) => {
  const { statusText, color, showText } = props;
  
  return (
    <div className="status-container">
      <div
        className="online-indicator"
        style={{ backgroundColor: color ?? '#D66371' }}
      >
        <span
          className="blink"
          style={{ backgroundColor: color ?? '#D66371' }}
        ></span>
      </div>
      {showText && (
        <p className="online-text">
          {statusText === true ? 'Happened' : 'Happening Now'}
        </p>
      )}
    </div>
  );
};

export default Status;
