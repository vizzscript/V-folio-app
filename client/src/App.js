import React from "react"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import SocialLinks from "./components/SocialLinks"

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialLinks />
    </div>
  )
}