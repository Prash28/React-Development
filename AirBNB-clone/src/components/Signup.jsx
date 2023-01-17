import React from "react"
import { useState } from "react"

export default function Signup(props){

    return(props.trigger) ? (
        <div className="signup">
                <button className="signup-close-btn" onClick={()=>props.setTrigger(false)}>X</button>
                {props.children}
                <div class="signup-form">
                <h2>Welcome to AirBNB</h2>
                <input type="text" placeholder="Country/region" />
                <input type="text" placeholder="Phone Number" />
                <p>We’ll call or text you to confirm your number. Standard message and data rates apply. <u>Privacy Policy</u></p>
                <button class="signup-continue-button">Continue</button>
                <p>or</p>
                <button class="signup-socialmedia-login-button">
                    <img src="" />
                    <p>Continue with Facebook</p>
                </button>
                <button class="signup-socialmedia-login-button">
                    <img src="" />
                    <p>Continue with Google</p>
                </button>
                <button class="signup-socialmedia-login-button">
                    <img src="" />
                    <p>Continue with Apple</p>
                </button>
                <button class="signup-socialmedia-login-button">
                    <img src="" />
                    <p>Continue with email</p>
                </button>
                </div>
        </div>
    ) : "";
}