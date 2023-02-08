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
  const [countryAscending, setCountryAscending] = useState(1);
  const [populationAscending, setPopulationAscending] = useState(0);

  function nameButtonClicked() {
    setPopulationAscending(0);
    countryAscending === 0 || countryAscending === -1
      ? setCountryAscending(1)
      : setCountryAscending(-1);
  }

  function populationButtonClicked() {
    setCountryAscending(0);
    populationAscending === 0 || populationAscending === -1
      ? setPopulationAscending(1)
      : setPopulationAscending(-1);
  }

  if (countryAscending === 1)
    countryList.sort((a, b) =>
      a.name.common > b.name.common ? 1 : b.name.common > a.name.common ? -1 : 0
    );
  else if (countryAscending === -1)
    countryList.sort((a, b) =>
      b.name.common > a.name.common ? 1 : a.name.common > b.name.common ? -1 : 0
    );

    if (populationAscending === 1)
    countryList.sort((a, b) =>
      a.population > b.population ? 1 : b.population > a.population ? -1 : 0
    );
  else if (populationAscending === -1)
    countryList.sort((a, b) =>
      b.population > a.population ? 1 : a.population > b.population ? -1 : 0
    );
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
        <button
          onClick={nameButtonClicked}
          className={styles.country_list__name}
        >
          Name
        </button>
        <button className={styles.country_list__region}>Region</button>
        <button onClick={populationButtonClicked} className={styles.country_list__population}>Population</button>
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
