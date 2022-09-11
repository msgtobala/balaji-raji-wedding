import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar';
import Hero3 from '../../components/hero3/Hero3';
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
import TimeLine from '../../components/TimeLine/TimeLine';

const HomePage5 = () => {
  return (
    <Fragment>
      <div className="box-bg">
        <div className="box-style">
          <Navbar />
          <Hero3 />
          <CoupleSection />
          <VideoSection />
          <StorySection />
          <EventSection />
          <TimeLine />
          <CtaSection />
          <BrideGrooms />
          <PortfolioSection />
          <PartnerSection />
          <BlogSection />
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage5;
