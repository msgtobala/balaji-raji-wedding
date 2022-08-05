import React from 'react';
import LocationMap from '../Modal';
import SectionTitleS2 from '../SectionTitleS2';

const Events = [
  {
    title: 'The Engagement',
    li1: 'Sunday, 14 Aug, 2022 10:30 AM',
    li2: 'Amman Thirumana mandapam, Pochampalli, Tamilnadu',
    li3: '+1 234-567-8910',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.696987351652!2d78.37396771481544!3d12.33617039127501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac47fdf87de50d%3A0x23a0d55db0b8dec5!2sAmman%20Thirumana%20mandapam!5e0!3m2!1sen!2sin!4v1659709513690!5m2!1sen!2sin',
  },
  {
    title: 'The Reception',
    li1: 'Monday, 25 Sep, 2022 1:00 PM',
    li2: 'MKS Mahal, Pochampalli, Tamil Nadu',
    li3: '+1 234-567-8910',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.675983586947!2d78.3800395!3d12.337582099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4799235f57b7%3A0x17cdadd575c0c4a2!2sMks%20mahal!5e0!3m2!1sen!2sin!4v1659709045916!5m2!1sen!2sin',
  },
  {
    title: 'The Wedding',
    li1: 'Monday, 25 Sep, 2022 1:00 PM',
    li2: 'MKS Mahal, Pochampalli, Tamil Nadu',
    li3: '+1 234-567-8910',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.675983586947!2d78.3800395!3d12.337582099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4799235f57b7%3A0x17cdadd575c0c4a2!2sMks%20mahal!5e0!3m2!1sen!2sin!4v1659709045916!5m2!1sen!2sin',
  },
];

const EventSection = (props) => {
  return (
    <section
      className={`wpo-event-section section-padding ${props.eClass}`}
      id="event"
    >
      <div className="container">
        <SectionTitleS2 MainTitle={'When & Where'} />
        <div className="wpo-event-wrap">
          <div className="row">
            {Events.map((event, eitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                <div className="wpo-event-item">
                  <div className="wpo-event-text">
                    <h2>{event.title}</h2>
                    <ul>
                      <li>{event.li1}</li>
                      <li>{event.li2}</li>
                      <li>{event.li3}</li>
                      <li>
                        <LocationMap
                          location={event.location}
                          title={event.title}
                        />
                      </li>
                    </ul>
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

export default EventSection;
