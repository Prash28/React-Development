import React from "react"
import Navbar from "./components/Navbar.jsx"
import MainContent from "./components/MainContent.jsx"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <MainContent />
        </div>
    )
}