import React, { Fragment, useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import './style.css';
import ChipTag from '../Tag/Tag';

const galleryMenus = [
  {
    id: 1,
    title: 'Gallery',
    link: '/home',
    submenu: [
      {
        id: 11,
        title: 'Albums',
        link: '/home',
      },
    ],
  },
];

const weddingMenus = [
  {
    id: 2,
    title: 'Wedding',
    link: '/home',
    submenu: [
      {
        id: 12,
        title: 'Wedding',
        link: '/home',
      },
      {
        id: 13,
        title: 'Wedding Details',
        link: '/home',
      },
      {
        id: 14,
        title: 'Accommodation',
        link: '/home',
      },
    ],
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const scrollHandler = () => {
    setMenuState(false);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>
        <ul className="responsivemenu">
          <li>
            <Link
              activeclassname="active"
              onClick={scrollHandler}
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
              onClick={scrollHandler}
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
              onClick={scrollHandler}
              to="event"
              spy={true}
              smooth={true}
              duration={500}
            >
              Events
            </Link>
          </li>
          {galleryMenus.map((item, mn) => {
            return (
              <ListItem
                className={item.id === openId ? 'active' : null}
                key={mn}
              >
                {item.submenu ? (
                  <Fragment>
                    <p
                      onClick={() =>
                        setOpenId(item.id === openId ? 0 : item.id)
                      }
                    >
                      {item.title}
                      <i
                        className={
                          item.id === openId
                            ? 'fa fa-angle-up'
                            : 'fa fa-angle-down'
                        }
                      ></i>
                    </p>
                    <Collapse
                      in={item.id === openId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List className="subMenu">
                        <Fragment>
                          {item.submenu.map((submenu, i) => {
                            return (
                              <ListItem key={i}>
                                <NavLink
                                  onClick={ClickHandler}
                                  className="active"
                                  to={submenu.link}
                                >
                                  {submenu.title}
                                </NavLink>
                              </ListItem>
                            );
                          })}
                        </Fragment>
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <NavLink className="active" to={item.link}>
                    {item.title}
                  </NavLink>
                )}
              </ListItem>
            );
          })}
          {weddingMenus.map((item, mn) => {
            return (
              <ListItem
                className={item.id === openId ? 'active' : null}
                key={mn}
              >
                {item.submenu ? (
                  <Fragment>
                    <p
                      onClick={() =>
                        setOpenId(item.id === openId ? 0 : item.id)
                      }
                    >
                      {item.title}
                      <i
                        className={
                          item.id === openId
                            ? 'fa fa-angle-up'
                            : 'fa fa-angle-down'
                        }
                      ></i>
                    </p>
                    <Collapse
                      in={item.id === openId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List className="subMenu">
                        <Fragment>
                          {item.submenu.map((submenu, i) => {
                            return (
                              <ListItem key={i}>
                                <NavLink
                                  onClick={ClickHandler}
                                  className="active"
                                  to={submenu.link}
                                >
                                  {submenu.title}
                                </NavLink>
                              </ListItem>
                            );
                          })}
                        </Fragment>
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <NavLink className="active" to={item.link}>
                    {item.title}
                  </NavLink>
                )}
              </ListItem>
            );
          })}
          <li>
            <NavLink
              activeclassname="active"
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
              activeclassname="active"
              to="invitation"
              spy={true}
              smooth={true}
              duration={500}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Games</span>
                <ChipTag variant="transparent" />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
