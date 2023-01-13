import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const icons = [
    {
      icon: 'ti-facebook',
      goTo: 'https://www.facebook.com/profile.php?id=100085438337540',
    },
    {
      icon: 'ti-instagram',
      goTo: 'https://www.instagram.com/balaji4raji/',
    },
    {
      icon: 'ti-youtube',
      goTo: 'https://www.youtube.com/channel/UCohZ6E54SaDFqwxv2Enb29w',
    },
  ];

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="widget-title">
                  <Link onClick={ClickHandler} className="logo" to="/">
                    <small>Balaji</small>Raji
                    <span>
                      <i className="fi flaticon-dove"></i>
                    </span>
                  </Link>
                </div>
                <p>
                  I Love you because the entire universe conspired to help me
                  find you
                </p>
                <ul>
                  {icons.map((icon) => (
                    <li style={{ cursor: 'pointer' }} key={icon.icon}>
                      <a href={icon.goTo} target="_blank" rel="noreferrer">
                        <i className={icon.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-xl-4  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Our Pages</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/wedding-details">
                      Wedding Details
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/invitation">
                      Invitation
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/games">
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/live">
                      Watch Live
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-xl-4  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-email"></i>bala4raji@gmail.com
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>+91–9578309780,
                      +91–9976795711
                    </li>
                    <li
                      style={{ cursor: 'pointer' }}
                      onClick={() =>
                        window.open(
                          'https://www.google.com/maps/place/Mks+mahal/@12.3375821,78.3800395,15z/data=!4m2!3m1!1s0x0:0x17cdadd575c0c4a2?sa=X&ved=2ahUKEwjM9cbAksT8AhVy-XMBHfy9AlsQ_BJ6BAhSEAg'
                        )
                      }
                    >
                      <i className="fi flaticon-maps-and-flags"></i>MKS Mahal –
                      Pochampalli, Tamil Nadu
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {' '}
                &copy; 2023-2024 Design By{' '}
                <Link onClick={ClickHandler} to="/">
                  Balaji❤Raji
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
