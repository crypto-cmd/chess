import { useEffect } from "react";
import { useClockReturnType } from "../hooks/useClock";

type Props = {
  isRunning: boolean;
  clock: useClockReturnType;
};
export const Clock = ({ isRunning, clock }: Props) => {
  useEffect(() => {
    if (isRunning) {
      clock.resume();
    } else {
      clock.stop();
    }
  }, [isRunning, clock]);
  return (
    <div className="clock">
      <div className="clock__time">{clock.getTime().join(" : ")}</div>
    </div>
  );
};
