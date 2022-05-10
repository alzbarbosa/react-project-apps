import React from 'react'
import Advisor from './Advisor'
import NextTrip from './NextTrip'
import CountriesInfo from './CountriesInfo'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
    <h1>Home Page</h1>
    <Link to="/advisor"><p>Advisor</p></Link>
    <Link to="/next-trip"><p>Next Coutrn</p></Link>
    <Link to ="/countries-info"><p>Countries</p></Link>
    </>
  )
}

export default Homepage