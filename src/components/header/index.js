import React from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';

import MobileMenu from '../MobileMenu/MobileMenu';
import * as constants from '../../constants/strings';

const Header = (props) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

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
                            activeClass="active"
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
                            activeClass="active"
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
                            activeClass="active"
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
                          activeClass="active"
                          to="/"
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          Home
                        </NavLink>
                      </li>
                    )}
                    <li className="menu-item-has-children">
                      <Link
                        onClick={ClickHandler}
                        activeClass="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Gallery
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink onClick={ClickHandler} to="/gallery">
                            Albums
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <NavLink onClick={ClickHandler} to="/wedding">
                        Wedding
                      </NavLink>
                      <ul className="sub-menu">
                        <li>
                          <NavLink onClick={ClickHandler} to="/wedding">
                            Wedding
                          </NavLink>
                        </li>
                        <li>
                          <NavLink onClick={ClickHandler} to="/wedding-details">
                            Wedding Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink onClick={ClickHandler} to="/accommodation">
                            Accommodation
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        activeClass="active"
                        to="invitation"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Invitation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        activeClass="active"
                        to="invitation"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Games
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <NavLink className="theme-btn" to="/rsvp">
                    <span className="text">Watch Live</span>{' '}
                    <span className="mobile">
                      <i className="fi flaticon-user"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
