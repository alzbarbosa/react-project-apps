import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai"
import { DataContext } from "../context/DataContext"


export default function Error() {
  const { setSearchName } = useContext(DataContext)
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>No results were found for this search</h1>
        <Link to='/countries-info'>
                                <div className='btn-back-container'>
                                        <button className="button-back" onClick={()=> setSearchName("all")}><AiOutlineArrowLeft className="margin-right"/>Back</button>
                                        </div>
                                        </Link>
      </div>
    </section>
  );
}
