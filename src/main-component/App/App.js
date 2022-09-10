import React from 'react';

import AllRoute from '../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import AudioPlayerContainer from '../../components/AudioPlayer/AudioPlayer';
import './App.css';

const App = () => {
  return (
    <div className="App" id="scrool">
      <AllRoute />
      <ToastContainer />
      <AudioPlayerContainer />
    </div>
  );
};

export default App;
