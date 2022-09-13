import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar';
import Hero from '../../components/hero';
import Scrollbar from '../../components/scrollbar';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import VideoSection from '../../components/VideoSection';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import TimeLine from '../../components/TimeLine/TimeLine';

const HomePage = () => {
  return (
    <Fragment>
      <Navbar hclassName={'wpo-site-header-s1'} />
      <Hero />
      <CoupleSection />
      <VideoSection />
      <StorySection />
      <EventSection />
      <TimeLine />
      <CtaSection />
      <BrideGrooms />
      <PortfolioSection />
      <PartnerSection />
      <br />
      <br />
      <br />
      <Footer />
      <Scrollbar scrollId="home" />
    </Fragment>
  );
};

export default HomePage;
