import React, { useState, useEffect } from "react";

const DurationExercise = ({ exercise, onReturn }) => {
  const [timer, setTimer] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (timer) {
      let interval = setInterval(
        () => setDuration((duration) => duration + 1),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formattedTime = () => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  return (
    <div>
      <h2>{exercise.name}</h2>
      <h3>Timer:</h3>
      <div class="tracker">
        <p>{formattedTime(duration)}</p>
      </div>
      {timer ? (
        <button onClick={() => setTimer(false)}>Stop Timer</button>
      ) : (
        <button onClick={() => setTimer(true)}>Start Timer</button>
      )}
      <button onClick={() => setDuration(0)}>Reset Timer</button>
      <button onClick={onReturn}>Menu</button>
    </div>
  );
};

export default DurationExercise;
