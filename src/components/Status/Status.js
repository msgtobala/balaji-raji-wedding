import React from 'react';

import { useNavigate } from 'react-router-dom';
import './Status.css';

const Status = (props) => {
  const { statusText, color, showText, size, textColor } = props;
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate('/live');
  };

  return (
    <div className="status-container">
      <div
        className="online-indicator"
        style={{
          backgroundColor: color ?? '#D66371',
          width: `${size}px` ?? '15px',
          height: `${size}px` ?? '15px',
        }}
      >
        <span
          className="blink"
          style={{
            backgroundColor: color ?? '#D66371',
            width: `${size}px` ?? '15px',
            height: `${size}px` ?? '15px',
          }}
        ></span>
      </div>
      {showText && (
        <p
          className="online-text"
          style={{ color: textColor ?? '#000000' }}
          onClick={redirectHandler}
        >
          {statusText === true ? 'Happened' : 'Happening Now'}
        </p>
      )}
    </div>
  );
};

export default Status;
