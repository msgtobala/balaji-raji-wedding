import React, { Fragment } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Scrollbar from '../../components/scrollbar';
import EventSection from '../../components/EventSection/EventSection';

const EventPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={'When & Where'} pagesub={'Events'} />
      <EventSection eclassName={'wpo-event-section-s2'} />
      <PartnerSection pclassName={'section-padding pt-0'} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default EventPage;
