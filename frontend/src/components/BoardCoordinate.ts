export const AllBoardRankCoordinates = [1, 2, 3, 4, 5, 6, 7, 8] as const;
export const AllBoardFileCoordinates = ["A", "B", "C", "D", "E", "F", "G", "H"] as const;

export type BoardRankCoordinate = typeof AllBoardRankCoordinates[number];
export type BoardFileCoordinate = typeof AllBoardFileCoordinates[number];

export interface BoardCoordinate {
  file: BoardFileCoordinate;
  rank: BoardRankCoordinate;
}

export const getSquareName = (file: BoardFileCoordinate, rank: BoardRankCoordinate) =>{
  return file + rank;
}
export const getBoardFileasIndex: (file: BoardFileCoordinate) => number = (file) => {
  const firstFileCharCode = AllBoardFileCoordinates[0].charCodeAt(0);
  return file.charCodeAt(0) - firstFileCharCode;
}
export const getBoardRankasIndex: (rank: BoardRankCoordinate) => number = (rank) => {
  return rank - 1;
};


