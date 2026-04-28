import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import Navbar from "../components/Navbar/Navbar";

export default function Hero() {

  return (
    <header className="hero-section">
        <Navbar />
        <section className="hero-panel" id="home">          
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
  );
}