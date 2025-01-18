import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  translations: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

const CountdownTimer: React.FC<CountdownProps> = ({
  targetDate,
  translations,
}) => {
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

  const removeFinalS = (value: number, interval: string) =>
    value === 1 ? interval.slice(0, -1) : interval;

  return (
    <div className="flex justify-center space-x-4 text-white">
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
