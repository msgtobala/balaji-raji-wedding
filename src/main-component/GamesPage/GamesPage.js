import React, { Fragment, useEffect } from 'react';

import Footer from '../../components/footer/Footer';
import Login from '../../components/Login';
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar';

const GamesPage = () => {
  useEffect(() => {
    window.scrollTo(10, 0);
  });

  return (
    <Fragment>
      <Navbar />
      <div className="game-container" id="games">
        <div className="container">
          <p>Hi</p>
        </div>
        <Login />
      </div>
      <Scrollbar scrollId={'games'} />
      <Footer />
    </Fragment>
  );
};

export default GamesPage;
