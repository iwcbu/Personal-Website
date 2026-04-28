import { useState } from 'react';

import refilla from '../assets/projects/refilla-app-icon.png';
import bure from '../assets/projects/BURE-logo.png';
import raft from '../assets/projects/rafticon.svg';


export default function Projects() {

    const projects = [
    {
        title: 'Refilla',
        summary:
        'A full stack mobile app built to help users discover nearby water bottle refill stations, with community driven features such as live station submissions and leaderboard-based engagement.',
        learned:
        'Building Refilla highlighted the importance of scalable architecture and strong codebase organization. Managing a project with over 15,000 lines of code taught me to prioritize modularity, separation of concerns, and maintainable patterns to make debugging and feature development more efficient.',
        stack: ['React Native', 'TypeScript', 'SQLite', 'Expo Router'],
        pic: refilla,
        link: 'https://github.com/iwcbu/Refilla'
    },
    {
        title: 'Boston University Rent Estimator',
        summary:
        'A predictive modeling capstone project for Data Science Tools and Applications (CS506) that used Beautiful Soup to scrape housing data from Apartments.com and train an accurate learning model to estimate off campus rental prices around Boston.',
        learned:
        'To collect data for our model, my partner and I built a web scraper that cleaned and normalized a large volume of apartment listing data from Apartments.com into structured features for training. Through experimentation, we identified the strongest predictors of rental price, including bedroom count, bathroom count, and square footage, and used those features to train a model that generated estimates from user-provided inputs. This project gave me hands-on experience building machine learning models and designing data pipelines that aligned closely with model requirements.',
        stack: ['Python', 'Beautiful Soup', 'Django', "JavaScript"],
        pic: bure,
        link: 'https://github.com/iwcbu/BURE'
    },
    {
        title: 'Raft',
        summary:
        "Implemented Raft from scratch in Go, building a distributed consensus algorithm that keeps replicated state machines synchronized across a cluster of servers. Completed as part of Distributed Systems (CS351), the project involved leader election, log replication, and fault tolerance.",
        learned: 
        'This project taught me a lot about concurrency, modular design, and server side problem solving. Because many of the challenges were difficult to visualize, I learned how important it is to break complex distributed behavior into smaller, understandable parts. It also strengthened my understanding of concurrency, asynchronous execution, and writing modular code that is easier to read, debug, and extend.',
        stack: ['Go', 'Distributed Systems', 'Concurrency',],
        pic: raft,
        link: 'https://raft.github.io/',
    },
    ]

    const [expandedProjects, setExpandedProjects] = useState({})
    const showOpenButton = !Object.values(expandedProjects).some(Boolean)

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

    return (
            <section className="scroll-section content-section" id="projects" data-scroll-section>
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

    )
}