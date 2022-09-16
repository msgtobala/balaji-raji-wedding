import React from 'react';

import SectionTitle from '../SectionTitle';
import Status from '../Status/Status';
import './styles.css';

const TimeLine = () => {
  const isMobile = window.innerWidth < 1024;
  console.log(isMobile);
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
                <h2 className="timeline-title">January 25，2023</h2>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>7:30 AM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 25 Jan, 2023 7:30 AM',
                      'Wednesday, 25 Jan, 2023 9:00 AM',
                    ]}
                    fontSize="14px"
                  />
                </div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Welcome</h3>
                <p>
                  Bride and her family welcoming the groom and his family
                  members.
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>12:00 PM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 25 Jan, 2023 12:00 PM',
                      'Wednesday, 25 Jan, 2023 1:30 PM',
                    ]}
                    fontSize="14px"
                    end={isMobile ? false : true}
                  />
                </div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Lunch</h3>
                <p>A delicious food will be served. Enjoy you meal!</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>3:00 PM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 25 Jan, 2023 3:00 PM',
                      'Wednesday, 25 Jan, 2023 4:00 PM',
                    ]}
                    fontSize="14px"
                  />
                </div>
                <div className="time-attend-text">Will you attend?</div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Engagement</h3>
                <p>
                  Official announcement of marriage and some rituals will be
                  held
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>4:00 to 5:00 PM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 25 Jan, 2023 4:00 PM',
                      'Wednesday, 25 Jan, 2023 5:00 PM',
                    ]}
                    fontSize="14px"
                    end={isMobile ? false : true}
                  />
                </div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Snacks</h3>
                <p>
                  Snacks stall will be opened for children, and elders to fill
                  our tummy!
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>5:00 PM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 25 Jan, 2023 5:00 PM',
                      'Wednesday, 25 Jan, 2023 6:00 PM',
                    ]}
                    fontSize="14px"
                  />
                </div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Gifts Distribution</h3>
                <p>
                  Some exciting, funny, and simple games will be conducted via
                  our website and during the function. Participate and get the
                  exciting gifts!
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>7:00 PM onwards</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 25 Jan, 2023 7:00 PM',
                      'Wednesday, 25 Jan, 2023 11:00 PM',
                    ]}
                    fontSize="14px"
                    end={isMobile ? false : true}
                  />
                </div>
                <div className="time-attend-text">Will you attend?</div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Reception</h3>
                <p>
                  Bride and Groom will be welcomed and its time for taking
                  pictures to make more memories
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>8:00 PM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 25 Jan, 2023 8:00 PM',
                      'Wednesday, 25 Jan, 2023 9:30 PM',
                    ]}
                    fontSize="14px"
                  />
                </div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Dinner</h3>
                <p>Dinner will be served with some appetizing menu's</p>
              </div>
            </li>
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h2 className="timeline-title">January 26，2023</h2>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>3:00 AM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 26 Jan, 2023 3:00 AM',
                      'Wednesday, 26 Jan, 2023 4:00 AM',
                    ]}
                    fontSize="14px"
                  />
                </div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Ubanayanam</h3>
                <p>
                  The boy steps into manhood and accepts all his
                  responsibilities
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>7:30 AM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 26 Jan, 2023 7:30 AM',
                      'Wednesday, 26 Jan, 2023 9:00 AM',
                    ]}
                    fontSize="14px"
                    end={isMobile ? false : true}
                  />
                </div>
                <div className="time-attend-text">Will you attend?</div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Tie the knot</h3>
                <p>
                  A long await is over and its time to tie the knot with mix of
                  all emotions!
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>7:00 AM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 26 Jan, 2023 7:30 AM',
                      'Wednesday, 26 Jan, 2023 9:00 AM',
                    ]}
                    fontSize="14px"
                  />
                </div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Breakfast</h3>
                <p>
                  Nothing will satisfy better than the tasty food in the early
                  morning.
                </p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>12:00 PM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 26 Jan, 2023 12:30 PM',
                      'Wednesday, 26 Jan, 2023 2:00 PM',
                    ]}
                    fontSize="14px"
                    end={isMobile ? false : true}
                  />
                </div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Lunch</h3>
                <p>Nothing brings people together like good food</p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>4:00 PM</span>
                <div className="status-timeline-container">
                  <Status
                    size="12"
                    showText
                    range={[
                      'Wednesday, 26 Jan, 2023 4:30 AM',
                      'Wednesday, 26 Jan, 2023 6:00 AM',
                    ]}
                    fontSize="14px"
                  />
                </div>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Bride's send-off</h3>
                <p>
                  The most emotional moment when bride saying farewell to her
                  family to start her new life!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TimeLine;
