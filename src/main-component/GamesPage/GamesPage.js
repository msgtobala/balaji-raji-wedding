import React, { Fragment, useEffect } from 'react';

import Footer from '../../components/footer/Footer';
import Login from '../../components/Login';
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar';
import SectionTitle from '../../components/SectionTitle';
import './styles.css';

const GamesPage = () => {
  useEffect(() => {
    window.scrollTo(10, 0);
  });

  return (
    <Fragment>
      <Navbar />
      <div className="game-container" id="games">
        <div className="container padding-container">
          <SectionTitle MainTitle={'The Game !'} />
          <p
            style={{
              textAlign: 'center',
              color: '#D66371',
              marginTop: '-45px',
            }}
          >
            Scroll bottom to read the rules
          </p>
        </div>
        <div
          style={{
            marginBottom: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="container">
            <Login />
          </div>
        </div>
        <div className="wpo-wedding-single-area">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="wpo-wedding-single-wrap">
                  <div className="wpo-wedding-single-item">
                    <div className="wpo-wedding-single-title">
                      <h3>What ?</h3>
                    </div>
                    <p>
                      To celebrate Balaji and Raji’s wedding, we created Games
                      to make more fun, laughter, joy and happiness. We would
                      like you to join the celebration!
                    </p>
                    <div className="wpo-wedding-single-title">
                      <h3>Who ?</h3>
                    </div>
                    <p>
                      Games for Adults? Nope…We have games for children too.
                      Yes, we crafted games for both Adults and children. We
                      would request you to participate and celebrate the
                      happiness in the respective games.
                    </p>
                  </div>
                  <div
                    className="wpo-wedding-single-item list-widget"
                    style={{ maxWidth: '100%' }}
                  >
                    <div className="wpo-wedding-single-title">
                      <h3>How to play?</h3>
                    </div>
                    <p>Please follow the below instructions to play the game</p>
                    <ul className="how-to-play">
                      <li>
                        Login with your username and unique mobile
                        number(Remember it for future logins).
                      </li>
                      <li>
                        Participate in any game with the respective age(Please
                        don't spam).
                      </li>
                      <li>
                        Each win in the games will gain points<b>(GRAB GEM)</b>{' '}
                        based on the complexity of the game
                      </li>
                      <li>
                        The top scorers will be displayed in the leader board
                        section(paste the link)
                      </li>
                      <li>
                        The final calculation of the points will be closed on
                        24/01/2023
                      </li>
                      <li>
                        The top 3 winner from both the categories(Adults,
                        Children) will be awarded with special gifts during the
                        Reception. Don’t miss the fun!
                      </li>
                    </ul>
                  </div>
                  <div
                    className="wpo-wedding-single-item list-widget"
                    style={{ maxWidth: '100%' }}
                  >
                    <div className="wpo-wedding-single-title">
                      <h3 style={{ marginBottom: '42px' }}>
                        Game and Complexity Table
                      </h3>
                      <p>
                        <b>For Adults</b>
                      </p>
                      <table className="rwd-table">
                        <tbody className="how-to-play">
                          <tr>
                            <th>S.No</th>
                            <th>Game Name</th>
                            <th>For Kids</th>
                            <th>Grab Gems</th>
                          </tr>
                          <tr>
                            <td data-th="S.No">1</td>
                            <td data-th="Game Name">Pacman</td>
                            <td data-th="For Kids">NO</td>
                            <td data-th="Grab Gems">5</td>
                          </tr>
                          <tr>
                            <td data-th="S.No">2</td>
                            <td data-th="Game Name">Bow and Arrow</td>
                            <td data-th="For Kids">NO</td>
                            <td data-th="Grab Gems">3</td>
                          </tr>
                          <tr>
                            <td data-th="S.No">3</td>
                            <td data-th="Game Name">Memory game(HARD)</td>
                            <td data-th="For Kids">NO</td>
                            <td data-th="Grab Gems">4</td>
                          </tr>
                          <tr>
                            <td data-th="S.No">4</td>
                            <td data-th="Game Name">Assess us</td>
                            <td data-th="For Kids">NO</td>
                            <td data-th="Grab Gems">1</td>
                          </tr>
                        </tbody>
                      </table>
                      <p style={{ marginTop: '20px' }}>
                        <b>For Kids</b>
                      </p>
                      <table className="rwd-table">
                        <tbody className="how-to-play">
                          <tr>
                            <th>S.No</th>
                            <th>Game Name</th>
                            <th>For Kids</th>
                            <th>Grab Gems</th>
                          </tr>
                          <tr>
                            <td data-th="S.No">1</td>
                            <td data-th="Game Name">Stone Paper Scissors</td>
                            <td data-th="For Kids">YES</td>
                            <td data-th="Grab Gems">2</td>
                          </tr>
                          <tr>
                            <td data-th="S.No">2</td>
                            <td data-th="Game Name">Word Game</td>
                            <td data-th="For Kids">YES</td>
                            <td data-th="Grab Gems">5</td>
                          </tr>
                          <tr>
                            <td data-th="S.No">3</td>
                            <td data-th="Game Name">Tic Tac Toe</td>
                            <td data-th="For Kids">YES</td>
                            <td data-th="Grab Gems">3</td>
                          </tr>
                          <tr>
                            <td data-th="S.No">4</td>
                            <td data-th="Game Name">Memory Game(Easy)</td>
                            <td data-th="For Kids">YES</td>
                            <td data-th="Grab Gems">4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scrollbar scrollId={'games'} />
      <Footer />
    </Fragment>
  );
};

export default GamesPage;
