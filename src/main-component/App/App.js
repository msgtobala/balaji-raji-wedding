import React, { useEffect, useState } from 'react';

import AllRoute from '../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import AudioPlayerContainer from '../../components/AudioPlayer/AudioPlayer';
import './App.css';
import Preloader from '../../components/Preloader/Preloader';

const App = () => {
  const [preload, setPreloader] = useState(true);

  useEffect(() => {
    window.scrollTo(10, 0);
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);

  return (
    <>
      <div
        className={`opacity-animation ${
          preload ? 'app-opacity-1' : 'app-opacity-0'
        }`}
      >
        <Preloader />
      </div>
      <div
        className={`opacity-animation ${
          preload ? 'app-opacity-0' : 'app-opacity-1'
        }`}
      >
        <EngagementApp />
      </div>
    </>
  );
};

const EngagementApp = () => {
  return (
    <>
      <AllRoute />
      <ToastContainer />
      <AudioPlayerContainer />
      <div className="cache-container">
        <audio>
          <source src="../../audios/wedding.mp3" type="audio/mp3"></source>
        </audio>
      </div>
    </>
  );
};

export default App;
