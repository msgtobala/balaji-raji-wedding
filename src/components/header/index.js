import React from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';

import MobileMenu from '../MobileMenu/MobileMenu';
import * as constants from '../../constants/strings';
import './styles.css';
import ChipTag from '../Tag/Tag';
import OnlineIndicator from '../Status/OnlineIndicator';

const Header = (props) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <NavLink className="navbar-brand logo" to="/">
                    <small>{constants.groomShortName}</small>
                    {constants.brideShortName}
                    <span>
                      <i className="fi flaticon-dove"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    {isHomePage ? (
                      <>
                        <li>
                          <Link
                            activeclassname="active"
                            to="couple"
                            spy={true}
                            smooth={true}
                            duration={500}
                          >
                            Couple
                          </Link>
                        </li>
                        <li>
                          <Link
                            activeclassname="active"
                            to="story"
                            spy={true}
                            smooth={true}
                            duration={500}
                          >
                            Story
                          </Link>
                        </li>
                        <li>
                          <Link
                            activeclassname="active"
                            to="event"
                            spy={true}
                            smooth={true}
                            duration={500}
                          >
                            Events
                          </Link>
                        </li>
                      </>
                    ) : (
                      <li>
                        <NavLink
                          activeclassname="active"
                          to="/"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {'??? Back to home'}
                        </NavLink>
                      </li>
                    )}
                    <li className="menu-item-has-children">
                      <NavLink to="/wedding-details">Wedding</NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink to="/wedding-details">
                            Wedding Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/feedback">
                            Feedback
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            activeclassname="active"
                            to="/invitation"
                            spy={true}
                            smooth={true}
                            duration={500}
                          >
                            Invitation
                          </NavLink>
                        </li>
                        <li>
                          <Link
                            onClick={() =>
                              window.open(
                                'https://bala-raji-engagement.vercel.app/'
                              )
                            }
                          >
                            Engagement
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        activeclassname="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Gallery
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink to="/gallery">Albums</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        activeclassname="active"
                        to="/games"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        <div className="relative-header-item">
                          Games
                          <div className="absolute-header-item">
                            <ChipTag text="HOT" />
                          </div>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {location.pathname !== '/live' && (
                <div className="col-lg-2 col-md-2 col-2">
                  <div className="header-right">
                    <NavLink className="theme-btn live-btn" to="/live">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <OnlineIndicator color="#ffffff" showBlink />
                        <span className="text">Watch Live</span>{' '}
                      </div>
                      <span className="mobile">
                        <i className="fi flaticon-play"></i>
                      </span>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
