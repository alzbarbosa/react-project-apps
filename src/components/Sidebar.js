import React from "react";
import {BsArrowRightShort} from "react-icons/bs"

export default function Sidebar(props) {

    return (
        <div className="sidebar-elements">
            <div className="sidebar-flex">
            <h3 >{props.country}</h3>
            <span className="sidebar-span" onClick={()=>props.indexSelector(props.country)}><BsArrowRightShort size={20}/></span>
            </div>
            <p>{props.description}</p>
        </div>
        
    )
}