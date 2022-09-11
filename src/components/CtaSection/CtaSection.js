import React from 'react';

import { Link } from 'react-router-dom';

const CtaSection = (props) => {
  const { showCta } = props;
  return (
    <div className="wpo-cta-section">
      <div className="conatiner-fluid">
        <div className="wpo-cta-item">
          <h2>Lets Celebrate our Love</h2>
          {showCta && (
            <Link to="/home" className="theme-btn-s2">
              Watch us Live
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
