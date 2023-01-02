import React, { Fragment, useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { CloudDownloadRounded } from '@material-ui/icons';

import Navbar from '../../components/Navbar';
import Hero4 from '../../components/hero4/Hero4';
import Scrollbar from '../../components/scrollbar';
import classes from '../../css/BackgroundVideo.module.css';
import WeddingInvitation from '../../videos/wedding_invitation_portrait.mp4';
import WeddingPdf from '../../documents/wedding_invitation_portrait.pdf';
import WeddingInvitationLandscape from '../../videos/Wedding Invitation - Landscape.mp4';
import './styles.css';
import Footer from '../../components/footer/Footer';

const InvitationPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  const previousPage = () => {
    if (pageNumber <= 1) {
      return;
    }

    setPageNumber((page) => page - 1);
  };

  const nextPage = () => {
    if (pageNumber >= numPages) {
      return;
    }

    setPageNumber((page) => page + 1);
  };

  return (
    <Fragment>
      <Navbar />
      <Hero4 />
      <div className="container invitation-container">
        <div className="row mt-4">
          <br />
          <div className="col-md-6 col-sm-6 col-12">
            <div className="wpo-p-details-img">
              <video
                loop
                controls
                className={classes.Video}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'top',
                  height: 'auto',
                  minHeight: 'auto',
                }}
              >
                <source src={WeddingInvitation} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <div className="wpo-p-details-img pdf-container">
              <div class="download-icon">
                <a href={WeddingPdf} download>
                  <CloudDownloadRounded />
                </a>
              </div>
              <Document file={WeddingPdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
              <div className="page-control">
                <button type="button" onClick={previousPage}>
                  ‹
                </button>
                <span>
                  {pageNumber} of {numPages}
                </span>
                <button type="button" onClick={nextPage}>
                  ›
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-12">
            <div className="wpo-p-details-img">
              <video
                loop
                controls
                className={classes.Video}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'top',
                  height: 'auto',
                  minHeight: 'auto',
                }}
              >
                <source src={WeddingInvitationLandscape} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="invitation-footer">
        <Footer />
      </div>
      <Scrollbar scrollId="hero-scroll" />
    </Fragment>
  );
};

export default InvitationPage;
