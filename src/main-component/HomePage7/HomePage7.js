import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar';
import Hero7 from '../../components/hero7/Hero7';
import Scrollbar from '../../components/scrollbar';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import VideoSection from '../../components/VideoSection';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import TimeLine from '../../components/TimeLine/TimeLine';
import CoupleParents from '../../components/CoupleParents/CoupleParents';
import CoupleVideo from '../../videos/couple-video.mp4';

const HomePage7 = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero7 color="white" />
      <div style={{ paddingTop: '120px' }}>
        <WeddingTime />
      </div>
      <CoupleSection />
      <VideoSection />
      <StorySection />
      <EventSection />
      <TimeLine />
      <CtaSection />
      <CoupleParents />
      <BrideGrooms />
      <PortfolioSection showBtn />
      <PartnerSection />
      <br />
      <br />
      <br />
      <Footer />
      <Scrollbar scrollId="home" />
      <div style={{ display: 'none' }}>
        <video autoPlay="autoplay" loop="loop" muted>
          <source src={CoupleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Fragment>
  );
};

export default HomePage7;
