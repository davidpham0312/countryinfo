import React from "react";
import { CountryListProps } from "../../types";
import styles from "./countryList.module.css";

export const CountryList: React.FC<CountryListProps> = ({ listCollection }) => {
  const countryList = listCollection ?? [];
  return (
    <ul>
      {countryList.map(({ name, flag, population, region, flags}) => (
        <li key={flag} className = {styles.country_list__single_country}>
          <img src={flags.png} alt={flags.alt? flags.alt : ""} className={styles.country_list__flag}/>
          <b className={styles.country_list__name}>{name.common}</b>
          <div className={styles.country_list__region}>{region}</div>
          <div className={styles.country_list__population}>{population}</div>
        </li>
      ))}
    </ul>
  );
};
