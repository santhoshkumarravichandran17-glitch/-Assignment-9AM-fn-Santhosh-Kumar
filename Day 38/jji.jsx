import { useEffect, useState } from "react";

function CountdownTimer() {
  const [time, setTime] = useState(90); // total seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTime(90);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default CountdownTimer;
