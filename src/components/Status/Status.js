import React from 'react';

import './Status.css';

const Status = (props) => {
  const { statusText } = props;
  return (
    <div className="status-container">
      <div className="online-indicator">
        <span className="blink"></span>
      </div>
      <p className="online-text">
        {statusText === true ? 'Happened' : 'Happening Now'}
      </p>
    </div>
  );
};

export default Status;
