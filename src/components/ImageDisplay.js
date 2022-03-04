import React from 'react'

export default function ImageDisplay(props) {
    return (
        <>
        <img src={props.src} className="dog-image" alt=""/>
        </>
    )
}