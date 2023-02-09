import React, { useContext } from "react";
import { CountryContext } from "../CountryContext/CountryContext";
import { CountryList } from "../CountryList";
import Pagination from "../Pagination/Pagination";



export const HomePage = () => {
  const [countries, setCountries] = useContext(CountryContext);
  return (
    <CountryList listCollection={countries} />
  );
};
