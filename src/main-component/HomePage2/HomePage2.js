import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar';
import Hero2 from '../../components/hero2/Hero2';
import Scrollbar from '../../components/scrollbar';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import StorySection from '../../components/StorySection/StorySection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import TimeLine from '../../components/TimeLine/TimeLine';
import CoupleParents from '../../components/CoupleParents/CoupleParents';

const HomePage2 = () => {
  return (
    <Fragment>
      <Navbar hclassName={'wpo-site-header-s1'} />
      <Hero2 />
      <div style={{ paddingTop: '120px' }}>
        <WeddingTime />
      </div>
      <CoupleSection cclassName={'couple-section-s2'} />
      <StorySection />
      <EventSection />
      <TimeLine />
      <CoupleParents />
      <BrideGrooms />
      <PortfolioSection gclassName={'pt-0'} showBtn />
      <PartnerSection />
      <br />
      <br />
      <br />
      <Footer />
      <Scrollbar scrollId="home" />
    </Fragment>
  );
};

export default HomePage2;
