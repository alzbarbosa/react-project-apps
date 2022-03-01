import React, {useEffect, useState} from "react";

import CardMessage from "../components/CardMessage";
import FavoriteAdvice from "../components/FavoriteAdvice";

import {SiProbot} from "react-icons/si"




function Advisor() {
const [advice, setAdvice] = useState({})
const [activity, setActivity] = useState({})
const [favoriteAdvices, setFavoriteAdvices] = useState([])


function createAdvice() {
  fetch("https://api.adviceslip.com/advice")
 .then(res => res.json()) 
 .then(data => setAdvice( ()=> {
   return {text: data.slip.advice, id: data.slip.id}})) 
}

function createActivity() {
  fetch("https://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => setActivity(()=> {
      return {activity: data.activity, participants: data.participants, id: data.key}
    }))
}

useEffect(()=> {

createAdvice()

},[]) 


/*React.useEffect(() => {
const slip_id = 11

  fetch(`https://api.adviceslip.com/advice/${slip_id}`)
  .then(res => res.json())
  .then(data => setAdvice( () => {
    return {text: data.slip.advice, id: data.slip.id, isFavorite: false}
  }))
}, [])
*/

useEffect(() => {
  const checkId = favoriteAdvices.some(obj => obj.id === advice.id)
  if (advice.isFavorite && !checkId) {
      setFavoriteAdvices(prev => ([...prev, advice]))
  } else if (checkId && advice.isFavorite) {
    (console.log("already exist"))}

},[advice.isFavorite])

console.log(favoriteAdvices)

function handleFavorite() {
  setAdvice(prevAdvice => ({...prevAdvice, isFavorite: !prevAdvice.isFavorite}))
}



const advices = favoriteAdvices.map(obj => {
  return <FavoriteAdvice 
  text={obj.text} 
  id={obj.id}
  key={obj.id}
  />
})

  return (
    <div>
      <div>
        <h2>Robot Advisor</h2>
        <SiProbot size={48}/>
        <p>How Can I help you today?</p>
        <button></button>
        <button></button>
        <button></button>
      </div>
    <div className="advisor-container">
      <h1 className="title">Advisor</h1>
      <CardMessage text={advice.text} id={advice.id} onClick={handleFavorite} isFavorite={advice.isFavorite} createAdvice={createAdvice}/>
      <section className="container-favorites">
      <h2 className="title-favorites">Top 10 Favorite Advices</h2>
      {advices}
      </section>
      
    </div>
</div>
  );
}

export default Advisor;
