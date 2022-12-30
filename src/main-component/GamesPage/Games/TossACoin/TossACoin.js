import React, { useState, useEffect, useRef } from 'react';

import { galleryImage as Images } from '../../../../constants/images';
import './styles.css';
import TossACoinSound from '../../../../audios/toss-coin.mp3';
import { addGrabGems } from '../../../../helpers/addGrabGems';
import GameNavigation from '../GameNavigation';

const tossCoinsStatus = [
  {
    id: 0,
    option: null,
    selectedOptions: null,
  },
  {
    id: 1,
    option: null,
    selectedOptions: null,
  },
  {
    id: 2,
    option: null,
    selectedOptions: null,
  },
  {
    id: 3,
    option: null,
    selectedOptions: null,
  },
  {
    id: 4,
    option: null,
    selectedOptions: null,
  },
];
const TossACoin = () => {
  const [turns, setTurns] = useState(5);
  const [coinFlip, setCoinFlip] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
  const [startGame, setStartGame] = useState(false);
  const [flipCoin, setFlipCoin] = useState(null);
  const [flipBtnDisabled, setFlipBtnDisabled] = useState(false);
  const [tossOptions, setTossOptions] = useState(tossCoinsStatus);
  const [grabGems, setGrabGems] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.background =
      'linear-gradient(to right,#575ce5 50%,#f9fbfc 50%) fixed';
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.background = 'unset';
    };
  }, []);

  const resetGame = () => {
    setTurns(5);
    setCoinFlip(0);
    setHeads(0);
    setTails(0);
    setGrabGems(0);
    setStartGame(false);
    setFlipCoin(null);
    setFlipBtnDisabled(false);
    setTossOptions(tossCoinsStatus);
  };

  const tossTheCoin = async () => {
    let i = Math.floor(Math.random() * 2);
    const updatedOptions = [...tossOptions];
    setTurns((turn) => turn - 1);
    setFlipCoin(null);
    if (i) {
      setTimeout(function () {
        setFlipCoin('heads');
      }, 100);
      if (audioRef.current) {
        audioRef.current.play();
      }
      setTimeout(async function () {
        updatedOptions[coinFlip].selectedOptions = 'H';
        setCoinFlip((flip) => flip + 1);
        if (updatedOptions[coinFlip].option === 'H') {
          await addGrabGems(1);
          setGrabGems((gems) => gems + 1);
        }
        setHeads((heads) => heads + 1);
      }, 3000);
    } else {
      setTimeout(function () {
        setFlipCoin('tails');
      }, 100);
      if (audioRef.current) {
        audioRef.current.play();
      }
      setTimeout(async function () {
        updatedOptions[coinFlip].selectedOptions = 'T';
        setCoinFlip((flip) => flip + 1);
        if (updatedOptions[coinFlip].option === 'T') {
          await addGrabGems(1);
          setGrabGems((gems) => gems + 1);
        }
        setTails((tails) => tails + 1);
      }, 3000);
    }
    disableButton();
  };

  const disableButton = () => {
    setFlipBtnDisabled(true);
    setTimeout(() => {
      setFlipBtnDisabled(false);
    }, 3000);
  };

  const selectOption = (index, option) => {
    const updatedOptions = [...tossOptions];
    updatedOptions[index].option = option;
    const allSelected = updatedOptions.filter(
      (option) => option.option === null
    );
    if (allSelected.length === 0) {
      setStartGame(true);
    }
    setTossOptions(updatedOptions);
  };

  return (
    <div className="container">
      <div className="game-space">
        <div className="toss-a-coin-container">
          <audio style={{ display: 'none' }} ref={audioRef}>
            <source src={TossACoinSound} type="audio/mp3" />
          </audio>
          {startGame ? (
            <div>
              <div className="toss-a-coin-stats">
                <p id="heads-count">Heads: {heads}</p>
                <p id="tails-count">Tails: {tails}</p>
              </div>
              <div className="toss-coin-results">
                {tossOptions.map((option, index) => (
                  <p
                    key={option.id}
                    className={`toss-a-coin-selection-option ${
                      option.selectedOptions === null
                        ? ''
                        : option.selectedOptions === option.option
                        ? 'toss-correct'
                        : 'toss-wrong'
                    }`}
                  >
                    {option.selectedOptions ?? index + 1}
                  </p>
                ))}
              </div>
              {grabGems ? (
                <p style={{ textAlign: 'center', marginTop: '10px' }}>
                  You Earned {grabGems} GrabGems
                </p>
              ) : (
                <></>
              )}
              <div
                className="coin"
                id="coin"
                style={{
                  animation:
                    flipCoin !== null ? `spin-${flipCoin} 3s forwards` : 'none',
                }}
              >
                <div className="heads">
                  <img src={Images.Heads} alt="heads-face" />
                </div>
                <div className="tails">
                  <img src={Images.Tails} alt="tails-face" />
                </div>
              </div>
              <div className="toss-a-coin-buttons">
                <button
                  id="flip-button"
                  onClick={tossTheCoin}
                  disabled={flipBtnDisabled || turns <= 0}
                >
                  {turns === 5 ? 'Max turns' : 'Toss Coin'}
                </button>
                <button id="reset-button" onClick={resetGame}>
                  Reset
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="select-turns-text">Select your turns</h3>
              <p className="select-turns-desc">
                Earn a Grab gem for each correct turn choice
              </p>
              <div className="toss-a-coin-selection">
                {tossOptions.map((tossOption, index) => (
                  <div key={tossOption.id}>
                    <p className="toss-a-coin-selection-label">{index + 1}</p>
                    <p
                      className={`toss-a-coin-selection-option ${
                        tossOption.option === 'H' ? 'toss-option-selected' : ''
                      }`}
                      onClick={() => selectOption(tossOption.id, 'H')}
                    >
                      H
                    </p>
                    <p
                      className={`toss-a-coin-selection-option ${
                        tossOption.option === 'T' ? 'toss-option-selected' : ''
                      }`}
                      onClick={() => selectOption(tossOption.id, 'T')}
                    >
                      T
                    </p>
                  </div>
                ))}
              </div>
              <div className="toss-a-coin-buttons">
                <br />
                <button
                  id="reset-button"
                  style={{ marginTop: '10px' }}
                  onClick={resetGame}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
        <GameNavigation />
      </div>
    </div>
  );
};

export default TossACoin;
