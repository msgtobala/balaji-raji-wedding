import React from 'react';

import SectionTitle from '../SectionTitle';
import timg1 from '../../images/team/img-1.jpg';
import timg2 from '../../images/team/img-2.jpg';
import timg3 from '../../images/team/img-3.jpg';
import shape1 from '../../images/team/shape1.jpg';
import shape2 from '../../images/team/shape2.jpg';
import * as constants from '../../constants/strings';

const brideGrooms = [
  {
    id: '1',
    image: timg1,
    name: constants.bridesSister,
    title: "Bride's Sister",
  },
  {
    id: '2',
    image: timg2,
    name: constants.groomsSister,
    title: "Groom's Sister",
  },
  {
    id: '4',
    image: timg3,
    name: 'Gajendran',
    title: "Groom's Brother",
  },
  {
    id: '5',
    image: timg3,
    name: 'Niranjana',
    title: "Grooms's Sister",
  },
  {
    id: '3',
    image: timg3,
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
          <div className="row">
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
