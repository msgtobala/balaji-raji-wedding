import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar';
import Hero3 from '../../components/hero3/Hero3';
import Scrollbar from '../../components/scrollbar';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import TimeLine from '../../components/TimeLine/TimeLine';

const HomePage3 = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero3 />
      <CoupleSection cclassName={'couple-section-s2'} />
      <StorySection2 />
      <EventSection />
      <TimeLine />
      <BrideGrooms />
      <PortfolioSection2 gclassName={'pt-0'} />
      <PartnerSection />
      <BlogSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage3;
