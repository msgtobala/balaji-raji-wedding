import React from 'react';

import SectionTitle from '../SectionTitle';
import shape1 from '../../images/team/shape1.jpg';
import shape2 from '../../images/team/shape2.jpg';
import * as constants from '../../constants/strings';
import { websiteImages as Images } from '../../constants/images';

const brideGrooms = [
  {
    id: 'couple parent 1',
    image: Images.SrinivasanRajalakshmi,
    name: constants.groomsParents,
    title: "Bride's In-Laws",
  },
  {
    id: 'couple parents 2',
    image: Images.MahendiranPriya,
    name: constants.bridesParents,
    title: "Groom's In-Laws",
  },
];

const CoupleParents = (props) => {
  return (
    <section
      className={`wpo-team-section ${props.tClass} section-padding`}
      style={{ paddingTop: '60px' }}
    >
      <div className="container">
        <SectionTitle MainTitle={'Couple Parents'} />
        <div className="wpo-team-wrap">
          <div className="row justify-content-center">
            {brideGrooms.map((brideGroom, tm) => (
              <div
                className="col col-lg-4 col-md-6 col-sm-12 col-12"
                key={brideGroom.id}
              >
                <div className="wpo-team-item">
                  <div className="wpo-team-img">
                    <div className="wpo-team-img-inner">
                      <img src={brideGroom.image} alt={brideGroom.id} />
                    </div>
                    <div className="shape-1">
                      <img src={shape1} alt="" />
                    </div>
                    <div className="shape-2">
                      <img src={shape2} alt="" />
                    </div>
                  </div>
                  <div className="wpo-team-text">
                    <h3 style={{ fontSize: '30px' }}>{brideGroom.name}</h3>
                    <span>{brideGroom.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleParents;
