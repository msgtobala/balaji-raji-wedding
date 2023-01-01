import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@material-ui/core';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import SectionTitle from '../SectionTitle';
import { websiteImages } from '../../constants/images';
import './styles.css';

const Portfolios = [
  {
    Pimg: websiteImages.gallery6,
  },
  {
    Pimg: websiteImages.gallery7,
  },
  {
    Pimg: websiteImages.gallery8,
  },
  {
    Pimg: websiteImages.gallery2,
  },
  {
    Pimg: websiteImages.gallery3,
  },
  {
    Pimg: websiteImages.gallery14,
  },
  {
    Pimg: websiteImages.gallery15,
  },
  {
    Pimg: websiteImages.gallery17,
  },
  {
    Pimg: websiteImages.gallery13,
  },
  {
    Pimg: websiteImages.gallery16,
  },
  {
    Pimg: websiteImages.gallery18,
  },
  {
    Pimg: websiteImages.gallery19,
  },
  {
    Pimg: websiteImages.gallery20,
  },
  {
    Pimg: websiteImages.gallery21,
  },
  {
    Pimg: websiteImages.gallery22,
  },
  {
    Pimg: websiteImages.gallery12,
  },
];

const PortfolioSection = (props) => {
  const navigate = useNavigate();
  const { showBtn } = props;
  const redirectToAlbum = () => {
    navigate('/gallery');
  };

  let newPortfolios = [...Portfolios];
  if (props.slice) {
    newPortfolios = newPortfolios.slice(0, 5);
  }

  return (
    <section
      style={{ paddingTop: '0px' }}
      className={`wpo-portfolio-section section-padding ${props.pSclass}`}
      id="gallery"
    >
      <div className="container">
        <SectionTitle MainTitle={'Sweet Moments'} />
        <div style={{ marginTop: '-50px' }}></div>
        {showBtn && (
          <div style={{ textAlign: 'right' }}>
            <Button className={`btn redirect-button`} onClick={redirectToAlbum}>
              View Album
            </Button>
          </div>
        )}
        <div className="sortable-gallery">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-grids gallery-container clearfix">
                {newPortfolios.map((portfolio, pItem) => (
                  <div className="grid" key={pItem}>
                    <div className="img-holder">
                      <ReactFancyBox
                        thumbnail={portfolio.Pimg}
                        image={portfolio.Pimg}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
