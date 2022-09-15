import React from 'react';

const OnlineIndicator = (props) => {
  const { color, size, showBlink } = props;
  return (
    <div
      className="online-indicator"
      style={{
        backgroundColor: color ?? '#D66371',
        width: `${size}px` ?? '15px',
        height: `${size}px` ?? '15px',
      }}
    >
      <span
        className={showBlink ? 'blink' : ''}
        style={{
          backgroundColor: color ?? '#D66371',
          width: `${size}px` ?? '15px',
          height: `${size}px` ?? '15px',
        }}
      ></span>
    </div>
  );
};

export default OnlineIndicator;
