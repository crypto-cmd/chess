import { ReactNode, useEffect, useState } from "react";
import { useClock } from "../hooks/useClock";
import { Clock } from "./Clock";
import { PieceCounter } from "./PieceCounter";
import { PlayerImage } from "./PlayerImage";
import { Wrapper } from "./Wrapper";

import styles from "../scss/Player.module.scss";
import { PlayingDataContext } from "./PlayingDataContext";
type Props = {
  isBlackPlayer: boolean;
};
export const Player = ({ isBlackPlayer }: Props) => {
  const clock = useClock(5);
  useEffect(() => {
    clock.start();
  }, []);
  return (
    <PlayingDataContext.Consumer>
      {({ isBlackTurn }) => (
        <Wrapper className={styles.Player}>
          <PlayerImage></PlayerImage>
          <Wrapper className={styles.gameInfo}>
            <Clock
              clock={clock}
              isRunning={isBlackPlayer === isBlackTurn}></Clock>
            <PieceCounter></PieceCounter>
          </Wrapper>
        </Wrapper>
      )}
    </PlayingDataContext.Consumer>
  );
};
