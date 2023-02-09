import React, { useState } from "react";
import { IconButton, Typography, List, Pagination } from "@mui/material";

import { CountryListProps, CountryProps } from "../../types";
import styles from "./countryList.module.css";
import { Search } from "../Search";
import { ListHead } from "../ListHead/ListHead";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Flag } from "../Flag";


const searchInArray = (searchString: string, array: CountryProps[]) => {
  return array.filter((mem) => {
    return mem.name.common
      .toLocaleLowerCase()
      .includes(searchString.toLocaleLowerCase());
  });
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
  const handleSearchChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  const itemsPerPage = 5;
  const [page, setPage] = React.useState(1);
  const noOfPages = countryList.length / itemsPerPage;
  const handlePageChange = (event: any, value: any) => {
    setPage(value);
  };
  return (
    <>
      <List className={styles.country_list__container}>
        <Search handleChange={handleSearchChange} />
        <ListHead
          nameButtonClicked={nameButtonClicked}
          nameAscending={nameAscending}
        />
        {searchInArray(search, countryList)
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(({ name, flag, population, region, flags }) => {
            return (
              <div key={flag} className={styles.country_list__single_country}>
                <Flag svg={flags.svg} alt={flags.alt} width="50%" />
                <Typography className={styles.country_list__name}>{name.common}</Typography>
                <Typography className={styles.country_list__population}>
                  {population}
                </Typography>
                <Typography className={styles.country_list__region}>
                  {region}
                </Typography>
                <IconButton
                  color="primary"
                  href={"/" + name.official}
                  className={styles.country_list__country_button}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              </div>
            );
          })}
      </List>
      <Pagination
        count={noOfPages}
        page={page}
        onChange={handlePageChange}
        defaultPage={1}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
      />
    </>
  );
};
