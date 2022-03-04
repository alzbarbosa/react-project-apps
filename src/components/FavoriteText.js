import React from "react"
import {MdOutlineFavorite} from "react-icons/md"


export default function FavoriteText(props) {

    return (
        <div className="body-favorite">
        <h4 className="favorite-title">{props.title} {props.type === "advice"? props.id : props.category}</h4>
        <p className="favorite-text">{props.text}</p>
        <MdOutlineFavorite size={24} className="fav-icon-fav" onClick={() => props.onClick(props.id)}/>
        </div>
    )
}