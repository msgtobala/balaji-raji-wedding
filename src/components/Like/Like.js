import React, { useState } from 'react';

import './Like.css';

const Like = (props) => {
  const { clicked } = props;
  const [liked, setLiked] = useState(false);

  const toggleState = () => {
    setLiked(!liked);
    clicked();
  };

  return (
    <div
      className={['heart', liked ? 'is-active' : ''].join(' ')}
      onClick={toggleState}
    ></div>
  );
};

export default Like;
