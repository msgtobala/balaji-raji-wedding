import React from 'react';

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

import Like from '../Like/Like';
import './styles.css';

const GameCard = (props) => {
  const { games } = props;

  const images = require.context('../../images/games', true);
  const generalGames =
    games?.filter((game) => game.category === 'general') ?? [];
  const kidsGames = games?.filter((game) => !game.adult);
  const adultGames = games?.filter((game) => game.adult);

  const updateGameCount = async (game) => {
    const query = doc(db, 'games', game.gameId);

    try {
      await updateDoc(query, { likes: game.likes + 1 });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="game-card-wrapper">
      <h2 className="game-card-wrapper-heading">
        <strong>
          General<span>({generalGames.length})</span>
        </strong>
      </h2>
      <div className="game-news">
        {generalGames.map((game) => (
          <div className="game-article-card">
            <figure className="game-article">
              <img src={images(`./${game.gameImage}`)} alt="flames" />
              <figcaption>
                <h3>{game.gameName}</h3>
                <p>{game.gameDescription}</p>
              </figcaption>
            </figure>
            <div className="game-stats">
              <div className="game-stat">
                <Like clicked={() => updateGameCount(game)} />
                <p>{game.likes}</p>
              </div>
              <div className="game-stat">
                <p style={{ fontSize: '29px', marginRight: '10px' }}>🎮</p>
                <p>{game.played}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="game-card-wrapper">
        <h2 className="game-card-wrapper-heading">
          <strong>
            Kids<span>( {kidsGames.length} )</span>
          </strong>
        </h2>
      </div>
      <div className="game-card-wrapper">
        <h2 className="game-card-wrapper-heading">
          <strong>
            Adults<span>( {adultGames.length} )</span>
          </strong>
        </h2>
      </div>
    </div>
  );
};

export default GameCard;
