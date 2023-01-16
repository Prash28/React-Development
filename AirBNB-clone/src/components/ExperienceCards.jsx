import React from "react"

export default function ExperienceCards (props) {
    // console.log(props)
    let badgeText
    if( props.item.openSpots===0){
        badgeText="SOLD OUT"
    }
    else if(props.item.location==="Online"){
        badgeText="ONLINE"
    }

    return (
        <div className="card">
           {badgeText==="ONLINE" && <div className="card--badge--online">{badgeText}</div>}
           {badgeText==="SOLD OUT" && <div className="card--badge--soldout">{badgeText}</div>}
            <img src={`../public/images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../images/Star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <span>From <span><b>&#8364;</b></span><b>{props.item.price}M</b> / person</span>
        </div>
    )
}