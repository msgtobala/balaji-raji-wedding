import React from 'react';

import AllRoute from '../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import WeddingSong from '../../audios/wedding.mp3';

const App = () => {
  return (
    <div className="App" id="scrool">
      <AllRoute />
      <ToastContainer />
      <audio autoPlay>
        <source src={WeddingSong} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default App;
