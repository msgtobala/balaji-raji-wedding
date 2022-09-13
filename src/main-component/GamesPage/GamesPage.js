import React, { Fragment } from 'react';

import Footer from '../../components/footer/Footer';
import Login from '../../components/Login';
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar';

const GamesPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="game-container" id="games">
        <Login />
      </div>
      <Scrollbar scrollId={'games'} />
      <Footer />
    </Fragment>
  );
};

export default GamesPage;
