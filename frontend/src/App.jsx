import { useEffect, useState, useRef } from 'react';
import './App.css';

import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import ProjectOrbit from './sections/Orbit/ProjectsOrbit';


function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const [projectIndex, setProjectIndex] = useState(0);
  const [inProjectSection, setInProjectSection] = useState(false);
  const projectStepRefs = useRef([]);

  
  const nextProject = () => {
    const nextIndex = Math.min(projectIndex + 1, 2);
    
    projectStepRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const prevProject = () => {
    const prevIndex = Math.max(projectIndex - 1, 0);
      
      projectStepRefs.current[prevIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        
      });
  };

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

        <ProjectOrbit 
          projectIndex={projectIndex}
          onProjectIndexChange={setProjectIndex}
          onProjectSectionChange={setInProjectSection}
          projectStepRefs={projectStepRefs}
        />
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

          <div className='pn-button-box'> 
            <button
              type="button"
              className={`project-nav-button project-nav-prev ${
                projectIndex > 0 && inProjectSection ? "is-visible" : ""
                }`}
                onClick={prevProject}
                disabled={projectIndex === 0}
                aria-label="Previous project"
                >
              <p>
                ‹
              </p>
            </button>

            <button
              type="button"
              className={`project-nav-button project-nav-next ${
                projectIndex < 2 && inProjectSection ? "is-visible" : ""
                }`}
                onClick={nextProject}
                disabled={projectIndex === 2}
                aria-label="Next project"
                >
              <p>
                ›
              </p>
            </button>
          </div>

    </div>
  )
}

export default App
