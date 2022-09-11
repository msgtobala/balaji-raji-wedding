import React from 'react';

import SectionTitle from '../SectionTitle';
import Status from "../Status/Status";
import './styles.css';

const TimeLine = () => {
  return (
    <div class="container">
      <div className="row">
        <SectionTitle MainTitle={'Event Timeline'} />
      </div>
      <div class="row custom-timeline-row example-centered">
        <div class="col-xs-10 col-md-12 col-lg-12 col-xs-offset-1 col-sm-12 col-sm-offset-2">
          <ul class="timeline timeline-centered">
            <li class="timeline-item period first-timeline-item">
              <div class="timeline-info"></div>
              <div class="timeline-marker first-marker"></div>
              <div class="timeline-content first-timeline-content">
                <h2 class="timeline-title">January 25, 2023</h2>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 12, 2016</span>
                <Status size="12"/>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>
                 Lorem Ipsum.
                </p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 23, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>
                 Lorem Ipsum.
                </p>
              </div>
            </li>
            <li class="timeline-item period">
              <div class="timeline-info"></div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h2 class="timeline-title">January 26, 2023</h2>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 02, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>
                 Lorem Ipsum.
                </p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 28, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
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
