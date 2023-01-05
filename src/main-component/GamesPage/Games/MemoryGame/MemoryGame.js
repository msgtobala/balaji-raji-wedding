import React, { useState, useEffect } from 'react';
import { doc, updateDoc, getDoc, increment } from 'firebase/firestore';
import { toast } from 'react-toastify';

import './styles.css';
import { websiteImages as Images } from '../../../../constants/images';
import GameNavigation from '../GameNavigation';
import MemoryCard from './MemoryCard';
import { db } from '../../../../services/firebase';

const pokeDeck = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    stat: '',
  },
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    stat: '',
  },
  {
    id: 2,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    stat: '',
  },
  {
    id: 2,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    stat: '',
  },
  {
    id: 3,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    stat: '',
  },
  {
    id: 3,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    stat: '',
  },
  {
    id: 4,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
    stat: '',
  },
  {
    id: 4,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
    stat: '',
  },
  {
    id: 5,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png',
    stat: '',
  },
  {
    id: 5,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png',
    stat: '',
  },
  {
    id: 6,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png',
    stat: '',
  },
  {
    id: 6,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png',
    stat: '',
  },
  {
    id: 7,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    stat: '',
  },
  {
    id: 7,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    stat: '',
  },
  {
    id: 8,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
    stat: '',
  },
  {
    id: 8,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
    stat: '',
  },
];

const MemoryGame = () => {
  const newPokeDeck = JSON.parse(JSON.stringify(pokeDeck));
  const [items, setItems] = useState(newPokeDeck.sort(() => Math.random() - 0.5));
  const [prev, setPrev] = useState(-1);
  const [totalMoves, setTotalMoves] = useState(12);
  const [startGame, setStartGame] = useState(false);
  const [pointer, setPointer] = useState(true);

  useEffect(() => {
    if (startGame) {
      document.body.style.background = 'lightBlue';
    }
  }, [startGame]);

  useEffect(() => {
    return () => {
      document.body.style.background = 'unset';
    };
  }, []);

  const check = (current) => {
    if (items[current].id === items[prev].id) {
      setTotalMoves((moves) => moves - 1);
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setPrev(-1);
      const success = items.filter((item) => item.stat === 'correct');
      if (items.length === success.length) {
        addGrabGems();
      }
    } else {
      setTotalMoves((moves) => moves - 1);
      setPointer(false);
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setPrev(-1);
        setPointer(true);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (prev === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  const resetGame = async () => {
    const newPokeDeck = JSON.parse(JSON.stringify(pokeDeck));
    setPrev(-1);
    setTotalMoves(12);
    setStartGame(false);
    setItems(newPokeDeck.sort(() => Math.random() - 0.5));
    const gameUser = JSON.parse(sessionStorage.getItem('user'));
    const query = doc(db, 'games', 'memory-game');
    const gameQuery = doc(db, 'users', gameUser.mobile);
    if (gameUser) {
      await updateDoc(gameQuery, {
        gamesPlayed: increment(1),
      });
    }
    await updateDoc(query, {
      played: increment(1),
    });
  };

  const addGrabGems = async () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      const query = doc(db, 'users', user.mobile);
      const userData = await getDoc(query);
      if (userData && userData.data()) {
        await updateDoc(query, {
          grabGems: increment(4),
        });
        toast(`Earned 4 grab gems`, {
          position: window.innerWidth < 720 ? 'bottom-center' : 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          bodyClassName: 'toast-body',
        });
      }
    }
  };

  const success = items.filter((item) => item.stat === 'correct');
  if (success.length === items.length) {
    return (
      <div className="container">
        <div className="game-space">
          <p className="memory-game-note">Congrats, You Won!</p>
          <p style={{ textAlign: 'center' }}>You earned 4 grab gems</p>
          <div className="flame-button less-margin">
            <button type="button" onClick={resetGame}>
              Restart Game
            </button>
          </div>
          <GameNavigation />
        </div>
      </div>
    );
  }
  
  if (totalMoves <= 0) {
    return (
      <div className="container">
        <div className="game-space">
          <p className="memory-game-note">You Lost !, Try again</p>
          <div className="flame-button less-margin">
            <button type="button" onClick={resetGame}>
              Restart Game
            </button>
          </div>
          <GameNavigation />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="game-space">
        {startGame ? (
          <div className="memory-game-body">
            <div className="memory-game-container">
              {items.map((item, index) => (
                <MemoryCard
                  key={index}
                  item={item}
                  id={index}
                  handleClick={handleClick}
                  pointer={pointer}
                />
              ))}
            </div>
            <p className="memory-game-note">
              You have <b>{totalMoves}</b> moves left!
            </p>
            <div className="flame-button less-margin">
              <button type="button" onClick={resetGame}>
                Restart Game
              </button>
            </div>
          </div>
        ) : (
          <div>
            <img src={Images.MemoryGameBanner} alt="memory-game-banner" loading="lazy" />
            <p className="memory-game-note">
              You have 5 seconds to memorize the Poke cards
            </p>
            <div className="flame-button less-margin">
              <button type="button" onClick={() => setStartGame(true)}>
                Start the Game
              </button>
            </div>
          </div>
        )}
        <GameNavigation />
      </div>
    </div>
  );
};

export default MemoryGame;
