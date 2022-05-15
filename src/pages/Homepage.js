import React from 'react'
import Project from '../components/Project'
import Footer from '../components/Footer'

import imgHero from '../images/apps.jpg'
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
                <h1 className="title-call">React Games to all type of devices</h1>
                <p className="subtitle-call">If you want to have a modern interaction with your customers, use React to create your pages and apps</p>
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