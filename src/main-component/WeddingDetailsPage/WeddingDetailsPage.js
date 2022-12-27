import React, { Fragment } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Sidebar from './sidebar';
import Scrollbar from '../../components/scrollbar';
import wImg from '../../images/wedding/wedding.jpg';
import wImg2 from '../../images/wedding/1.jpg';
import wImg3 from '../../images/wedding/2.jpg';
import { galleryImage as Images } from '../../constants/images';

const WeddingDetailsPage = () => {
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
                    <img src={Images.MarriageHall} alt="" />
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
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="wpo-p-details-img">
                        <img src={wImg2} alt="" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="wpo-p-details-img">
                        <img src={wImg3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpo-wedding-single-item list-widget">
                  <div className="wpo-wedding-single-title">
                    <h3>Our Capabilities</h3>
                  </div>
                  <p>
                    Massa volutpat odio facilisis purus sit elementum. Non, sed
                    velit dictum quam. Id risus pharetra est, at rhoncus, nec
                    ullamcorper tincidunt. Id aliquet duis sollicitudin diam.
                  </p>
                  <ul>
                    <li>Non saed velit dictum quam risus pharetra esta.</li>
                    <li>
                      Id risus pharetra est, at rhoncus, nec ullamcorper
                      tincidunt.
                    </li>
                    <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                    <li>Massa volutpat odio facilisis purus sit elementum.</li>
                    <li>Elit curabitur amet risus bibendum.</li>
                  </ul>
                </div>
                <div className="wpo-wedding-single-item">
                  <div className="wpo-wedding-single-title">
                    <h3>Our approach</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consequat suspendisse aenean tellus augue morbi risus. Sit
                    morbi vitae morbi sed urna sed purus. Orci facilisi eros sed
                    pellentesque. Risus id sed tortor sed scelerisque.
                    Vestibulum elit elementum, magna id viverra non, velit.
                    Pretium, eros, porttitor fusce auctor vitae id. Phasellus
                    scelerisque nibh eleifend vel enim mauris purus. Rutrum vel
                    sem adipiscing nisi vulputate molestie scelerisque molestie
                    ultrices. Eu, fusce vulputate diam interdum morbi ac a.
                  </p>
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
      </div>
      <PartnerSection pclassName={'section-padding pt-0'} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default WeddingDetailsPage;
