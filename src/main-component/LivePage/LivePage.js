import React, { Fragment } from 'react';

import CtaSection from '../../components/CtaSection/CtaSection';
import Navbar from '../../components/Navbar';
import { Container } from 'react-bootstrap-v5';
import YoutubeEmbed from '../../components/YoutubeVide/YoutubeVide';
import Scrollbar from '../../components/scrollbar';
import Footer from '../../components/footer/Footer';

const LivePage = () => {
  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header-s1'} />
      <div className="section-padding">
        <CtaSection showCta={false} />
      </div>
      <Container>
        <YoutubeEmbed embedId={'xNRJwmlRBNU'} />
      </Container>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default LivePage;
