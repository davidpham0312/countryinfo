import { Typography } from "@mui/material";
import { ReactElement, useContext } from "react";
import { useParams } from "react-router-dom";
import { CountryContext } from "../CountryContext/CountryContext";
import { Flag } from "../Flag";

export const CountryDetail = (): ReactElement => {
  const [countries, setCountries] = useContext(CountryContext);
  const { name } = useParams();
  const countryDetail = countries.find(
    (country: { name: { official: string | undefined } }) =>
      country.name.official === name
  );
  console.log(countryDetail);
  if (countryDetail) {
    return (
      <div>
        <Flag
          png={countryDetail.flags.svg}
          alt={countryDetail.flags.alt ? countryDetail.flags.alt : ""}
          width="1000px"
        />
        <Typography variant="h3">{countryDetail.name.official}</Typography>
        <Typography variant="h6">{countryDetail.capital[0]}</Typography>
        <Typography>
          The country belongs to {countryDetail.region} region and
          {countryDetail.subregion} sub-region. Located at{" "}
          {countryDetail.latlng[0]}N and {countryDetail.latlng[1]}W, this
          country has population of {countryDetail.population} and, according to
          the CIA World Factbook.
        </Typography>
      </div>
    );
  }
  return <div>Country not found</div>;
};
