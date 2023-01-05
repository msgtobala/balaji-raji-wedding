import React from 'react';
import LocationMap from '../Modal';
import shape1 from '../../images/slider/flower1.png';
import shape2 from '../../images/slider/flower2.png';

const Hero4 = (props) => {
  return (
    <section className="static-hero-s3" style={{ height: '75vh' }} id="hero-scroll">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="wpo-event-item">
                  <div className="wpo-event-text">
                    <h2>Balaji &amp; Raji</h2>
                    <p>We Are Getting Married Jan 26,2023</p>
                    <ul>
                      <li>MKS Mahal, Pochampalli, Krishnagiri</li>
                      <li>
                        Thursday, 26 Jan, 2023 <br />
                        7:30 AM – 9:00 AM
                      </li>
                      <li></li>
                      <li>
                        <LocationMap
                          location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.675983586947!2d78.3800395!3d12.337582099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4799235f57b7%3A0x17cdadd575c0c4a2!2sMks%20mahal!5e0!3m2!1sen!2sin!4v1659709045916!5m2!1sen!2sin"
                          title="wedding-map"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="shape-1">
                    <img src={shape1} alt="shape1" loading="lazy" />
                  </div>
                  <div className="shape-2">
                    <img src={shape2} alt="shape2" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
