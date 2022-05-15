import React from "react"

export default function CountryInfo(props) {
    return (
        <>
        <article className='container-country-info'>
            <img src={props.image} alt={props.country}/>
            <section>
                <h4>{props.country}</h4>
                <p>Population:{props.pop}</p>
                <p>Region:{props.region}</p>
                <p>Capital:{props.capital}</p>
            </section>
        </article>
        </>
    )
}