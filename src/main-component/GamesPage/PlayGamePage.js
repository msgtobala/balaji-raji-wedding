import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Footer from '../../components/footer/Footer';
import ProfileCard from '../../components/Login/ProfileCard';
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar';
import SectionTitle from '../../components/SectionTitle';

const PlayGamesPage = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <Fragment>
      <Navbar />
      <div className="container padding-container">
        <SectionTitle MainTitle={'The Game !'} />
      </div>
      <div
        style={{
          marginBottom: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ProfileCard user={user} hidePlay />
      </div>
      <div className="container">
        <div className="play-game-container">
          <h1>Games</h1>
          <NavLink className="theme-btn live-btn" to="/live">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="mobile" style={{ fontSize: '24px' }}>
                <i className="fi flaticon-wedding"></i>&nbsp;&nbsp;
              </span>
              <span
                className="text"
                style={{ fontSize: '24px', fontWeight: 'normal' }}
              >
                Leaderboard
              </span>{' '}
            </div>
          </NavLink>
        </div>
      </div>
      <Scrollbar scrollId={'games'} />
      <Footer />
    </Fragment>
  );
};

export default PlayGamesPage;
