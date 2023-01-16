import React from "react"
import Popup from "./popup.jsx"
import { useState } from "react"

export default function TopLearnMoresection () {
    const [buttonPopup, setButtonPopup] = useState(false)
    return (
        <div className="toplearnmoresection">
        <p>Show total prices up front</p>
        <span className=""><button className="topsection--learnmore" onClick={()=> setButtonPopup(true)}><span class="">Learn more</span></button>
        </span>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My popup</h3>
                <p>This is my button triggered popup</p>
            </Popup>
        </div>
    )
}