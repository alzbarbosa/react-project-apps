import React from "react";


import {MdOutlineFavoriteBorder, MdOutlineFavorite} from "react-icons/md"

export default function CardText(props) {
    return (
        <div className="text-container">
            <div className="text-top">
            <h4 className="text-title">{props.title}</h4>
            <p className="text">{props.text}</p>
            </div>
            <div className="text-bottom">
            <hr className="text-line-break"/>    
            <span className="favorite-icon" onClick={props.onClick}>{props.isFavorite? <MdOutlineFavorite size={24} /> : <MdOutlineFavoriteBorder size={24} />}</span> 
            <button className="next-btn" onClick={props.createAdvice}>Next Advice</button>
            </div>
        </div>
    )
}