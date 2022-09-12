import React from 'react';

import './styles.css';

const ChipTag = (props) => {
  const { variant, text } = props;
  return (
    <div
      className="chip-tag"
      style={{
        backgroundColor: variant === 'transparent' ? 'white' : '#d6637069',
      }}
    >
      <span>{text}</span>
    </div>
  );
};

export default ChipTag;
