import { Wrapper } from "./Wrapper";
import styles from "../scss/PlayerImage.module.scss";
// A React Component to render a player image or grey box
type Props = {
  image?: string;
}

export const PlayerImage = ({image}: Props) => {
  return (
    <Wrapper className={styles.PlayerImage}>
      {image && <img src={image} alt="player" />}
    </Wrapper>
  );
}