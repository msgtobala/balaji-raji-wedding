import React, { useState, useEffect } from 'react';

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

import Like from '../Like/Like';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const GameCard = (props) => {
  const { games } = props;
  const [gameLikes, setGameLikes] = useState(null);
  const navigate = useNavigate();

  const images = require.context('../../images/games', true);
  const generalGames =
    games?.filter((game) => game.category === 'general') ?? [];
  const kidsGames = games?.filter((game) => game.category === 'kids') ?? [];
  const adultGames = games?.filter((game) => game.category === 'adults') ?? [];

  useEffect(() => {
    const likes = JSON.parse(
      sessionStorage.getItem('balaji-raji-wedding-likes')
    );
    if (likes) {
      setGameLikes(likes);
    }
  }, []);

  const updateGameCount = async (game) => {
    const query = doc(db, 'games', game.gameId);

    const gameLikes = JSON.parse(
      sessionStorage.getItem('balaji-raji-wedding-likes')
    );

    const updatedGamesLikes = {
      ...gameLikes,
      [game.gameId]: true,
    };

    try {
      setGameLikes(updatedGamesLikes);
      if (!gameLikes[game.gameId]) {
        await updateDoc(query, { likes: game.likes + 1 });
      }
      sessionStorage.setItem(
        'balaji-raji-wedding-likes',
        JSON.stringify(updatedGamesLikes)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const redirectToGames = async (game) => {
    const query = doc(db, 'games', game.gameId);
    await updateDoc(query, { played: game.played + 1 });
    navigate(`/play/${game.gameRoute}`);
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
          <div className="game-article-card" key={game.gameId}>
            <figure className="game-article">
              <img src={images(`./${game.gameImage}`)} alt="flames" />
              <figcaption>
                <h3>{game.gameName}</h3>
                <p>{game.gameDescription}</p>
              </figcaption>
            </figure>
            <div className="game-stats">
              <div className="game-stat">
                <Like
                  clicked={() => updateGameCount(game)}
                  liked={gameLikes?.[game.gameId]}
                />
                <p>{game.likes}</p>
              </div>
              <div className="game-stat">
                <p style={{ fontSize: '29px', marginRight: '10px' }}>🎮</p>
                <p>{game.played}</p>
              </div>
              <div className="game-cta">
                <p onClick={() => redirectToGames(game)}>
                  Play
                  <div className="arrow">
                    <span></span>
                  </div>
                </p>
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
        <div className="game-news">
          {kidsGames.map((game) => (
            <div className="game-article-card" key={game.gameId}>
              <figure className="game-article">
                <img src={images(`./${game.gameImage}`)} alt="flames" />
                <figcaption>
                  <h3>{game.gameName}</h3>
                  <p>{game.gameDescription}</p>
                </figcaption>
              </figure>
              <div className="game-stats">
                <div className="game-stat">
                  <Like
                    clicked={() => updateGameCount(game)}
                    liked={gameLikes?.[game.gameId]}
                  />
                  <p>{game.likes}</p>
                </div>
                <div className="game-stat">
                  <p style={{ fontSize: '29px', marginRight: '10px' }}>🎮</p>
                  <p>{game.played}</p>
                </div>
                <div className="game-cta">
                  <p onClick={() => redirectToGames(game.gameRoute)}>
                    Play
                    <div className="arrow">
                      <span></span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
