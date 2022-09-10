import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar';
import Hero6 from '../../components/hero6/Hero6';
import Scrollbar from '../../components/scrollbar';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import VideoSection from '../../components/VideoSection';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';

const HomePage6 = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero6 />
      <CoupleSection />
      <VideoSection />
      <StorySection />
      <EventSection />
      <CtaSection />
      <BrideGrooms />
      <PortfolioSection />
      <PartnerSection />
      <BlogSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage6;
