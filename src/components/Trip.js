import React from "react";



export default function Trip(props) {
    return (
        <article className="container-trip">
        <section className="trip-header">
        <h1 className="trip-title">{props.country}</h1>
        <p className="trip-subtitle">{props.description}</p>
        <img className="trip-main-img" src={props.imageHero} alt={props.country} />
        </section>

        <div className="trip-main-container">
        <section className="trip-section">
            <div className="trip-topic">
            <h3>{props.titleOne}</h3>
            <p>{props.textOne}</p>
            </div>
            <div className="trip-topic">
            <h3>{props.titleTwo}</h3>
            <p>{props.textTwo}</p>
            </div>
        </section>

        <section className="trip-section">
            <div className="trip-topic">
            <h3>{props.titleThree}</h3>
            <p>{props.textThree}</p>
            </div> 
            <div className="trip-topic">
            <h3>{props.titleFour}</h3>
            <p>{props.textFour}</p>
            </div>
        </section>
           </div>

        </article>
    )
}


/*
<img className="trip-main-img" src="./elephants.jpg" alt="elephants" />
*/