import React, { Fragment } from 'react';
import TimeCountDown from '../../components/countdown';
import shape1 from '../../images/slider/flower1.png';
import shape2 from '../../images/slider/flower2.png';

import './ComingSoonPage.css';

const ComingSoonPage = () => {
  return (
    <Fragment>
      <section className="static-hero-s4" style={{ height: '100vh' }}>
        <div className="hero-container">
          <div className="hero-inner">
            <div className="container">
              <div className="coming-soon-section">
                <div className="coming-soon-wrap">
                  <div className="coming-soon-item">
                    <div className="coming-soon-text">
                      <h2>We are Marrying Soon</h2>
                      <p>
                        We, Balaji and Raji are getting married soon. The Cupid
                        is in the process of crafting our site with the spell of
                        love.
                      </p>
                    </div>
                  </div>
                  <div className="coming-soon-item">
                    <div className="wpo-wedding-date change-style">
                      <br />
                      <h2 className="coming-soon-text">
                        Time Until our Marriage
                      </h2>
                      <div className="clock-grids">
                        <TimeCountDown />
                      </div>
                    </div>
                  </div>
                  <div className="shape-1">
                    <img src={shape1} alt="" />
                  </div>
                  <div className="shape-2">
                    <img src={shape2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default ComingSoonPage;
