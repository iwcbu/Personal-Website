import { useEffect, useState } from 'react';
import './App.css';

import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import ProjectOrbit from './sections/OrbitTesting/ProjectsOrbitTest';


function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-scroll-section]'))

    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            entry.target.classList.remove('is-past')
            return
          }

          entry.target.classList.remove('is-visible')

          if (entry.boundingClientRect.top < 0) {
            entry.target.classList.add('is-past')
          } else {
            entry.target.classList.remove('is-past')
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
        <Hero />

        <ProjectOrbit />
        <main>

            <About />
            <Contact />

        </main>

        <button
          type="button"
          className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
    </div>
  )
}

export default App
