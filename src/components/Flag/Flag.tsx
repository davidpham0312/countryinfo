import { ReactElement } from "react";
import { CountryFlagProps } from "../../types";
import styles from './flag.module.css'
export const Flag = ({png, alt, width}: CountryFlagProps): ReactElement => {
  return (
    <img
      src={png}
      alt={alt ? alt : ""}
      className={styles.flag}
      width={width}
    />
  );
};
