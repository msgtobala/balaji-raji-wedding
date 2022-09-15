import { useEffect, useState } from 'react';

const useCountStatus = () => {
  const countDownDate = new Date().getTime();

  const [countDown, setCountDown] = useState(countDownDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const count = new Date().getTime();
      setCountDown(count);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return countDown;
};

export { useCountStatus };
