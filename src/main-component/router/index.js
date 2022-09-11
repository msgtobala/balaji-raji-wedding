import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { toast } from 'react-toastify';

import Homepage from '../HomePage';
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import HomePage4 from '../HomePage4/HomePage4';
import HomePage5 from '../HomePage5/HomePage5';
import HomePage6 from '../HomePage6/HomePage6';
import HomePage7 from '../HomePage7/HomePage7';
import InvitationPage from '../InvitationPage/InvitationPage';
import WeddingPage from '../WeddingPage/WeddingPage';
import WeddingDetailsPage from '../WeddingDetailsPage/WeddingDetailsPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import AccommodationPage from '../AccommodationPage/AccommodationPage';
import EventPage from '../EventPage/EventPage';
import BlogPage from '../BlogPage';
import BlogDetails from '../BlogDetails';
import ErrorPage from '../ErrorPage';
import ComingSoonPage from '../ComingSoonPage/ComingSoonPage';
import HomePage from '../HomePage';
import LivePage from '../LivePage/LivePage';

const homepages = [
  <Homepage />,
  <HomePage2 />,
  <HomePage3 />,
  <HomePage4 />,
  <HomePage5 />,
  <HomePage6 />,
  <HomePage7 />,
];

const AllRoute = () => {
  const [home, setHome] = useState(<HomePage />);

  useEffect(() => {
    let currentHomePage = sessionStorage.getItem('balaraji-wedding-homeId');

    if (currentHomePage === null) {
      sessionStorage.setItem('balaraji-wedding-homeId', '0');
      setTimeout(() => {
        showToast(1);
      }, 1500);
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
      }, 1500);
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
          <Route path="wedding" element={<WeddingPage />} />
          <Route path="wedding-details" element={<WeddingDetailsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="accommodation" element={<AccommodationPage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="coming" element={<ComingSoonPage />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="blog-single/:id" element={<BlogDetails />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
