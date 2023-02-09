import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export const CountryContext = createContext<any>({} as any)
export const CountryProvider = ({ children }: any) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(response.data);
    };
    getCountries();
  }, []);
  return (
    <CountryContext.Provider value={[countries, setCountries]}>
      {children}
    </CountryContext.Provider>
  );
};
