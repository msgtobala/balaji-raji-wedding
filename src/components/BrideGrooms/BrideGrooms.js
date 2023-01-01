import React from 'react';

import SectionTitle from '../SectionTitle';
import shape1 from '../../images/team/shape1.jpg';
import shape2 from '../../images/team/shape2.jpg';
import * as constants from '../../constants/strings';
import { websiteImages as Images } from '../../constants/images';

const brideGrooms = [
  {
    id: '1',
    image: Images.Swathi,
    name: constants.bridesSister,
    title: "Bride's Sister",
  },
  {
    id: '2',
    image: Images.Padmaja,
    name: constants.groomsSister,
    title: "Groom's Sister",
  },
  {
    id: '3',
    image: Images.Jagadees,
    name: constants.bridesBrother,
    title: "Bride's Brother",
  },
];

const BrideGrooms = (props) => {
  return (
    <section
      className={`wpo-team-section ${props.tClass} section-padding`}
      style={{ paddingTop: '60px' }}
    >
      <div className="container">
        <SectionTitle MainTitle={'Bridesmaids & Groomsmen'} />
        <div className="wpo-team-wrap">
          <div className="row" style={{ justifyContent: 'center' }}>
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
                    <h3>{brideGroom.name}</h3>
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

export default BrideGrooms;
