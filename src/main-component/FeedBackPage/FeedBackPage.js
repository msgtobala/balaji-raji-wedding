import React, { Fragment, useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import './styles.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar';
import SectionTitle from '../../components/SectionTitle';
import FullStar from '../../images/hero/star.svg';
import EmptyStar from '../../images/hero/star_stock.svg';
import { db } from '../../services/firebase';
import Popup from '../../components/Popup/Popup';

const Ratings = (props) => {
  const { ratings } = props;

  return (
    <div className="ratings">
      {Array.from({ length: ratings }).map((_, index) => (
        <img key={index} src={FullStar} alt="full-star" />
      ))}
      {Array.from({ length: 5 - ratings }).map((_, index) => (
        <img key={index} src={EmptyStar} alt="full-star" />
      ))}
    </div>
  );
};

const FeedBackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);

  useEffect(() => {
    const ref = collection(db, 'feedback');
    const q = query(ref, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setFeedbacks(data);
    });

    return unsubscribe;
  }, []);

  const toggleShowPopup = () => {
    setShowPopup((popup) => !popup);
  };

  return (
    <Fragment>
      <Navbar hclassName={'wpo-site-header-s1'} />
      <div className="feedback-container">
        <div className="container">
          <br />
          <SectionTitle MainTitle={'Feedback'} />
          <div className="feedbacks">
            <div style={{ textAlign: 'right' }}>
              <div
                className="theme-btn live-btn"
                style={{ cursor: 'pointer' }}
                onClick={toggleShowPopup}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="ti-plus"></i>
                  <span className="text"> &nbsp;Add Feedback</span>{' '}
                </div>
              </div>
            </div>
            <br />
            {feedbacks.length === 0 ? (
              <p style={{ textAlign: "center", fontSize: "30px" }}>Add your first Comment</p>
            ) : (
              feedbacks.map((feedback) => (
                <div className="feedback" key={feedback.id}>
                  <h2>{feedback.commentTitle}</h2>
                  <span className="date">{feedback.name}</span>
                  <div className="line-shape-feedback">
                    <div className="outer-ball-feedback">
                      <div className="inner-ball-feedback"></div>
                    </div>
                  </div>
                  <Ratings ratings={feedback.ratings} />
                  <p>{feedback.comments}</p>
                  <hr />
                  <div className="liked-section">
                    <div className="game-likes">
                      <div className="feedback-liked">
                        <i className="ti-heart"></i>
                        <span> Liked Page</span>
                      </div>
                      <b>{feedback.likedPage}</b>
                    </div>
                    <div className="game-likes">
                      <div className="feedback-liked">
                        <i className="ti-crown"></i>
                        <span> Have Played Games?</span>
                      </div>
                      <b>{feedback.haveYouPlayedGame ? 'Yes' : 'No'}</b>
                    </div>
                    <div className="game-likes">
                      <div className="feedback-liked">
                        <i className="ti-game"></i>
                        <span> Liked Game</span>
                      </div>
                      <b>{feedback.likedGame}</b>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <br />
        <Popup show={showPopup} maxWidth="md" handleClose={toggleShowPopup} />
      </div>
      <Scrollbar scrollId="scroll-to-feedback" />
      <Footer />
    </Fragment>
  );
};

export default FeedBackPage;
