import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar';
import Hero2 from '../../components/hero2/Hero2';
import Scrollbar from '../../components/scrollbar';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection2 from '../../components/PortfolioSection2/PortfolioSection2';
import BrideGrooms from '../../components/BrideGrooms/BrideGrooms';
import EventSection from '../../components/EventSection/EventSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';

const HomePage2 = () => {
  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header-s1'} />
      <Hero2 />
      <div style={{ paddingTop: '120px' }}>
        <WeddingTime />
      </div>
      <CoupleSection cClass={'couple-section-s2'} />
      <StorySection2 />
      <EventSection />
      <BrideGrooms />
      <PortfolioSection2 gClass={'pt-0'} />
      <PartnerSection />
      <BlogSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage2;
