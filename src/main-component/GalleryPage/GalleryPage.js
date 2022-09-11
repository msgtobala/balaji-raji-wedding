import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import Footer from '../../components/footer/Footer';
import PortfolioSection3 from '../../components/PortfolioSection3/PortfolioSection3';

const GalleryPage = () => {
  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'} />
      <PortfolioSection3 />
      <PortfolioSection pclassName={'tb-padding'} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default GalleryPage;
