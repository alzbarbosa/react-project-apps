import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import {AiOutlineArrowLeft} from "react-icons/ai"

const CountryDetails = () => {
    const countryName = useParams();
    const {data: country, isLoading} = useFetch(`https://restcountries.com/v2/name/${countryName.id}`);

  if (isLoading) {
    return <div className='loading'></div>
  }

  const {flag,name,population,region,capital,subregion, topLevelDomain, currencies, languages, callingCodes, nativeName} = country[0]
  return (
      <div className="country-specific-details" key={flag}>
          <div >
                            <Link to='/countries-info'>
                                <div className='btn-back-container'>
                                        <button className="button-back"><AiOutlineArrowLeft className="margin-right"/>Back</button>
                                        </div>
                                        </Link>
            </div>
            <div className="country-details-container">
                            <div className="flag-container">
                                <img src={flag} alt={name} className="country-flag-image"/>
                                </div>

                                <div className="country-details-info">
                                    
                                    <h2 className="country-details-name">{name}</h2>
                                    <div className="country-details-left">
                                    <p className="country-details-item">Native Name:<span className="light-color"> {nativeName}</span></p>
                                    <p className="country-details-item">Population:<span className="light-color"> {population}</span></p>
                                    <p className="country-details-item">Region:<span className="light-color"> {region}</span></p>
                                    <p className="country-details-item">Sub Region:<span className="light-color"> {subregion}</span></p>
                                    <p className="country-details-item">Capital:<span className="light-color"> {capital}</span></p>
                                    </div>
                                    <div className="country-details-right">
                                    <p className="country-details-item">Top Level Domain:<span className="light-color"> {topLevelDomain[0]}</span></p>
                                    <p className="country-details-item">Currencies: {currencies.map((currency)=> {
                                        return <span className="light-color" key={currency.name}>{currency.name}</span>
                                    })}</p>
                                    <p className="country-details-item">Languages: {languages.map((language)=> {
                                        return <span className="light-color" key={language.name}>{language.name}</span>
                                    })}</p>
                                    <p className="country-details-item">Calling Codes: {callingCodes.map((code)=> {
                                        return <span className="light-color" key={code}>{code}</span>
                                    })}</p>
                                    </div>
                                </div>

                            </div>
                            
        </div>
  )
}

export default CountryDetails

