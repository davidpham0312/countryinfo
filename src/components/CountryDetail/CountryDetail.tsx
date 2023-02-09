import { Typography } from "@mui/material";
import { ReactElement, useContext } from "react";
import { useParams } from "react-router-dom";
import { CountryContext } from "../CountryContext/CountryContext";
import { Flag } from "../Flag";
import styles from "./countryDetail.module.css";
export const CountryDetail = (): ReactElement => {
  const [countries] = useContext(CountryContext);
  const { name } = useParams();
  const countryDetail = countries.find(
    (country: { name: { official: string | undefined } }) =>
      country.name.official === name
  );
  console.log(countryDetail);
  if (countryDetail) {
    return (
      <div className={styles.country_detail__container}>
        <Typography variant="h3">{countryDetail.name.official}</Typography>
        <Typography variant="h6">{countryDetail.capital[0]}</Typography>
        <Flag
          svg={countryDetail.flags.svg}
          alt={countryDetail.flags.alt ? countryDetail.flags.alt : ""}
          width="100%"
        />
        <Typography>
          The country belongs to {countryDetail.region} region and 
          {countryDetail.subregion} sub-region. Located at{" "}
          {Math.round(countryDetail.latlng[0])}°N and {Math.round(countryDetail.latlng[0])}°W, this
          country has population of {countryDetail.population} and it has
          {!countryDetail.independent ? "not" : ""} gained independent,
          according to the CIA World Factbook.
        </Typography>
      </div>
    );
  }
  return <div>Country not found</div>;
};
