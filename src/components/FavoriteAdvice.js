import React from "react"
import {MdOutlineFavorite} from "react-icons/md"


export default function FavoriteAdvice(props) {

    return (
        <div className="body-favorite">
        <h4 className="favorite-title">advice # {props.id}</h4>
        <p className="favorite-text">{props.text}</p>
        <MdOutlineFavorite size={30} className="fav-icon-fav"/>
        </div>
    )
}