import React, { useEffect, useState } from 'react';

interface CountdownProps {
  translations: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  styles: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({ translations, styles }) => {
  const targetDate = new Date("2025-04-05T13:00:00");
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={`flex justify-center space-x-4 ${styles}`}>
      {Object.keys(timeLeft).length === 0 ? (
        <span className="text-2xl font-light">The wedding has started!</span>
      ) : (
        Object.entries(timeLeft).map(([interval, value]) => {
          const label = translations[interval as keyof typeof translations];
          return (
            <div
              key={interval}
              className="flex w-14 flex-col items-center sm:w-20"
            >
              <span className="text-brittany text-center text-5xl sm:text-6xl">
                {value as string}
              </span>
              <span className="text-sm font-light sm:text-base">
                {value === 1 ? label.slice(0, -1) : label}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CountdownTimer;
