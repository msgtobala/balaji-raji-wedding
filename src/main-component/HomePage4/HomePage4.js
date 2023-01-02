import React, { Fragment, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Hero5 from '../../components/hero5/Hero5';
import Scrollbar from '../../components/scrollbar';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import VideoSection from '../../components/VideoSection';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import TimeLine from '../../components/TimeLine/TimeLine';
import CoupleParents from '../../components/CoupleParents/CoupleParents';

const HomePage4 = () => {
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Hero5 />
      <CoupleSection />
      <VideoSection />
      <StorySection />
      <EventSection />
      <TimeLine />
      <CtaSection />
      <CoupleParents />
      <BrideGrooms />
      <PortfolioSection showBtn slice />
      <br />
      <br />
      <br />
      <Footer />
      <Scrollbar scrollId="home" />
    </Fragment>
  );
};

export default HomePage4;
