import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { CountryProvider } from "./components/CountryContext/CountryContext";
import { CountryDetail } from "./components/CountryDetail";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <Router>
      <CountryProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:name" element={<CountryDetail/>} />
        </Routes>
      </CountryProvider>
    </Router>
  );
}

export default App;
