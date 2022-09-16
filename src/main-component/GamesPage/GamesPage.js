import React, { Fragment, useEffect } from 'react';

import Footer from '../../components/footer/Footer';
import Login from '../../components/Login';
import Navbar from '../../components/Navbar';
import Scrollbar from '../../components/scrollbar';
import SectionTitle from '../../components/SectionTitle';
import wImg from '../../images/wedding/wedding.jpg';
import wImg2 from '../../images/wedding/1.jpg';
import wImg3 from '../../images/wedding/2.jpg';

const GamesPage = () => {
  useEffect(() => {
    window.scrollTo(10, 0);
  });

  return (
    <Fragment>
      <Navbar />
      <div className="game-container" id="games">
        <div className="container" style={{ marginTop: '72px' }}>
          <SectionTitle MainTitle={'The Game !'} />
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
                    <p>
                      Massa volutpat odio facilisis purus sit elementum. Non,
                      sed velit dictum quam. Id risus pharetra est, at rhoncus,
                      nec ullamcorper tincidunt. Id aliquet duis sollicitudin
                      diam.
                    </p>
                    <ul>
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
                  <div className="wpo-wedding-single-item list-widget">
                    <div className="wpo-wedding-single-title">
                      <h3>Game and Complexity chart</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: '80px 0' }}>
          <Login />
        </div>
      </div>
      <Scrollbar scrollId={'games'} />
      <Footer />
    </Fragment>
  );
};

export default GamesPage;
