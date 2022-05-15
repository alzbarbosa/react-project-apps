import {useContext } from 'react';
import {  Link } from 'react-router-dom'
import { DataContext } from "../context/DataContext"
import Loading from './Loading';
import Error from './Error';


const Countries = () => {

    
const { countries, isLoading, error }  = useContext(DataContext)

 if (isLoading) {
    return <Loading />
  }
if (error) {
    return <Error />
}

    return ( 
            <div className="countries-container">
                {countries.map(country => {
                        const {flag,name,population,region,capital} = country;
                        return(
                            <Link to={`/countries/${name}`} key={name} className='country'>
                            <div className="country-container" >
                                <img src={flag} alt={name} className="flag-image"/>
                                <div className="country-info">
                                    <h2 className="country-name">{name}</h2>
                                    <p className="country-pop">Population:<span className="light-color"> {population}</span></p>
                                    <p className="country-region">Region:<span className="light-color"> {region}</span></p>
                                    <p className="country-capital">Capital:<span className="light-color"> {capital}</span></p>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                  }
            </div>
    );
}
 
export default Countries;
