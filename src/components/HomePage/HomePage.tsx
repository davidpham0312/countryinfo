import React, { useContext } from "react";
import { CountryContext } from "../CountryContext/CountryContext";
import { CountryList } from "../CountryList";

export const HomePage = () => {
  const [countries, setCountries] = useContext(CountryContext);
  return (
    <CountryList listCollection={countries} />
  );
};
