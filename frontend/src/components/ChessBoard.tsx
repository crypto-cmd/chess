import { useEffect, useState } from "react";
import {
  AllBoardFileCoordinates,
  AllBoardRankCoordinates,
  BoardCoordinate,
  BoardFileCoordinate,
  BoardRankCoordinate,
  getBoardFileasIndex,
  getSquareName,
} from "./BoardCoordinate";
import { Square } from "./Square";
import styles from "../scss/ChessBoard.module.scss";
import { Wrapper } from "./Wrapper";
import { PlayingDataContext } from "./PlayingDataContext";


export const ChessBoard = () => {
  const getSquares = (isBlackOnTop: boolean) => {
    console.log("Render squares")
    const squares = getSquaresInCorrectOrder(isBlackOnTop);
    return squares.map((square) => (
      <Square
        boardCoordinate={square}
        key={getSquareName(square.file, square.rank)}
      />
    ));
  };
  const getSquaresInCorrectOrder = (isBlackOnTop: boolean) => {
    const squares: BoardCoordinate[] = [];
    const ranks: BoardRankCoordinate[] = isBlackOnTop
      ? [...AllBoardRankCoordinates].reverse()
      : [...AllBoardRankCoordinates];

    const files: BoardFileCoordinate[] = isBlackOnTop
      ? [...AllBoardFileCoordinates]
      : [...AllBoardFileCoordinates].reverse();

    for (const rank of ranks) {
      for (const file of files) {
        squares.push({ file, rank });
      }
    }
    return squares;
  };
  return (
    <PlayingDataContext.Consumer>
      {({ isBlackOnTop }) => {
        return (
          <Wrapper className={styles.chessboard}>
            {getSquares(!!isBlackOnTop)}
          </Wrapper>
        );
      }}
    </PlayingDataContext.Consumer>
  );
};
