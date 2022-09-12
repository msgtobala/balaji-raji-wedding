import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useCountdown } from '../countdown/coundown';
import './Status.css';

const statusText = {
  past: 'Happened',
  present: 'Happening Now',
  future: 'Yet to Start',
};

const getStatus = (from, to) => {};

const Status = (props) => {
  const { color, showText, size, textColor } = props;
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate('/live');
  };

  const tm = useCountdown("01/26/2023");
  console.log(tm);

  const statusText = (from, to) => {};

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
          {statusText}
        </p>
      )}
    </div>
  );
};

export default Status;
