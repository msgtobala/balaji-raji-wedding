import React from 'react';

import LocationMap from '../Modal';
import SectionTitleS2 from '../SectionTitleS2';
import Status from '../Status/Status';
import './EventSection.css';

const events = [
  {
    title: 'The Engagement',
    time: 'Sunday, 14 Aug, 2022 10:30 AM',
    location: 'Amman Thirumana mandapam, Pochampalli, Tamilnadu',
    phones: ['+91 997-679-5711', '+91 957-830-9780'],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.696987351652!2d78.37396771481544!3d12.33617039127501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac47fdf87de50d%3A0x23a0d55db0b8dec5!2sAmman%20Thirumana%20mandapam!5e0!3m2!1sen!2sin!4v1659709513690!5m2!1sen!2sin',
  },
  {
    title: 'The Reception',
    time: 'Monday, 25 Sep, 2022 1:00 PM',
    location: 'MKS Mahal, Mathur to Dharmapuri main road, Pochampalli, TN',
    phones: ['+91 997-679-5711', '+91 957-830-9780'],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.675983586947!2d78.3800395!3d12.337582099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4799235f57b7%3A0x17cdadd575c0c4a2!2sMks%20mahal!5e0!3m2!1sen!2sin!4v1659709045916!5m2!1sen!2sin',
  },
  {
    title: 'The Wedding',
    time: 'Monday, 25 Sep, 2022 1:00 PM',
    location: 'MKS Mahal, Mathur to Dharmapuri main road, Pochampalli, TN',
    phones: ['+91 997-679-5711', '+91 957-830-9780'],
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.675983586947!2d78.3800395!3d12.337582099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4799235f57b7%3A0x17cdadd575c0c4a2!2sMks%20mahal!5e0!3m2!1sen!2sin!4v1659709045916!5m2!1sen!2sin',
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
            {events.map((event, eItem) => (
              <div
                className="col col-lg-4 col-md-6 col-12 events-status-container"
                key={eItem}
              >
                <div className="wpo-event-item">
                  <div className="wpo-event-text">
                    <div className="event-status-container">
                      <Status showText />
                    </div>
                    <br />
                    <h2>{event.title}</h2>
                    <ul>
                      <li>{event.time}</li>
                      <li>{event.location}</li>
                      <div>
                        {event.phones.map((phone) => (
                          <li>{phone}</li>
                        ))}
                      </div>
                      <li>
                        <LocationMap location={event.map} title={event.title} />
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
