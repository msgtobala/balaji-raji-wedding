import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.css';

const Scrollbar = (props) => {
  const { scrollId } = props;
  
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <ul className="smoothscroll">
          <li>
            <AnchorLink href={`#${scrollId}` ?? '#home'}>
              <i className="ti-arrow-up"></i>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
