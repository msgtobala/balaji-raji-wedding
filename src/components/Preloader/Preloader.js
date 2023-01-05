import React from 'react';

import LoaderImage from '../../images/preloader.png';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
          <img src={LoaderImage} alt="pre-loader" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
