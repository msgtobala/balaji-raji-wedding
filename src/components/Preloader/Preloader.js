import React from 'react';

import LoaderImage from '../../images/preloader.png';

const Preloader = () => {
  return (
    <div class="preloader">
      <div class="vertical-centered-box">
        <div class="content">
          <div class="loader-circle"></div>
          <div class="loader-line-mask">
            <div class="loader-line"></div>
          </div>
          <img src={LoaderImage} alt="pre-loader" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
