import { useEffect, useState } from 'react'
import './App.css'

import iwc from '../src/assets/general/iwc.svg'

import refilla from '../src/assets/projects/refilla-app-icon.png'
import bure from '../src/assets/projects/BURE-logo.png'
import raft from '../src/assets/projects/rafticon.svg'

import github from '../src/assets/contactme/github.png'
import gmail from '../src/assets/contactme/gmail.png'
import leet from '../src/assets/contactme/leet.png'
import linkedin from '../src/assets/contactme/linkedin.png'



const projects = [
  {
    title: 'Refilla',
    summary:
      'A full stack mobile app built to help users discover nearby water bottle refill stations, with community driven features such as live station submissions and leaderboard-based engagement.',
    learned:
      'Building Refilla highlighted the importance of scalable architecture and strong codebase organization. Managing a project with over 15,000 lines of code taught me to prioritize modularity, separation of concerns, and maintainable patterns to make debugging and feature development more efficient.',
    stack: ['React Native', 'TypeScript', 'SQLite', 'Expo Router'],
    pic: 'src/assets/projects/refilla-app-icon.png',
    link: 'https://github.com/iwcbu/Refilla'
  },
  {
    title: 'Boston University Rent Estimator',
    summary:
      'A predictive modeling capstone project for Data Science Tools and Applications (CS506) that used Beautiful Soup to scrape housing data from Apartments.com and train an accurate learning model to estimate off campus rental prices around Boston.',
    learned:
      'To collect data for our model, my partner and I built a web scraper that cleaned and normalized a large volume of apartment listing data from Apartments.com into structured features for training. Through experimentation, we identified the strongest predictors of rental price, including bedroom count, bathroom count, and square footage, and used those features to train a model that generated estimates from user-provided inputs. This project gave me hands-on experience building machine learning models and designing data pipelines that aligned closely with model requirements.',
    stack: ['Python', 'Beautiful Soup', 'Django', "JavaScript"],
    pic: 'src/assets/projects/BURE-logo.png',
    link: 'https://github.com/iwcbu/BURE'
  },
  {
    title: 'Raft',
    summary:
      "Implemented Raft from scratch in Go, building a distributed consensus algorithm that keeps replicated state machines synchronized across a cluster of servers. Completed as part of Distributed Systems (CS351), the project involved leader election, log replication, and fault tolerance.",
    learned: 
      'This project taught me a lot about concurrency, modular design, and server side problem solving. Because many of the challenges were difficult to visualize, I learned how important it is to break complex distributed behavior into smaller, understandable parts. It also strengthened my understanding of concurrency, asynchronous execution, and writing modular code that is easier to read, debug, and extend.',
    stack: ['Go', 'Distributed Systems', 'Concurrency',],
    pic: 'src/assets/projects/rafticon.svg',
    link: 'https://raft.github.io/',
  },
]

const contactLinks = [
  { label: 'GitHub', value: 'github.com/iwcbu', href: 'https://github.com/iwcbu', pic: github, size: 50 },
  { label: 'LeetCode', value: 'leetcode.com/iwc3', href: 'https://leetcode.com/iwc3', pic: leet, size: 60 },
  { label: 'Email', value: 'iwc3@bu.edu', href: 'mailto:iwc3@bu.edu', pic: gmail, size: 40},
  { label: 'LinkedIn', value: 'linkedin.com/in/iwc', href: 'https://linkedin.com/in/iwc3', pic: linkedin, size: 55 },
]

