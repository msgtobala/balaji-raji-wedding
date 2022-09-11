import React from 'react';

import './styles.css';

const TimeLine = () => {
  return (
    <div class="container-fluid">
      <div class="row custom-timeline-row example-basic">
        <div class="col-md-12 example-title">
          <h2>Basic Timeline</h2>
          <p>Extra small devices (phones, less than 768px)</p>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 12, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 23, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum. </p>
              </div>
            </li>
            <li class="timeline-item period">
              <div class="timeline-info"></div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h2 class="timeline-title">April 2016</h2>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 02, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum. </p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 28, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum. </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row custom-timeline-row example-split">
        <div class="col-md-12 example-title">
          <h2>Split Timeline</h2>
          <p>Small devices (tablets, 768px and up)</p>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul class="timeline timeline-split">
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 12, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 23, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum. </p>
              </div>
            </li>
            <li class="timeline-item period">
              <div class="timeline-info"></div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h2 class="timeline-title">April 2016</h2>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 02, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum. </p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 28, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum. </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row custom-timeline-row example-centered">
        <div class="col-md-12 example-title">
          <h2>Centered Timeline</h2>
          <p>Medium devices (desktops, 992px and up).</p>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <ul class="timeline timeline-centered">
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 12, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum.</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>March 23, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum. </p>
              </div>
            </li>
            <li class="timeline-item period">
              <div class="timeline-info"></div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h2 class="timeline-title">April 2016</h2>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 02, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum. </p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-info">
                <span>April 28, 2016</span>
              </div>
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-title">Event Title</h3>
                <p>Lorem Ipsum. </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
