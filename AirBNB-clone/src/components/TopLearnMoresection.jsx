import React from "react"
import Popup from "./popup.jsx"
import { useState } from "react"

export default function TopLearnMoresection () {
    const [buttonPopup, setButtonPopup] = useState(false)
    return (
        <div className="toplearnmoresection">
        <h3>Show total prices up front</h3>
        <button className="topsection--learnmorebutton" onClick={()=> setButtonPopup(true)}><h3>Learn more</h3></button>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <div className="pop-up-box">
                    <div>
                    <button className="popup-early-access-button">EARLY ACCESS</button>
                    <h1>One total</h1>
                    <h1>price,</h1>
                    <h1>up front</h1>
                    <br/>
                    <h4>You can now see the total price up</h4>
                    <h4>front,</h4>
                    <h4>including all fees, before taxes.</h4>
                    <br/><br/>
                    <button className="popup-try-now-button"><h4>Try it now</h4></button>
                    <br/><br/>
                    <h4><u>Maybe later</u></h4>
                    {/* <button className="maybelater-btn" onClick={()=>props.setTrigger(true)}>Maybe later</button> */}
                    </div>
                    <div class="popup-image">
                    </div>
                </div>
            </Popup>
        </div>
    )
}