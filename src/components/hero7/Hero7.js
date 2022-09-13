import React from 'react';

import classes from '../../css/BackgroundVideo.module.css';
import * as constants from '../../constants/strings';

const Hero7 = () => {
  const videoSource = 'https://pic.pikbest.com/19/87/10/257888piCYXn.mp4';
  return (
    <section className="vedio-area" id="home">
      <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <div className="wedding-announcement">
            <div className="couple-text">
              <h2 style={{ color: '#000000' }}>
                {constants.groomShortName} &amp; {constants.brideShortName}
              </h2>
              <p style={{ color: '#000000' }}>{constants.marriedOn}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero7;
