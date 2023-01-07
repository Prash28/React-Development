import React from "react"

export default function Info() {
    return (
        <div class="d-flex flex-column justify-content-start">
            <div class="info-image" alt="info-image"></div>
            <div class="Info-content">
                <h1>Lionel Messi</h1>
                <p>G.O.A.T</p>
                <small>www.lionelmessi.com</small>
                <div class="d-flex flex-row justify-content-start">
                    <button class="btn btn-primary">Email</button>
                    <button class="btn btn-primary">Linkedin</button>
                </div>
            </div>
        </div>
    )
}