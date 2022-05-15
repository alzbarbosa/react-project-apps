import React, {useEffect, useState} from "react";

import CardText from "../components/CardText";
import FavoriteText from "../components/FavoriteText";
import ImageDisplay from "../components/ImageDisplay";

import {SiProbot} from "react-icons/si"

function Advisor() {
const [module, setModule] = useState("")  
const [advice, setAdvice] = useState({})
const [activity, setActivity] = useState({})
const [image, setImage] = useState({})
const [favoriteAdvices, setFavoriteAdvices] = useState([])


function createAdvice() {
  fetch("https://api.adviceslip.com/advice")
 .then(res => res.json()) 
 .then(data => setAdvice( ()=> {
   return {text: data.slip.advice, id: data.slip.id, isFavorite: false, type:"advice"}})) 
}

function createActivity() {
  fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => setActivity(()=> {
      return {text: data.activity, isFavorite: false, id: data.key, type:"activity", category:data.type}
    }))
}

function createImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => setImage(()=> {
      return {src: data.message, isFavorite: false}
    }))
}

function userChoice(choice) {
setModule(choice)
}


useEffect(()=> {
if(module === "advice") {
createAdvice()
} else if(module === "activity") {
createActivity()
}
else if(module === "photo") {
createImage()
}

},[module]) 

useEffect(() => {
  const checkId = favoriteAdvices.some(obj => obj.id === advice.id)
  if (advice.isFavorite && !checkId) {
      setFavoriteAdvices(prev => ([...prev, advice]))
  } else if (checkId && advice.isFavorite) {
    (console.log("already exist"))}

},[advice])

useEffect(() => {
  const checkId = favoriteAdvices.some(obj => obj.id === activity.id)
  if (activity.isFavorite && !checkId) {
      setFavoriteAdvices(prev => ([...prev, activity]))
  } else if (checkId && activity.isFavorite) {
    (console.log("already exist"))}

},[activity])

function handleFavorite() {
  if(module === "advice") {
  setAdvice(prevAdvice => ({...prevAdvice, isFavorite: !prevAdvice.isFavorite}))
} else if(module === "activity") {
  setActivity(prevAct => ({...prevAct, isFavorite: !prevAct.isFavorite}))
}
}

function removeFavorite(id) {
  const newFavorites = favoriteAdvices.filter(item => {
    return item.id !== id
  })
  setFavoriteAdvices(newFavorites)
}


const advices = favoriteAdvices.map(obj => {
  return <FavoriteText
  text={obj.text} 
  id={obj.id}
  key={obj.id}
  title={`${obj.type} # `}
  type={obj.type}
  category={obj.category}
  onClick={removeFavorite}
  />
})

const adviceGiven = (
<div className="container-return">
      <h1 className="title">Advice</h1>
      <CardText text={advice.text} 
                id={advice.id} 
                onClick={handleFavorite}
                title={`advice # ${advice.id}`} 
                isFavorite={advice.isFavorite} 
                createAdvice={createAdvice}/> 
    </div>
)

const activityGiven = (
<div className="container-return">
      <h1 className="title">Activity</h1>
      <CardText text={activity.text} 
                id={activity.id}
                onClick={handleFavorite} 
                title={`You should ...`}
                isFavorite={activity.isFavorite}
                createAdvice={createActivity} 
                />
    </div>
)

const imageGiven = (
  <div className="container-return-image">
      <h1 className="title">Here a picture!!</h1>
      <ImageDisplay src={image.src} />
      <button className="btn-image-dog" onClick={createImage}>Another One!</button>
  </div>
)

const favoriteClass = module === "photo"? "top-add" : ""

  return (
    <div className="advisor-container">
      <div className="advisor-container-question">
        <h1 className="advisor-title">Robot Advisor</h1>
        <SiProbot className="rotating" size={48}/>
        <p className="advisor-question">How Can I help you today?</p>
        <div className="btn-choice-container">
        <button className="btn-choice" onClick={()=> userChoice("advice")}>I need an advice</button>
        <button className="btn-choice" onClick={()=> userChoice("activity")}>What activity should I do today?</button>
        <button className="btn-choice" onClick={()=> userChoice("photo")}>Show me a dog picture to cheer me up!</button>
        </div>
      </div>
      {module === "advice" && adviceGiven}
      {module === "activity" && activityGiven}
      {module === "photo" && imageGiven}
    <section className="container-favorites">
      <h2 className={`title-favorites ${favoriteClass}`}>Favorite Advices/Activities</h2>
      {advices}
      </section>
</div>
  );
}

export default Advisor;

