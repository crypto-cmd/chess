import { useState, useEffect } from "react";
type TimeArray = [hours: number, minutes: number, seconds: number] | [minutes: number, seconds: number];
export type useClockReturnType = {
  getTime: () => TimeArray,
  start: () => void,
  stop: () => void,
  reset: () => void,
  resume: () => void,
  isOutOfTime:  boolean,
}
/** A custom react hook as arrow function  which countdown the time from instatiation given parameter startTime. The time can be paused and resumed at anytime. The timer uses the setTimeout function */
export const useClock = (startSeconds: number = 60):useClockReturnType => {
  const [time, setTime] = useState(startSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isOutOfTime, setIsOutOfTime] = useState(false);
  useEffect(() => {
    let interval: number;
    if (isRunning && !isOutOfTime) {
      interval = window.setInterval(() => {
        setTime(t => t- 1);
      }, 1000);
    }
    if (time <= 0) {
      setIsOutOfTime(true);
    }
    return () => {
      window.clearInterval(interval);
    };
  }, [isRunning, time, isOutOfTime]);

  useEffect(() => {
    if (isOutOfTime) {
      stop();
    }
  }, [isOutOfTime]);
  const getTime = (): TimeArray => {
    // Return seconds as an array of [hours, minutes, seconds] or [minutes, seconds] depending on hours. The returned array is used to display the time in the format hours:minutes:seconds
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return hours ? [hours, minutes, seconds] : [minutes, seconds];

  };
  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const resume = () => {
    setIsRunning(true);
  };
  const reset = () => {
    setTime(startSeconds);
  };

  return { getTime, start, stop, reset, resume, isOutOfTime };
}