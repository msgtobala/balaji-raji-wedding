import React, { Fragment } from 'react';
import WeddingTime from '../../components/weddingTime/WeddingTime';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar';
import EventSection from '../../components/EventSection/EventSection';

const AccommodationPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={'Accommodation'} pagesub={'Accommodation'} />
      <WeddingTime wdClass={'section-padding'} />
      <CoupleSection cClass={'couple-section-s2'} />
      <EventSection />
      <PartnerSection pClass={'section-padding pt-0'} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AccommodationPage;
