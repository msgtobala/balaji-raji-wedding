import { useEffect, useState, useCallback } from 'react';
import { doc, updateDoc, getDoc, increment } from 'firebase/firestore';

import './styles.css';
import GameNavigation from '../GameNavigation';
import { galleryImage as Images } from '../../../../constants/images';
import { db } from "../../../../services/firebase";

const StonePaperScissor = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState("Let's see who wins");
  const [turnColor, setTurnColor] = useState('grey');
  const [result, setResult] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const choices = ['stone', 'paper', 'scissors'];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setUserPoints(0);
    setComputerPoints(0);
    setTurnResult("Let's see who wins");
    setResult(null);
    setGameOver(false);
    setTurnColor('grey');
  };

  const addGrabGems = async () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      const query = doc(db, 'users', user.mobile);
      const userData = await getDoc(query);
      if (userData && userData.data()) {
        await updateDoc(query, {
          grabGems: increment(2),
        });
      }
    }
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === 'scissorspaper' ||
        comboMoves === 'stonescissors' ||
        comboMoves === 'paperstone'
      ) {
        // userPoints.current += 1
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult('User gets the point!');
        setTurnColor('#5a5');
        if (updatedUserPoints === 5) {
          setResult('Player Wins');
          addGrabGems();
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === 'paperscissors' ||
        comboMoves === 'scissorsstone' ||
        comboMoves === 'stonepaper'
      ) {
        // computerPoints.current += 1
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult('Computer gets the point!');
        setTurnColor('red');
        if (updatedComputerPoints === 5) {
          setResult('Computer Wins');
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === 'paperpaper' ||
        comboMoves === 'stonestone' ||
        comboMoves === 'scissorsscissors'
      ) {
        setTurnColor('orange');
        setTurnResult('Its a Draw, No one gets a point!');
      }
    }
  }, [computerChoice, userChoice]);

  const images = require.context('../../../../images/games', true);
  const loadImage = useCallback(
    (imageName) => images(`./${imageName}.png`),
    [images]
  );

  return (
    <div className="container">
      <div className="game-space">
        <div>
          <img src={Images.StonePaperScissorBanner} alt="flames-banner" />
        </div>
        <div className="score">
          <p>
            User Points: <b>{userPoints}</b>
          </p>
          <p>
            Computer Points: <b>{computerPoints}</b>
          </p>
        </div>
        {gameOver ? (
          <div className="flame-button">
            <p className="stone-paper-scissor-result">{result}</p>
            <button className="button" type="button" onClick={() => reset()}>
              Restart Game
            </button>
          </div>
        ) : (
          <>
            {userChoice === null || computerChoice === null ? (
              <h3 className="notify">Please Select the Option</h3>
            ) : (
              <div className="choice">
                <div className="choice-user">
                  <img
                    className="user-hand"
                    src={loadImage(userChoice)}
                    alt={`${userChoice}`}
                  ></img>
                </div>
                <div className="choice-computer">
                  <img
                    className="computer-hand"
                    src={loadImage(computerChoice)}
                    alt={`${computerChoice}`}
                  ></img>
                </div>
              </div>
            )}
            <div className="button-div">
              {choices.map((choice, index) => (
                <div className="flame-button no-margin" key={index}>
                  <button
                    className="button"
                    type="button"
                    onClick={() => handleClick(choice)}
                    disabled={gameOver}
                  >
                    {choice}
                  </button>
                </div>
              ))}
            </div>
            <div className="result">
              <p style={{ color: turnColor }}>{turnResult}</p>
            </div>
          </>
        )}
        <GameNavigation />
      </div>
    </div>
  );
};

export default StonePaperScissor;
