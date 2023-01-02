import React, { Fragment, useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { CloudDownloadRounded } from '@material-ui/icons';

import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Sidebar from './sidebar';
import Scrollbar from '../../components/scrollbar';
import classes from '../../css/BackgroundVideo.module.css';
import { websiteImages as Images } from '../../constants/images';
import WeddingInvitation from '../../videos/wedding_invitation_portrait.mp4';
import WeddingInvitationLandscape from '../../videos/Wedding Invitation - Landscape.mp4';
import WeddingPdf from '../../documents/wedding_invitation_portrait.pdf';
import './styles.css';

const WeddingDetailsPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);

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
      <PageTitle pageTitle={'Wedding Details'} pagesub={'Wedding'} />
      <div className="wpo-wedding-single-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="wpo-wedding-single-wrap">
                <div className="wpo-wedding-single-item">
                  <div className="wpo-wedding-single-main-img">
                    <img src={Images.MarriageHall} alt="marriage-hall" />
                  </div>
                  <div className="wpo-wedding-single-title">
                    <h3>Wedding Invitation from Groom and Bride</h3>
                  </div>
                  <p>
                    Your presence at our wedding means a lot to all of us.
                    Please let us have the honor to host you on this beautiful
                    celebration of love and loyalty! With great joy, we invite
                    you to join us at the celebration of our wedding ceremony on
                    25 and 26 January, 2023 in the MKS Mahal, Pochampalli. We
                    are co-heartedly inviting you on our marriage. Please bring
                    your blessings and more gifts. You are the most important
                    person without whom this celebration is incomplete. We are
                    looking forward to having your company on 25 and 26 January,
                    2023. Your support and suggestions have helped us a lot in
                    planning a wonderful wedding ceremony. Now it’s finally time
                    for you to make us feel blessed with your presence.
                  </p>
                  <div className="row mt-4">
                    <div className="wpo-wedding-single-title">
                      <h3>Invitation</h3>
                    </div>
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
                        <Document
                          file={WeddingPdf}
                          onLoadSuccess={onDocumentLoadSuccess}
                        >
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
                          className={`${classes.Video} `}
                          style={{
                            objectFit: 'contain',
                            objectPosition: 'top',
                            height: 'auto',
                            minHeight: 'auto',
                          }}
                        >
                          <source
                            src={WeddingInvitationLandscape}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpo-wedding-single-item list-widget">
                  <div className="wpo-wedding-single-title">
                    <h3>Our Wedding Process</h3>
                  </div>
                  <ul>
                    <li>Dress Purchase for our Engagement ceremony</li>
                    <li>The Engagement day</li>
                    <li>Wedding purchase</li>
                    <li>Designing Invitations to spread our love</li>
                    <li>Mehendi Ceremony</li>
                    <li>Haldi Ceremony</li>
                    <li>Reception and Sangeet ceremony</li>
                    <li>The Day (Tieing the knot)</li>
                    <li>Vidaai</li>
                  </ul>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
        <br />
        <PartnerSection pclassName={'section-padding pt-0'} />
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default WeddingDetailsPage;
