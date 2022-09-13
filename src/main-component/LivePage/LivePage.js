import React, { Fragment, useEffect } from 'react';

import CtaSection from '../../components/CtaSection/CtaSection';
import Navbar from '../../components/Navbar';
import { Container } from 'react-bootstrap-v5';
import YoutubeEmbed from '../../components/YoutubeVide/YoutubeVide';
import Scrollbar from '../../components/scrollbar';
import Footer from '../../components/footer/Footer';

const LivePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Navbar hclassName={'wpo-site-header-s1'} />
      <section className="section-padding" id="live-cta">
        <CtaSection showCta={false} />
      </section>
      <Container>
        <YoutubeEmbed embedId={'qy7Zb-RZSlk'} />
      </Container>
      <br />
      <br />
      <br />
      <Footer />
      <Scrollbar scrollId={'live-cta'} />
    </Fragment>
  );
};

export default LivePage;
