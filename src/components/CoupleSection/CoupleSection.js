import React from 'react';

import coupleImg1 from '../../images/couple/2.jpg';
import coupleImg2 from '../../images/couple/3.jpg';
import shape1 from '../../images/couple/shape-1.png';
import shape2 from '../../images/couple/shape-2.png';
import shape3 from '../../images/couple/shape-3.png';
import shape4 from '../../images/couple/shape-4.png';
import * as constants from '../../constants/strings';
import { galleryImage as Images } from '../../constants/images';

const CoupleSection = (props) => {
  return (
    <section
      className={`couple-section section-padding ${props.cClass}`}
      id="couple"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col col-lg-11">
            <div className="couple-area clearfix">
              <div className="couple-item bride">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="couple-img">
                      <img src={Images.Balaji} alt="" />
                      <div className="couple-shape">
                        <img src={shape3} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="couple-text">
                      <h3>Balaji Venkatraman</h3>
                      <p>{constants.balajiProposal}</p>
                      <div className="social">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/balaji.venkataraman.169/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="ti-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/to_u_for_my_love/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="ti-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="couple-item groom">
                <div className="row align-items-center">
                  <div className="col-lg-7 order-lg-1 order-2">
                    <div className="couple-text">
                      <h3>Rajarajeswari</h3>
                      <p>{constants.rajiProposal}</p>
                      <div className="social">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/profile.php?id=100010694135610"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="ti-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/_._.raji._/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="ti-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 order-lg-2 order-1">
                    <div className="couple-img">
                      <img src={Images.Raji} alt="" />
                      <div className="couple-shape">
                        <img src={shape4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <img src={shape1} alt="bribe_image" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="groom_image" />
      </div>
    </section>
  );
};

export default CoupleSection;
