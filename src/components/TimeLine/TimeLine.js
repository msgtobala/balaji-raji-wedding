import React, { useState, useEffect } from 'react';

import SectionTitle from '../SectionTitle';
import Status from '../Status/Status';
import './styles.css';
import * as constants from '../../constants/strings';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const timelineConfig = [
  {
    eventId: 'welcome',
    eventName: 'Welcome',
    eventDescription:
      'Bride and her family welcoming the groom and his family members.',
    time: '7:30 AM',
    timelineRange: [
      'Wednesday, 25 Jan, 2023 7:30 AM',
      'Wednesday, 25 Jan, 2023 9:00 AM',
    ],
    isEnd: false,
    questionText: false,
  },
  {
    eventName: 'Lunch',
    eventId: 'lunch1',
    eventDescription: 'A delicious food will be served. Enjoy you meal!',
    time: '12:00 PM',
    timelineRange: [
      'Wednesday, 25 Jan, 2023 12:00 PM',
      'Wednesday, 25 Jan, 2023 1:30 PM',
    ],
    isEnd: true,
    questionText: false,
  },
  {
    eventName: 'Engagement',
    eventId: 'engagement',
    eventDescription:
      'Official announcement of marriage and some rituals will be held',
    time: '12:00 PM',
    timelineRange: [
      'Wednesday, 25 Jan, 2023 3:00 PM',
      'Wednesday, 25 Jan, 2023 4:00 PM',
    ],
    isEnd: false,
    questionText: true,
  },
  {
    eventName: 'Snacks',
    eventId: 'snacks',
    eventDescription:
      'Snacks stall will be opened for children, and elders to fill our tummy!',
    time: '4:00 PM',
    timelineRange: [
      'Wednesday, 25 Jan, 2023 4:00 PM',
      'Wednesday, 25 Jan, 2023 5:00 PM',
    ],
    isEnd: true,
    questionText: false,
  },
  {
    eventName: 'Gifts Distribution',
    eventId: 'gifts',
    eventDescription:
      'Some exciting, funny, and simple games will be conducted via our website and during the function. Participate and get the exciting gifts!',
    time: '5:00 PM',
    timelineRange: [
      'Wednesday, 25 Jan, 2023 5:00 PM',
      'Wednesday, 25 Jan, 2023 6:00 PM',
    ],
    isEnd: false,
    questionText: false,
  },
  {
    eventName: 'Reception',
    eventId: 'reception',
    eventDescription:
      'Bride and Groom will be welcomed and its time for taking pictures to make more memories',
    time: '7:00 PM onwards',
    timelineRange: [
      'Wednesday, 25 Jan, 2023 7:00 PM',
      'Wednesday, 25 Jan, 2023 11:00 PM',
    ],
    isEnd: true,
    questionText: true,
  },
  {
    eventName: 'Dinner',
    eventId: 'dinner1',
    eventDescription: "Dinner will be served with some appetizing menu's",
    time: '8:00 PM',
    timelineRange: [
      'Wednesday, 25 Jan, 2023 8:00 PM',
      'Wednesday, 25 Jan, 2023 9:30 PM',
    ],
    isEnd: false,
    questionText: false,
  },
];

const timelineConfig2 = [
  {
    eventName: 'Ubanayanam',
    eventId: 'ubanayanam',
    eventDescription:
      ' The boy steps into manhood and accepts all his responsibilities',
    time: '3:00 AM',
    timelineRange: [
      'Wednesday, 26 Jan, 2023 3:00 AM',
      'Wednesday, 26 Jan, 2023 4:00 AM',
    ],
    isEnd: false,
    questionText: false,
  },
  {
    eventName: 'Tie the Knot',
    eventId: 'marriage',
    eventDescription:
      'A long await is over and its time to tie the knot with mix of all emotions!',
    time: '7:30 AM',
    timelineRange: [
      'Wednesday, 26 Jan, 2023 7:30 AM',
      'Wednesday, 26 Jan, 2023 9:00 AM',
    ],
    isEnd: true,
    questionText: true,
  },
  {
    eventName: 'Breakfast',
    eventId: 'breakfast2',
    eventDescription:
      'Nothing will satisfy better than the tasty food in the early morning.',
    time: '7:00 AM',
    timelineRange: [
      'Wednesday, 26 Jan, 2023 7:00 AM',
      'Wednesday, 26 Jan, 2023 8:30 AM',
    ],
    isEnd: false,
    questionText: false,
  },
  {
    eventName: 'Lunch',
    eventId: 'lunch2',
    eventDescription: 'Nothing brings people together like good food.',
    time: '12:00 PM',
    timelineRange: [
      'Wednesday, 26 Jan, 2023 12:00 PM',
      'Wednesday, 26 Jan, 2023 1:30 PM',
    ],
    isEnd: true,
    questionText: false,
  },
  {
    eventName: "Bride's send-off",
    eventId: 'sendOff',
    eventDescription:
      'The most emotional moment when bride saying farewell to her family to start her new life!',
    time: '4:00 PM',
    timelineRange: [
      'Wednesday, 26 Jan, 2023 4:00 PM',
      'Wednesday, 26 Jan, 2023 6:00 PM',
    ],
    isEnd: false,
    questionText: false,
  },
];

