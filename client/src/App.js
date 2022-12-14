import React from "react"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import SocialLinks from "./components/SocialLinks"
import ScrollButton from "./components/ScrollButton"

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <SocialLinks />
      <ScrollButton />
    </div>
  )
}