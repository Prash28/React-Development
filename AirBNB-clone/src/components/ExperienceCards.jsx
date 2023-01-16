import React from "react"

export default function ExperienceCards (props) {
    // console.log(props)
    return (
        <div className="card">
            <img src={`../public/images/${props.img}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/Star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <span>From <span><b>&#8364;</b></span><b>{props.price}M</b> / person</span>
        </div>
    )
}