import React, { useEffect, Fragment, useState } from 'react';
import { query, getDocs, orderBy, collection } from 'firebase/firestore';

import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar';
import { db } from '../../services/firebase';
import GameLoader from '../../components/GameLoader/GameLoader';
import Leaders from './Leaders';

const LeaderBoardPage = () => {
  const [leaderboardData, setLeaderBoardData] = useState(null);
  const getLeaderBoard = async () => {
    const ref = collection(db, 'users');
    try {
      const leaders = [];
      const q = query(ref, orderBy('grabGems', 'desc'));
      const data = await getDocs(q);
      data.forEach((doc) => {
        leaders.push({
          username: doc.data().username,
          gamesPlayed: doc.data().gamesPlayed,
          grabGems: doc.data().grabGems,
          mobile: doc.data().mobile,
        });
      });
      setLeaderBoardData(leaders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLeaderBoard();
  }, []);

  return (
    <Fragment>
      <Navbar hclassName={'wpo-site-header-s1'} />
      <div className="container" id="scroll-to-leaderboard">
        <div
          style={{ margin: '30px 0', textAlign: 'center' }}
          className="wpo-wedding-single-title"
        >
          <h1 style={{ fontFamily: 'Jost', fontSize: '45px' }}>Leaderboard</h1>
        </div>
        <br />
        {leaderboardData === null ? (
          <GameLoader />
        ) : (
          <Leaders leaderData={leaderboardData} />
        )}
      </div>
      <Footer />
      <Scrollbar scrollId="scroll-to-leaderboard" />
    </Fragment>
  );
};

export default LeaderBoardPage;
