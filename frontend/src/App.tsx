import { useState } from "react";
import { ChessBoard } from "./components/ChessBoard";
import { Player } from "./components/Player";
import { PlayingDataContext } from "./components/PlayingDataContext";
import { Wrapper } from "./components/Wrapper";
import styles from "./scss/App.module.scss";
export const App = () => {
  const [isBlackOnTop, setIsBlackOnTop] = useState(true);
  const [isBlackTurn, setIsBlackTurn] = useState(false);
  return (
    <Wrapper className={styles.App}>
      <PlayingDataContext.Provider
        value={{ isBlackOnTop, setIsBlackOnTop, isBlackTurn, setIsBlackTurn }}>
        <Wrapper className={styles.playArea}>
          <Player isBlackPlayer={isBlackOnTop} />
          <ChessBoard />
          <Player isBlackPlayer={!isBlackOnTop} />
        </Wrapper>
      </PlayingDataContext.Provider>
    </Wrapper>
  );
};
