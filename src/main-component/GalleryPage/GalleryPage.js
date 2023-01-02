import React, { Fragment, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import Footer from '../../components/footer/Footer';
import PortfolioSection3 from '../../components/PortfolioSection3/PortfolioSection3';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(10, 0);
  });

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'} />
      <br />
      <PortfolioSection3 />
      <PortfolioSection pclassName={'tb-padding'} />
      <Footer />
      <Scrollbar scrollId="scroll-page-title" />
    </Fragment>
  );
};
export default GalleryPage;
