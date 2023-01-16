import React from "react"
import Navbar from "./components/Navbar.jsx"
import ExperienceSection from "./components/ExperienceSection.jsx"
import ExperienceCards from "./components/ExperienceCards.jsx"
import TopLearnMoresection from "./components/TopLearnMoresection.jsx"
import data from "./data.js"


export default function App() {

    const cards = data.map(item => {
        return(
            <ExperienceCards
            key = {item.id}
            // img={item.coverImg}
            // rating = {item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // location={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
            item={item}
            />
        )
    })
    return (
        <div className="container">
            <div id="unblurred"><TopLearnMoresection /></div>
            <Navbar />
            <ExperienceSection />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}