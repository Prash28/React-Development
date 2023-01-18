import React from "react"
import { useState } from "react"

export default function Signup(props){

    return(props.trigger) ? (
        <div className="signup" div="unblurred">
            <div className="signup-header" div="unblurred">
                <button className="signup-close-btn" onClick={()=>props.setTrigger(false)}>X</button>
                <h4>Log in or sign up</h4>
                </div>
                {/* {props.children} */}
                <div className="signup-form">
                <h2>Welcome to AirBNB</h2>
                <input type="text" placeholder="Country/region" className="signup-textbox signup-textbox-country"/>
                <input type="text" placeholder="Phone Number" className="signup-textbox signup-textbox-phone"/>
                <p className="signup-privacypolicy">We’ll call or text you to confirm your number. Standard message and data rates apply. <u>Privacy Policy</u></p>
                <button class="signup-continue-button">Continue</button>
                <p>or</p>
                <button class="social-media-button signup-socialmedia-login-button">
                <div class="button-content-flex">
                    <div><a href="#" class="fa fa-facebook"></a></div>
                    <div></div>
                    <div><p>Continue with Facebook</p></div>
                    </div>
                </button>
                <button class="social-media-button signup-socialmedia-login-button">
                    <div class="button-content-flex">
                    <div><a href="#" class="fa fa-google"></a></div>
                    <div><p>Continue with Google</p></div>
                    </div>
                </button>
                <button class="social-media-button signup-socialmedia-login-button">
                <div class="button-content-flex">
                    <div><a href="#" class="fa fa-apple"></a></div>
                    <div><p>Continue with Apple</p></div>
                    </div>
                </button>
                <button class="social-media-button signup-socialmedia-login-button">
                <div class="button-content-flex">
                    <div><a href="#"><i class="fa fa-envelope"></i></a></div>
                    <div><p>Continue with email</p></div>
                    </div>
                </button>
                </div>
        </div>
    ) : "";
}