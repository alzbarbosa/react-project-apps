import React from 'react';
import Trip from '../components/Trip';
import data from '../components/dataTrips';
import Sidebar from '../components/Sidebar';

const allCountries = [...new Set(data.map(country => country.country))]

export default function NextTrip() {
  const [index, setIndex] = React.useState(0)

function indexSelector(country) {
const newIndex = allCountries.indexOf(country)
setIndex(newIndex)
}
  

  const elements = data.map(trip => {
    return (
      <Trip 
      key={trip.id}
      country={trip.country}
      description={trip.description}
      titleOne={trip.infoOne.title}
      textOne={trip.infoOne.text}
      titleTwo={trip.infoTwo.title}
      textTwo={trip.infoTwo.text}
      titleThree={trip.infoThree.title}
      textThree={trip.infoThree.text}
      titleFour={trip.infoFour.title}
      textFour={trip.infoFour.text}
      imageHero={trip.imageOne}
      />
    )
  })

const sideElements = data.map(trip => {
  return (
    <Sidebar 
    key={trip.id}
    country={trip.country}
    description={trip.description}
    indexSelector={indexSelector}

    />
  )
})

  return (
    <div className='trip-container-body'>
      <div className='container-main'>
        <div className="container-sidebar">
          <h3 className='sidebar-title'>TOP TRIPS 2022</h3>
        {sideElements}
        </div>
      {elements[index]}
        
      </div>
    </div>
  );
}