const TimeLine = () => {
  const isMobile = window.innerWidth < 1024;

  const [showEngagementCount, setShowEngagementCount] = useState(false);
  const [showReceptionCount, setShowReceptionCount] = useState(false);
  const [showMarriageCount, setShowMarriageCount] = useState(false);

  const [engagementCount, setEngagementCount] = useState(null);
  const [receptionCount, setReceptionCount] = useState(null);
  const [marriageCount, setMarriageCount] = useState(null);

  useEffect(() => {
    const engagementSession = JSON.parse(sessionStorage.getItem('engagement'));
    const receptionSession = JSON.parse(sessionStorage.getItem('reception'));
    const marriageSession = JSON.parse(sessionStorage.getItem('marriage'));

    if (engagementSession) {
      setShowEngagementCount(true);
    }

    if (receptionSession) {
      setShowReceptionCount(true);
    }

    if (marriageSession) {
      setShowMarriageCount(true);
    }

    const q = doc(db, 'engaged', 'YdEnTLW8xsM98pKGIOop');
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      if (querySnapshot.exists()) {
        const { engagement, reception, marriage } = querySnapshot.data();
        if (engagement) setEngagementCount(engagement);
        if (reception) setReceptionCount(reception);
        if (marriage) setMarriageCount(marriage);
      }
    });
    return unsubscribe;
  }, []);

  const updatePresence = async (eventId) => {
    const eventSession = sessionStorage.getItem(eventId);
    if (eventSession) {
      return;
    }
    sessionStorage.setItem(eventId, true);

    if (eventId === 'engagement') {
      setShowEngagementCount(true);
    }

    if (eventId === 'reception') {
      setShowReceptionCount(true);
    }

    if (eventId === 'marriage') {
      setShowMarriageCount(true);
    }

    const eventDocRef = doc(db, 'engaged', 'YdEnTLW8xsM98pKGIOop');
    try {
      await updateDoc(eventDocRef, {
        engagement:
          eventId === 'engagement' ? engagementCount + 1 : engagementCount,
        marriage: eventId === 'marriage' ? marriageCount + 1 : marriageCount,
        reception:
          eventId === 'reception' ? receptionCount + 1 : receptionCount,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <SectionTitle MainTitle={'Event Timeline'} />
      </div>
      <div className="row custom-timeline-row example-centered">
        <div className="col-xs-10 col-md-12 col-lg-12 col-xs-offset-1 col-sm-12 col-sm-offset-2">
          <ul className="timeline timeline-centered">
            <li className="timeline-item period first-timeline-item">
              <div className="timeline-info"></div>
              <div className="timeline-marker first-marker"></div>
              <div className="timeline-content first-timeline-content">
                <h2 className="timeline-title">{constants.engagementDate}</h2>
              </div>
            </li>
            {timelineConfig.map((timeline) => (
              <li className="timeline-item" key={timeline.eventId}>
                <div className="timeline-info">
                  <span>{timeline.time}</span>
                  <div className="status-timeline-container">
                    <Status
                      size="12"
                      showText
                      range={timeline.timelineRange}
                      fontSize="14px"
                      end={isMobile ? false : timeline.isEnd}
                    />
                  </div>
                  {timeline.questionText && timeline.eventId === 'engagement' && (
                    <div
                      className="time-attend-text"
                      onClick={() => updatePresence(timeline.eventId)}
                    >
                      {showEngagementCount && engagementCount != null
                        ? `You, ${engagementCount}+ Others attending this event`
                        : 'Will you attend?'}
                    </div>
                  )}
                  {timeline.questionText && timeline.eventId === 'reception' && (
                    <div
                      className="time-attend-text"
                      onClick={() => updatePresence(timeline.eventId)}
                    >
                      {showReceptionCount && receptionCount != null
                        ? `You, ${receptionCount}+ others are attending this event`
                        : 'Will you attend?'}
                    </div>
                  )}
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{timeline.eventName}</h3>
                  <p>{timeline.eventDescription}</p>
                </div>
              </li>
            ))}
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h2 className="timeline-title">{constants.marriageDate}</h2>
              </div>
            </li>
            {timelineConfig2.map((timeline) => (
              <li className="timeline-item" key={timeline.eventId}>
                <div className="timeline-info">
                  <span>{timeline.time}</span>
                  <div className="status-timeline-container">
                    <Status
                      size="12"
                      showText
                      range={timeline.timelineRange}
                      fontSize="14px"
                      end={isMobile ? false : timeline.isEnd}
                    />
                  </div>
                  {timeline.questionText && timeline.eventId === 'marriage' && (
                    <div
                      className="time-attend-text"
                      onClick={() => updatePresence(timeline.eventId)}
                    >
                      {showMarriageCount && marriageCount != null
                        ? `You, ${marriageCount}+ others are attending this event`
                        : 'Will you attend?'}
                    </div>
                  )}
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{timeline.eventName}</h3>
                  <p>{timeline.eventDescription}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TimeLine;
