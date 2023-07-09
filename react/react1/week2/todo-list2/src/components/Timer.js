import React, { useEffect, useState } from 'react';

function Timer ()  {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [seconds]);

  return <p>You used {seconds} seconds on website.</p>;
};

export default Timer;