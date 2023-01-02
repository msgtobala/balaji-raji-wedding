import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

import HomePage from '../HomePage/HomePage';
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import HomePage6 from '../HomePage6/HomePage6';
import HomePage7 from '../HomePage7/HomePage7';
import InvitationPage from '../InvitationPage/InvitationPage';
import WeddingDetailsPage from '../WeddingDetailsPage/WeddingDetailsPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import EventPage from '../EventPage/EventPage';
import ErrorPage from '../ErrorPage';
import ComingSoonPage from '../ComingSoonPage/ComingSoonPage';
import LivePage from '../LivePage/LivePage';
import GamesPage from '../GamesPage/GamesPage';
import PlayGamesPage from '../GamesPage/PlayGamePage';
import LeaderBoardPage from '../GamesPage/LeaderBoardPage';
import LoveDashboard from '../../components/LoveDashboard/LoveDashboard';
import FlamesGame from '../GamesPage/Games/Flames/Flames';
import LoveCalculator from '../GamesPage/Games/LoveCalculator/LoveCalculator';
import TicTacToe from '../GamesPage/Games/TicTacToe/TicTacToe';
import StonePaperScissor from '../GamesPage/Games/StonePaperScissor/StonePaperScissor';
import MemoryGame from '../GamesPage/Games/MemoryGame/MemoryGame';
import SpinTheWheel from '../GamesPage/Games/SpinTheWheel/SpinTheWheel';
import AssessUsGame from '../GamesPage/Games/AssessUs/AssessUs';
import TossACoin from '../GamesPage/Games/TossACoin/TossACoin';
import ShareAndEarn from '../GamesPage/Games/ShareAndEarn/ShareAndEarn';

const homepages = [
  <HomePage6 />,
  <HomePage2 />,
  <HomePage3 />,
  <HomePage4 />,
  <HomePage5 />,
  <HomePage />,
  <HomePage7 />,
];

const AllRoute = () => {
  const [home, setHome] = useState(<HomePage6 />);

  useEffect(() => {
    let currentHomePage = sessionStorage.getItem('balaraji-wedding-homeId');

    if (currentHomePage === null) {
      sessionStorage.setItem('balaraji-wedding-homeId', '0');
      setTimeout(() => {
        showToast(1);
      }, 1700);
    } else {
      let homeId = parseInt(currentHomePage);
      if (homeId > homepages.length - 2) {
        homeId = 0;
      } else {
        homeId++;
      }
      setHome(homepages[homeId]);
      setTimeout(() => {
        showToast(homeId + 1);
      }, 1700);
      sessionStorage.setItem('balaraji-wedding-homeId', `${homeId}`);
    }
  }, []);

  const showToast = (version) => {
    if (window.location.pathname === '/') {
      toast(`V${version} of Home. Reload to see others`, {
        position: window.innerWidth < 720 ? 'bottom-center' : 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        bodyClassName: 'toast-body',
      });
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={home} />
          <Route path="invitation" element={<InvitationPage />} />
          <Route path="live" element={<LivePage />} />
          <Route path="wedding-details" element={<WeddingDetailsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="coming" element={<ComingSoonPage />} />
          <Route path="404" element={<ErrorPage />} />
          <Route exact path="games" element={<GamesPage />} />
          <Route exact path="play" element={<PlayGamesPage />} />
          <Route exact path="play/flames" element={<FlamesGame />} />
          <Route
            exact
            path="play/love-calulator"
            element={<LoveCalculator />}
          />
          <Route exact path="play/tic-tac-toe" element={<TicTacToe />} />
          <Route
            exact
            path="play/stone-paper-scissor"
            element={<StonePaperScissor />}
          />
          <Route exact path="play/memory-game" element={<MemoryGame />} />
          <Route exact path="play/spin-wheel" element={<SpinTheWheel />} />
          <Route exact path="play/assess-us-quiz" element={<AssessUsGame />} />
          <Route exact path="play/toss-a-coin" element={<TossACoin />} />
          <Route exact path="play/share-it-earn-it" element={<ShareAndEarn />} />
          <Route
            exact
            path="play/love-calulator"
            element={<LoveCalculator />}
          />
          <Route path="leader-board" element={<LeaderBoardPage />} />
          <Route path="make-love" element={<LoveDashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
