import React from 'react';

import { getCurrentPosition } from '../../helpers/currentPosition';
import './styles.css';
import { userGameLevel } from './levels';

const Leaders = ({ leaderData = [] }) => {
  const [currentPlayerPosition, currentPlayer] = getCurrentPosition(leaderData);
  const topPlayers = leaderData.slice(0, 3);
  console.log(currentPlayerPosition);

  return (
    <>
      <div className="leaderboard-container">
        {topPlayers.map((player, index) => (
          <div className="leaderboard-item">
            <div className={`leader-card leader-card-bg${index + 1}`}>
              <div className="leader-position-style">
                1<sup> st</sup>
              </div>
            </div>
            <div
              className="hex"
              style={{
                backgroundImage: `url("https://avatars.dicebear.com/api/bottts/${player.username}.svg")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '200px',
                transform: 'rotate(60deg) scale(0.3)',
              }}
            ></div>
            <div className="leader-board-detail">
              <span>{`${player.username
                .substr(0, 1)
                .toUpperCase()}${player.username.substr(1)}`}</span>
              <p className={`leader-board-level${index + 1}`}>
                Game Grade - {userGameLevel(player.grabGems)}
              </p>
              <ul className="stats">
                <li>
                  <h3>{player.grabGems}</h3>
                  <h4>Grab Gems</h4>
                </li>
                <li>
                  <h3>{player.gamesPlayed}</h3>
                  <h4>Games Played</h4>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div
        style={{ margin: '30px 0', textAlign: 'center' }}
        className="wpo-wedding-single-title"
      >
        <h1 style={{ fontFamily: 'Jost', fontSize: '45px' }}>My Position</h1>
      </div>
      <br />
      <div className="parallelogram">
        <p className="current-player-position">#{currentPlayerPosition + 1}</p>
        <div
          style={{
            backgroundImage: `url("https://avatars.dicebear.com/api/bottts/${currentPlayer.username}.svg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '80px',
            height: '80px',
          }}
        ></div>
        <div>
          <p className="game-statics">{`${currentPlayer.username
            .substr(0, 1)
            .toUpperCase()}${currentPlayer.username.substr(1)}`}</p>
        </div>
        <div>
          <p className="game-statics">{currentPlayer.gamesPlayed}</p>
          <span className="game-label">Games Played</span>
        </div>
        <div>
          <p className="game-statics">{currentPlayer.grabGems}</p>
          <span className="game-label">Grab Gems</span>
        </div>
        <div>
          <p className="game-statics">
            {userGameLevel(currentPlayer.grabGems)}
          </p>
          <span className="game-label">Game Level</span>
        </div>
      </div>
    </>
  );
};

export default Leaders;
