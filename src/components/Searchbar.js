import React, {useContext, useRef, useEffect} from "react"
import { DataContext } from "../context/DataContext"
import {BiSearch} from "react-icons/bi"

export default function Searchbar() {
  const { setSearchName } = useContext(DataContext)
  const searchValue = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    setSearchName(`name/${searchValue.current.value}`)
  }

  function handleSelect(e) {
    e.preventDefault()
    if(e.target.value === "all") {
      setSearchName(e.target.value)
    } else {
      setSearchName(`region/${e.target.value}`)
    }
    
  }

    return (
        <div className="searchbar-container"> 
      <section>
        <form className='search-form' onSubmit={handleSubmit}>
          <input className='input-search'
            type='text'
            name='name'
            id='name'
            placeholder="search a country"
            ref={searchValue}
          />
        <button className="btn-form" type="submit"><BiSearch/></button>
      </form>
    </section>

      <section>
        <form className='select-form'>
           <select id="region" name="region" onChange={handleSelect} className='select-search'>
                    <option value="all" defaultValue>All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                  </select>
      </form>
    </section>
   
        
        </div> 
    )
}
