import React from 'react';
import './App.css';
import { ApiResponseProps, useApiGet } from './hooks/useAPIHook';
import { Header } from './components/Header';
import { CountryList } from './components//CountryList';

function App() {
  
  const dict = {"languages": {"ara": "Arabic", "som":"Somali"}}

  const data: ApiResponseProps = useApiGet('https://restcountries.com/v3.1/all')
  return (
    <section>

    <Header/>
    <div>{(!data.loading) ? <CountryList listCollection={data.data}/>: "Loading..."}
    </div>
    </section>
  );
}

export default App;
