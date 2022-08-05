import React from 'react';

import AllRoute from '../router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../sass/style.scss';
import WeddingSong from '../../audios/wedding.mp3';
import ReactAudioPlayer from 'react-audio-player';

const App = () => {
  return (
    <div className="App" id="scrool">
      <AllRoute />
      <ToastContainer />
      <ReactAudioPlayer src={WeddingSong} autoPlay={true} controls />
    </div>
  );
};

export default App;
