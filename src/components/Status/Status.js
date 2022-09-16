import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getReturnValues } from '../countdown/countdown';
import { useCountStatus } from '../countdown/useStatus';
import OnlineIndicator from './OnlineIndicator';
import './Status.css';

const statusText = {
  past: {
    text: 'Happened',
    color: '#d66371',
    textColor: '#d66371',
    showBlink: false,
  },
  present: {
    text: 'Happening Now',
    color: '#198754',
    textColor: '#198754',
    showBlink: true,
  },
  future: {
    text: 'Starts in',
    color: '#f89b29',
    textColor: '#f89b29',
    showBlink: true,
  },
};

const dayTags = ['D', 'H', 'M', 'S'];

const Status = (props) => {
  const {
    showText,
    size,
    end,
    range = [new Date(), new Date()],
    fontSize,
  } = props;
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate('/live');
  };

  const currentTime = useCountStatus();

  const getStatus = (time) => {
    const [startTime, endTime] = range;
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();

    if (time > end) {
      return statusText.past.text;
    } else if (start <= time && time <= end) {
      return statusText.present.text;
    } else {
      const remainingTime = parseInt(start) - parseInt(time);
      const [days, hours, minutes, seconds] = getReturnValues(remainingTime);
      const [dayTag, hourTag, minTag, secTag] = dayTags;
      const dayStr = days.toString();
      const hourStr = hours.toString();
      const minStr = minutes.toString();
      const secStr = seconds.toString();
      return `${statusText.future.text} ${
        dayStr !== '0' ? `${dayStr}${dayTag}` : ''
      } ${hourStr !== '0' ? `${hourStr}${hourTag}` : ''} ${
        minStr !== '0' ? `${minStr}${minTag}` : ''
      } ${`${secStr}${secTag}`}`;
    }
  };

  const getStatusObject = (time) => {
    const [startTime, endTime] = range;
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();

    if (time > end) {
      return statusText.past;
    } else if (start <= time && time <= end) {
      return statusText.present;
    } else {
      return statusText.future;
    }
  };

  const allStatus = getStatusObject(currentTime);

  return (
    <div
      className="status-container"
      style={{ justifyContent: end ? 'end' : 'start' }}
    >
      <OnlineIndicator
        size={size}
        color={allStatus.color}
        textColor={allStatus.textColor}
        showBlink={allStatus.showBlink}
      />
      {showText && (
        <p
          className="online-text"
          style={{
            color: allStatus.color ?? '#000000',
            fontSize: fontSize ?? '18px',
          }}
          onClick={redirectHandler}
        >
          {getStatus(currentTime)}
        </p>
      )}
    </div>
  );
};

export default Status;
