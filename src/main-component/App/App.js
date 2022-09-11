import React, { useEffect } from 'react';

import AllRoute from '../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import AudioPlayerContainer from '../../components/AudioPlayer/AudioPlayer';
import './App.css';
import Preloader from '../../components/Preloader/Preloader';

const App = () => {
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);

  return (
    <div className="App" id="scrool">
      {/* <Preloader /> */}
      <AllRoute />
      <ToastContainer />
      <AudioPlayerContainer />
      <div className="cache-container">
        <audio>
          <source src="../../audios/wedding.mp3" type="audio/mp3"></source>
        </audio>
      </div>
    </div>
  );
};

export default App;
