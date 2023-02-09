import { ReactElement } from "react";
import { CountryFlagProps } from "../../types";
import styles from './flag.module.css'
export const Flag = ({svg, alt, width}: CountryFlagProps): ReactElement => {
  return (
    <img
      src={svg}
      alt={alt ? alt : ""}
      className={styles.flag}
      width={width}
    />
  );
};
