import { createContext } from "react";

type PlayingDataContextType = {
  isBlackTurn?: boolean;
  setIsBlackTurn?: React.Dispatch<React.SetStateAction<boolean>>;
  isBlackOnTop?: boolean;
  setIsBlackOnTop?: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PlayingDataContext = createContext<PlayingDataContextType>({});
