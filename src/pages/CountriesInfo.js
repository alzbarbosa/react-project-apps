import React from "react";
import Countries from "../components/Countries";
import Searchbar from "../components/Searchbar";
import Header from "../components/Header"

export default function CountriesInfo() {

    return (
        <main className="countriesInfo-main-container">
          <Header />
          <Searchbar />
          <Countries />
        </main >
    )
}

