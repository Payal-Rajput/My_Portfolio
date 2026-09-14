import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact'
import { Experience } from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'

function App() {
  return (
      <div>
      <Navbar />

      <main>
        <Hero />
        {/* <TechMarquee/> */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
