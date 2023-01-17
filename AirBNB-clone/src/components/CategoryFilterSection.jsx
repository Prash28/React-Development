import React from "react"

export default function CategoryFilterSection (props) {

    return (
        // <div class="category-section-container">
        <div class="category-list">
            <img src={`${props.imgsrc}`} className="category-image"/>
            <p>{`${props.title}`}</p>
        </div>
        // </div>
    )
}