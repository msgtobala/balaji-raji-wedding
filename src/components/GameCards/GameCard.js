import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

import Like from '../Like/Like';
import './styles.css';

const GameCard = (props) => {
  const { games } = props;
  const [gameLikes, setGameLikes] = useState(null);
  const navigate = useNavigate();

  const images = require.context('../../images/games', true);
  const generalGames =
    games?.filter((game) => game.category === 'general') ?? [];
  const allGames = games?.filter((game) => game.category !== 'general') ?? [];

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
      console.err(err);
    }
  };

  const redirectToGames = async (game) => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      const query = doc(db, 'games', game.gameId);
      const gameQuery = doc(db, 'users', user.mobile);
      await updateDoc(query, { played: game.played + 1 });
      const games = (await getDoc(gameQuery)).data() ?? 0;
      await updateDoc(gameQuery, { gamesPlayed: games.gamesPlayed + 1 });
      navigate(`/play/${game.gameRoute}`);
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
            Games<span>( {allGames.length} )</span>
          </strong>
        </h2>
        <div className="game-news">
          {allGames.map((game) => (
            <div className="game-article-card" key={game.gameId}>
              <figure className="game-article">
                {console.log(game.gameImage)}
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
      </div>
    </div>
  );
};

export default GameCard;
