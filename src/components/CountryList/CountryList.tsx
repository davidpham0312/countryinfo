import React, { useState } from "react";
import { CountryListProps } from "../../types";
import styles from "./countryList.module.css";

function isCharsIncluded(searchString: string, targetString: string) {
  return searchString
    .toLocaleLowerCase()
    .split("")
    .every((char) => targetString.toLocaleLowerCase().includes(char));
}

export const CountryList: React.FC<CountryListProps> = ({ listCollection }) => {
  const countryList = listCollection ?? [];
  const [search, setSearch] = useState("");
  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };
  return (
    <ul className={styles.country_list__container}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search by country name..."
        className={styles.country_list__search}
      />
      <li className={styles.country_list__title}>
        <div className={styles.country_list__flag}>Flag</div>
        <div className={styles.country_list__name}>Name</div>
        <div className={styles.country_list__region}>Region</div>
        <div className={styles.country_list__population}>Population</div>
      </li>
      {countryList.map(({ name, flag, population, region, flags }) => {
        if (isCharsIncluded(search, name.common)) {
          return (
            <li key={flag} className={styles.country_list__single_country}>
              <img
                src={flags.png}
                alt={flags.alt ? flags.alt : ""}
                className={styles.country_list__flag}
              />
              <b className={styles.country_list__name}>{name.common}</b>
              <div className={styles.country_list__region}>{region}</div>
              <div className={styles.country_list__population}>
                {population}
              </div>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};
