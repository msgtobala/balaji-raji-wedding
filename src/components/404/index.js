import React from 'react';
import { NavLink } from 'react-router-dom';
import erimg from '../../images/error-404.svg';

const Error = () => {
  return (
    <section className="error-404-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="content clearfix">
              <div className="error">
                <img src={erimg} alt="wedding-error" />
              </div>
              <div className="error-message">
                <h3>Oops! Page Not Found!</h3>
                <p>
                  Hmmm, The cupid is hiding the bride and groom. Let's us go
                  back and find them by click home button below
                </p>
                <NavLink to="/" className="theme-btn-s3">
                  Back to home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
