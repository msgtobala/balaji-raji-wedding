import React from 'react';

import SectionTitle from '../SectionTitle';
import Status from "../Status/Status";
import './styles.css';

const TimeLine = () => {
  return (
    <div className="container">
      <div className="row">
        <SectionTitle MainTitle={'Event Timeline'} />
      </div>
      <div className="row custom-timeline-row example-centered">
        <div className="col-xs-10 col-md-12 col-lg-12 col-xs-offset-1 col-sm-12 col-sm-offset-2">
          <ul className="timeline timeline-centered">
            <li className="timeline-item period first-timeline-item">
              <div className="timeline-info"></div>
              <div className="timeline-marker first-marker"></div>
              <div className="timeline-content first-timeline-content">
                <h2 className="timeline-title">January 25, 2023</h2>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>March 12, 2016</span>
                <Status size="12"/>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Event Title</h3>
                <p>
                 Lorem Ipsum.
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>March 23, 2016</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Event Title</h3>
                <p>
                 Lorem Ipsum.
                </p>
              </div>
            </li>
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h2 className="timeline-title">January 26, 2023</h2>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>April 02, 2016</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Event Title</h3>
                <p>
                 Lorem Ipsum.
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>April 28, 2016</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Event Title</h3>
                <p>
                 Lorem Ipsum.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
