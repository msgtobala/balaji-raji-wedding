import React from 'react';
import { gameLevels } from '../../main-component/GamesPage/levels';

import './ProfileCard.css';

const userGameLevel = (gems) => {
  if (gems >= 140) {
    return gameLevels.legend.name;
  }

  if (gems >= 100) {
    return gameLevels.expert.name;
  }

  if (gems >= 80) {
    return gameLevels.veteran.name;
  }

  if (gems >= 40) {
    return gameLevels.pro.name;
  }
  return gameLevels.master.name;
};

const nextLevelText = (gems) => {
  if (gems >= 140) {
    return 'Congrats!, You are a true Legend';
  }

  if (gems >= 100) {
    return `Need ${gameLevels.legend.points - gems} more gems to become a ${(
      <b>{gameLevels.legend.name}</b>
    )}`;
  }

  if (gems >= 80) {
    return `Need ${gameLevels.expert.points - gems} more gems to become a ${(
      <b>{gameLevels.expert.name}</b>
    )}`;
  }

  if (gems >= 40) {
    return `Need ${gameLevels.veteran.points - gems} more gems to become a ${(
      <b>{gameLevels.veteran.name}</b>
    )}`;
  }

  return `Need ${gameLevels.pro.points - gems} more gems to become a ${
    gameLevels.pro.name
  }`;
};

const ProfileCard = (props) => {
  const { user, resetForm, confirm, hidePlay } = props;
  return (
    <div className="game-profile-card">
      <div className="img">
        <div className="profile-card-text">
          {user.username.substr(0, 2).toUpperCase()}
        </div>
      </div>
      <div className="infos">
        <div className="name">
          <h2>{`${user.username
            .substr(0, 1)
            .toUpperCase()}${user.username.substr(1)}`}</h2>
          <h4>{userGameLevel(user.grabGems)}</h4>
        </div>
        <p className="game-profile-text">{nextLevelText(user.grabGems)}</p>
        <ul className="stats">
          <li>
            <h3>{user.grabGems}</h3>
            <h4>Grab Gems</h4>
          </li>
          <li>
            <h3>{user.gamesPlayed}</h3>
            <h4>Games Played</h4>
          </li>
          <li>
            <h3>{user.highestScore}</h3>
            <h4>Highest Score</h4>
          </li>
        </ul>
        {!hidePlay && (
          <div className="links">
            <button className="follow" onClick={confirm}>
              Proceed to Play
            </button>
            &nbsp;
            {
              <button className="view" onClick={resetForm}>
                {' '}
                &nbsp;Different User?&nbsp;{' '}
              </button>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
