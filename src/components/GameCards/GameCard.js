import React from 'react';

import { galleryImage as Images } from '../../constants/images';
import './styles.css';

const GameCard = (props) => {
  const { games } = props;

  const generalGames =
    games?.filter((game) => game.category === 'general') ?? [];

  return (
    <div className="game-card-wrapper">
      <h2 className="game-card-wrapper-heading">
        <strong>
          General<span>({generalGames.length})</span>
        </strong>
      </h2>
      <div className="game-news">
        <figure className="game-article">
          <img src={Images.Flames} alt="flames" />
          <figcaption>
            <h3>FLAMES</h3>
            <p>
              A fun game you can play with your friends to predict whether your
              crush is right for you.
            </p>
          </figcaption>
        </figure>
        <figure className="game-article">
          <img src={Images.LoveCalculator} alt="flames" />
          <figcaption>
            <h3>Love Calculator</h3>
            <p>
              Provides a compatibility score that represents match in terms of
              love, based on the names of two people. The higher the percentage,
              the better the match.
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="game-card-wrapper">
        <h2 className="game-card-wrapper-heading">
          <strong>
            Kids<span>( 4 )</span>
          </strong>
        </h2>
      </div>
      <div className="game-card-wrapper">
        <h2 className="game-card-wrapper-heading">
          <strong>
            Adults<span>( 4 )</span>
          </strong>
        </h2>
      </div>
    </div>
  );
};

export default GameCard;
