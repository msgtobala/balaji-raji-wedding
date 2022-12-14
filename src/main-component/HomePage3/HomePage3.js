import React, { Fragment, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Hero3 from '../../components/hero3/Hero3';
import Scrollbar from '../../components/scrollbar';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import VideoSection from '../../components/VideoSection';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import Footer from '../../components/footer/Footer';
import TimeLine from '../../components/TimeLine/TimeLine';
import CoupleParents from '../../components/CoupleParents/CoupleParents';

const HomePage3 = () => {
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);
  return (
    <Fragment>
      <Navbar />
      <Hero3 />
      <CoupleSection cclassName={'couple-section-s2'} />
      <VideoSection />
      <StorySection />
      <EventSection />
      <TimeLine />
      <CtaSection />
      <CoupleParents />
      <BrideGrooms />
      <PortfolioSection gclassName={'pt-0'} showBtn slice />
      <br />
      <br />
      <br />
      <Footer />
      <Scrollbar scrollId="home" />
    </Fragment>
  );
};

export default HomePage3;
