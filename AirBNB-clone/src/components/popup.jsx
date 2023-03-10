import React from "react"
import { useState } from "react"

export default function Popup(props){

    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)}>X</button>
                {props.children}
            </div>
        </div>
    ) : "";
}