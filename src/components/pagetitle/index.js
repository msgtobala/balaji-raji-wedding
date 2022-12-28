import React from 'react';
import { Link } from 'react-router-dom';

const PageTitle = (props) => {
  return (
    <section className="wpo-page-title" id="scroll-page-title">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2>{props.pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
