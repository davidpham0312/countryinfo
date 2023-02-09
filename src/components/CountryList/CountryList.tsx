import React, { useState } from "react";
import { IconButton, Card, Typography } from "@mui/material";

import { CountryListProps } from "../../types";
import styles from "./countryList.module.css";
import { Search } from "../Search";
import classNames from "classnames";
import { ListHead } from "../ListHead/ListHead";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Flag } from "../Flag";

const isSearchFound = (searchString: string, targetString: string) => {
  return targetString
    .toLocaleLowerCase()
    .includes(searchString.toLocaleLowerCase());
};

export const CountryList: React.FC<CountryListProps> = ({ listCollection }) => {
  const countryList = listCollection ?? [];

  const [search, setSearch] = useState("");
  const [nameAscending, setNameAscending] = useState(true);

  const nameButtonClicked = () => {
    nameAscending ? setNameAscending(false) : setNameAscending(true);
  };

  nameAscending
    ? countryList.sort((a, b) =>
        a.name.common > b.name.common
          ? 1
          : b.name.common > a.name.common
          ? -1
          : 0
      )
    : countryList.sort((a, b) =>
        b.name.common > a.name.common
          ? 1
          : a.name.common > b.name.common
          ? -1
          : 0
      );
  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  return (
    <ul className={styles.country_list__container}>
      <Search handleChange={handleChange} />
      <ListHead
        className={styles.country_list__title}
        nameButtonClicked={nameButtonClicked}
        nameAscending={nameAscending}
      />

      {countryList.map(({ name, flag, population, region, flags }) => {
        if (isSearchFound(search, name.common)) {
          return (
            <Card key={flag} className={styles.country_list__single_country}>
              <Flag png={flags.png} alt={flags.alt} width="100px"/>
              <b className={styles.country_list__name}>{name.common}</b>
              <Typography className={styles.country_list__population}>
                {population}
              </Typography>
              <Typography className={styles.country_list__region}>{region}</Typography>
              <IconButton href={"/" + name.official}><KeyboardArrowRightIcon/></IconButton>
            </Card>
          );
        }
        return null;
      })}
    </ul>
  );
};
