import React, { useState, useRef } from 'react';

import WeddingSong from '../../audios/mangalyam.mp3';
import './styles.css';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const spinnerRef = useRef(null);
  const intervals = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [bumping, setBumping] = useState(false);
  const [showToolTip, setShowToolTip] = useState(true);
  const [firstClick, setFirstClick] = useState(0);

  const toggleMusic = () => {
    const spinner = spinnerRef.current;
    const audio = audioRef.current;

    if (spinner && audio) {
      const bpm = Number(audio.getAttribute('data-bpm')) ?? 0;
      const pulse = (60 / bpm) * 1000;

      if (audio.paused === false) {
        setShowToolTip(true);
        audio.pause();
        setPlaying(false);
        clearInterval(intervals.current);
      } else {
        setShowToolTip(false);
        setFirstClick(1);
        audio.play();
        setPlaying(true);
        pulsing(pulse);
        intervals.current = setInterval(() => {
          pulsing(pulse);
        }, pulse);
      }
    }
  };

  const pulsing = (pulse) => {
    setBumping(true);

    setTimeout(function () {
      setBumping(false);
    }, pulse - 100);
  };

  return (
    <>
      <div
        className={`spinner-wrap ${playing ? 'playing' : ''} ${
          bumping ? 'pulse' : ''
        }`}
        ref={spinnerRef}
        onClick={toggleMusic}
      >
        <div className="spinner-outer"></div>
        <div className="spinner-center"></div>
        <div className="play-sprite"></div>
        {showToolTip && (
          <div className="audio-tooltip">
            {firstClick ? 'Resume to Play' : 'Tap to Play'}
          </div>
        )}
      </div>

      <audio loop="loop" data-bpm="86" id="audio-music" ref={audioRef}>
        <source src={WeddingSong} type="audio/mp3" />
      </audio>
    </>
  );
};

const AudioPlayerContainer = () => {
  return (
    <div className="scale-container">
      <AudioPlayer />
    </div>
  );
};

export default AudioPlayerContainer;
