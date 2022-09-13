import React, { Fragment } from 'react';

import Footer from '../../components/footer/Footer';
import Login from '../../components/Login';
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar';

const GamesPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div
        style={{
          background: '#f9f9f9',
        }}
      >
        <Login />
      </div>
      <Scrollbar scrollId={''} />
      <Footer />
    </Fragment>
  );
};

export default GamesPage;
