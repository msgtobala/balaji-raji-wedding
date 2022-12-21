import { useState, useEffect } from 'react';
import { doc, updateDoc, getDoc, increment } from 'firebase/firestore';

import { galleryImage as Images } from '../../../../constants/images';
import { db } from '../../../../services/firebase';
import './styles.css';
import Board from './Board';
import Square from './Square';
import GameNavigation from '../GameNavigation';

const defaultSquares = () => new Array(9).fill(null);

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;
    const linesThatAre = (a, b, c) => {
      return lines.filter((squareIndexes) => {
        const squareValues = squareIndexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) ===
          JSON.stringify(squareValues.sort())
        );
      });
    };
    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);
    const playerWon = linesThatAre('x', 'x', 'x').length > 0;
    const computerWon = linesThatAre('o', 'o', 'o').length > 0;
    if (emptyIndexes.length === 0) {
      setWinner('d');
      return;
    }
    if (playerWon) {
      setWinner('x');
      addGrabGems();
    }
    if (computerWon) {
      setWinner('o');
    }
    const putComputerAt = (index) => {
      let newSquares = squares;
      newSquares[index] = 'o';
      setSquares([...newSquares]);
    };
    if (isComputerTurn) {
      const winingLines = linesThatAre('o', 'o', null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(winIndex);
        return;
      }

      const linesToBlock = linesThatAre('x', 'x', null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          (index) => squares[index] === null
        )[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre('o', null, null);
      if (linesToContinue.length > 0) {
        putComputerAt(
          linesToContinue[0].filter((index) => squares[index] === null)[0]
        );
        return;
      }

      const randomIndex =
        emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
    }
  }, [squares]);

  function handleSquareClick(index) {
    if (squares[index] === null) {
      const isPlayerTurn =
        squares.filter((square) => square !== null).length % 2 === 0;
      if (isPlayerTurn) {
        let newSquares = squares;
        newSquares[index] = 'x';
        setSquares([...newSquares]);
      }
    }
  }

  const addGrabGems = async () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      const query = doc(db, 'users', user.mobile);
      const userData = await getDoc(query);
      if (userData && userData.data()) {
        const grabGems = userData.data().grabGems;
        await updateDoc(query, {
          grabGems: grabGems + 3,
        });
      }
    }
  };

  const restartGame = async () => {
    setSquares(defaultSquares());
    setWinner(null);
    const gameUser = JSON.parse(sessionStorage.getItem('user'));
    const query = doc(db, 'games', 'tic-tac-toe');
    const gameQuery = doc(db, 'users', gameUser.mobile);
    if (gameUser) {
      await updateDoc(gameQuery, {
        gamesPlayed: increment(1),
      });
    }
    await updateDoc(query, {
      played: increment(1),
    });
    await updateDoc(query, {
      played: increment(1),
    });
  };

  return (
    <div className="container">
      <div className="game-space">
        <div>
          <img src={Images.TicTacToeBanner} alt="flames-banner" />
        </div>
        <div className="tic-tac-toe-body">
          <div className="tic-tac-toe-main">
            {winner === null && (
              <Board>
                {squares.map((square, index) => (
                  <Square
                    key={index}
                    x={square === 'x' ? 1 : 0}
                    o={square === 'o' ? 1 : 0}
                    onClick={() => handleSquareClick(index)}
                  />
                ))}
              </Board>
            )}
            {!!winner && winner === 'x' && (
              <div className="result green">
                You WON!
                <div className="flame-button">
                  <button type="button" onClick={restartGame}>
                    Restart the Game
                  </button>
                </div>
              </div>
            )}
            {!!winner && winner === 'o' && (
              <div className="result red">
                You LOST!
                <div className="flame-button">
                  <button type="button" onClick={restartGame}>
                    Restart the Game
                  </button>
                </div>
              </div>
            )}
            {!!winner && winner === 'd' && (
              <div className="result yellow">
                Its a Draw!
                <div className="flame-button">
                  <button type="button" onClick={restartGame}>
                    Restart the Game
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="game-labels">
            <div>
              <p className="x x1">x</p>
              <span> &mdash; Player</span>
            </div>
            <div>
              <p className="o o1">o</p>
              <span> &mdash; Computer</span>
            </div>
          </div>
        </div>
        <GameNavigation />
      </div>
    </div>
  );
};

export default TicTacToe;
