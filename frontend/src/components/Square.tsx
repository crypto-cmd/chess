import { BoardCoordinate, getBoardFileasIndex, getBoardRankasIndex } from "./BoardCoordinate"
import styles from "../scss/Square.module.scss"
import clsx from "clsx";
export type Props = {
  boardCoordinate: BoardCoordinate;
}

export const Square = ({ boardCoordinate: {file, rank}}: Props) => {
  const isLightTile = (getBoardFileasIndex(file) + getBoardRankasIndex(rank)) %2 !== 0;
  return <div className={clsx(styles.square, isLightTile ? styles.light : styles.dark)}>{file}{rank}</div>
}