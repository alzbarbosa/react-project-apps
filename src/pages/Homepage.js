import React from 'react'
import Project from '../components/Project'
import Footer from '../components/Footer'

import imgHero from '../images/desk-computer.jpg'
import imgWorld from '../images/globe.jpg'
import imgTrip from '../images/trip.jpg'
import imgRobot from '../images/robot.jpg'

const Homepage = () => {
  return (
    <>
    <div className='container-homepage'>
            <section className="homepage-body">
            <img className="img-hero" src={imgHero} />
            </section>
            <section className="title-hero">
                <h1 className="title-call">Apps designed for all type of devices</h1>
                <p className="subtitle-call">Modern interaction with your customers is the key to success</p>
            </section>
            <div className="container-supreme">
             <Project name="React Robot Advisor Page"
             text="Do you need inspiration? Ask the robot for advice  "
             link="/advisor"
             image={imgRobot}
             />
             <Project name="React Next Trip Page"
             text="Look for your next trip in 2022! "
             image={imgTrip}
             link="/next-trip"/>
             <Project name="React Countries Info Page"
             text="Have the information of all countries with just one click. "
             image={imgWorld}
             link="/countries-info"/>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Homepage