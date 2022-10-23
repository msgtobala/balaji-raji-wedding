import React from 'react';

import './Like.css';

const Like = (props) => {
  const { clicked, liked } = props;

  const toggleState = () => {
    clicked();
  };

  return (
    <div
      className={['games-heart', liked ? 'is-active' : ''].join(' ')}
      onClick={toggleState}
    ></div>
  );
};

export default Like;
