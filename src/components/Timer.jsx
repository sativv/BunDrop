import React, { useState, useEffect } from "react";

function CountdownTimer({ minutes }) {
  const [timeRemaining, setTimeRemaining] = useState(minutes * 60); // Convert minutes to seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="countdown-timer">
      <p>Time remaining: {formatTime(timeRemaining)}</p>
    </div>
  );
}

export default CountdownTimer;
