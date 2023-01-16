import React from "react"
import Navbar from "./components/Navbar.jsx"
import ImageBannerSection from "./components/ImageBannerSection.jsx"
import ExperienceSection from "./components/ExperienceSection.jsx"
import ExperienceCards from "./components/ExperienceCards.jsx"
import data from "./data.js"

export default function App() {

    const cards = data.map(item => {
        return(
            <ExperienceCards
            img={item.coverImg}
            rating = {item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            <ImageBannerSection />
            <ExperienceSection />
            <section class="cards-list">
                {cards}
            </section>
        </div>
    )
}