function App() {
  const [expandedProjects, setExpandedProjects] = useState({})
  const [showBackToTop, setShowBackToTop] = useState(false)
  const showOpenButton = !Object.values(expandedProjects).some(Boolean)

  useEffect(() => {
    const sections = document.querySelectorAll('[data-scroll-section]')
    const heroPanel = document.getElementById('home')

    const updateSectionState = () => {
      const viewportHeight = window.innerHeight

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < viewportHeight * 0.78 && rect.bottom > viewportHeight * 0.22
        const isPast = rect.bottom < viewportHeight * 0.24

        section.classList.toggle('is-visible', isVisible)
        section.classList.toggle('is-past', isPast)
      })

      if (heroPanel) {
        const heroBottom = heroPanel.getBoundingClientRect().bottom
        setShowBackToTop(heroBottom < viewportHeight * 0.2)
      }
    }

    updateSectionState()
    window.addEventListener('scroll', updateSectionState, { passive: true })
    window.addEventListener('resize', updateSectionState)

    return () => {
      window.removeEventListener('scroll', updateSectionState)
      window.removeEventListener('resize', updateSectionState)
    }
  }, [])

  const openAllProjects = () => {
    setExpandedProjects(
      Object.fromEntries(projects.map((project) => [project.title, true])),
    )
  }

  const closeAllProjects = () => {
    setExpandedProjects({})
  }

  const toggleProject = (title) => {
    setExpandedProjects((current) => ({
      ...current,
      [title]: !current[title],
    }))
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="hero-section">
        <nav className="topbar" aria-label="Primary">
          <img src="src/assets/general/iwc.svg" alt="" style={{width: 100}} />
          <a className="brand" href="#home">
            Ian Campbell
          </a>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-panel scroll-section" id="home" data-scroll-section>
          <div className="hero-copy">
            <p className="eyebrow">About me</p>
            
            <div className='hero-body-section'>
              <h1>Building meaningful software through full stack development and thoughtful design.</h1>
              <p className="hero-text">
                I&apos;m a computer science graduate who enjoys creating reliable solutions, learning from every
                project, and turning technical curiosity into work that helps people.
              </p>
            </div>

            <div className='hero-action-box'>
              <div className="hero-card">
                <p className="card-label">Quick Intro</p>
                <ul className="hero-highlights">
                  <li>Boston University computer science graduate</li>
                  <li>Interested in databases, backend systems, and UX design</li>
                  <li>Enjoy building useful products through iteration and problem solving</li>
                </ul>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View Projects
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

        </section>
      </header>

      <main>
        <section className="content-section scroll-section" id="projects" data-scroll-section>
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Recent work I&apos;m proud of</h2>
            <p>
              Each project reflects not only what I built, but also what it taught me about designing
              systems, solving problems, and growing as an engineer.
            </p>
          </div>

          <div className="project-controls" aria-label="Project expansion controls">
            
            {showOpenButton && (
              <button type="button" className="project-control-button" onClick={openAllProjects}>
                Open all
              </button>
            )}

            {!showOpenButton && (
              <button type="button" className="project-control-button" onClick={closeAllProjects}>
                Close all
              </button>
            )}
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-header">
                  <a href={project.link} target='_blank' style={{textDecoration: 'none'}}>
                    <div className='project-header-top'>
                      <h3>{project.title}</h3>
                        <img src={project.pic} alt="" className='project-pic' />
                    </div>
                  </a>
                  <div className="tag-row" aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-content">
                  <div
                    className={`project-copy ${expandedProjects[project.title] ? 'expanded' : ''}`}
                  >
                    <p>
                      <strong>Summary:</strong> {project.summary}
                    </p>
                    <p>
                      <strong>What I learned:</strong> {project.learned}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="read-more-button"
                    onClick={() => toggleProject(project.title)}
                    aria-expanded={Boolean(expandedProjects[project.title])}
                  >
                    {expandedProjects[project.title] ? 'Show less' : 'Read more'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section about-section scroll-section" id="about" data-scroll-section>
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>How my CS background shaped my path</h2>
            <p>
              A look at the experiences that shaped my approach to engineering.
            </p>
          </div>

          <div className="about-layout">
            <article className="about-card">
              <p>
                My background in computer science gave me a strong foundation in algorithms, data structures, systems thinking, 
                and the discipline of breaking large problems into smaller steps. Over time, that foundation grew into an interest 
                in full stack development, where I can combine technical problem solving with building experiences people actually use.
              </p>
              <p>
                I enjoy the process of turning an idea into a complete product, from the underlying logic and data flow to the interface 
                a user sees everyday. The more I learn from doing, the more I see that good software is not only about features, but about structure,
                purpose, and long term impact.
              </p>
              <p>
                That experience shaped the kind of engineer I want to become: someone who solves problems carefully, keeps learning, and builds 
                systems that are both well designed and genuinely useful. Whether I am working on the front end or the back end, I want to 
                create technology that is thoughtful, dependable, and valuable in everyday life.
              </p>
            </article>

            <aside className="timeline-card">
              <p className="card-label">Focus Areas</p>

              <div className="timeline-item">
                <span className="timeline-title">Full Stack Development</span>
                <p>Interested in building end to end applications that connect intuitive interfaces with dependable backend systems.</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-title">Database Work</span>
                <p>Enjoy organizing and modeling data in ways that support maintainable, scalable, and efficient applications.</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-title">User Experience</span>
                <p>Value clean, intuitive design that helps users complete everyday tasks with less friction.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section contact-section scroll-section" id="contact" data-scroll-section>
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s connect</h2>
          </div>

          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a className="contact-card" key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <div>
                  <span className="contact-label">{link.label}</span>
                  <span className="contact-value">{link.value}</span>
                </div>
                <img src={link.pic} alt="" style={{alignSelf: 'center',maxHeight: link.size,}} />
              </a>
            ))}
          </div>
        </section>
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
