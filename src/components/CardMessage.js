import React from "react";

import {MdOutlineFavoriteBorder, MdOutlineFavorite} from "react-icons/md"

export default function CardMessage(props) {

    return (
        <div className="advice-container">
            <div className="advice-top">
            <h4 className="advice-title">advice # {props.id}</h4>
            <p className="advice-text">{props.text}</p>
            </div>
            <div className="advice-bottom">
            <hr className="advice-line-break"/>    
            <span className="favorite-icon" onClick={props.onClick}>{props.isFavorite? <MdOutlineFavorite size={24} /> : <MdOutlineFavoriteBorder size={24} />}</span> 
            <button className="btn-advice" onClick={props.createAdvice}>Next Advice</button>
            </div>
        </div>
    )
}