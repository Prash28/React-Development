import React from "react"
import Navbar from "./components/Navbar.jsx"
import ImageBannerSection from "./components/ImageBannerSection.jsx"
import ExperienceSection from "./components/ExperienceSection.jsx"
import ExperienceCards from "./components/ExperienceCards.jsx"
export default function App() {
    return (
        <div className="container">
            <Navbar />
            <ImageBannerSection />
            <ExperienceSection />
            <div className="Experience-card-row d-flex flex-row justify-content-start">
                
            <ExperienceCards 
                img = "messi.jpg"
                rating = "5.0"
                reviewCount = {78}
                country = "ARG"
                title = "G.O.A.T"
                price = {110}
            />
            <ExperienceCards 
                img = "messi.jpg"
                rating = "5.0"
                reviewCount = {78}
                country = "ARG"
                title = "G.O.A.T"
                price = {110}
            />
            </div>
        </div>
    )
}