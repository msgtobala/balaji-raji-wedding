import React, { useEffect } from 'react';

import AllRoute from '../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import AudioPlayerContainer from '../../components/AudioPlayer/AudioPlayer';
import './App.css';

const App = () => {
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);

  return (
    <div className="App" id="scrool">
      <AllRoute />
      <ToastContainer />
      <AudioPlayerContainer />
    </div>
  );
};

export default App;
