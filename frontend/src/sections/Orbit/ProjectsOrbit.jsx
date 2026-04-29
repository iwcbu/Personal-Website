import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import "./POT.css";
import refilla from "../../assets/projects/refilla-app-icon.png";
import bure from "../../assets/projects/BURE-logo.png";
import raft from "../../assets/projects/rafticon.svg";
import PlanetDetailCard from "../../components/PlanetDetailCard";

function PlanetFace({ project }) {
  return (
    <>
      <div className="planet-icon-shell">
        <img className="planet-icon" src={project.image} alt={project.alt} />
      </div>
      <span className="planet-name">{project.shortName}</span>
    </>
  );
}

function OrbitPlanet({ project, isActive, scrollYProgress }) {
  const flip = useTransform(scrollYProgress, project.flipRange, [0, 0, 180, 180]);

  return (
    <div className={`planet-anchor ${project.orbitClass}`}>
      <motion.div
        className={`planet ${isActive ? "is-active" : ""}`}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 22,
          mass: 0.9,
        }}      
      >
        <div className="planet-upright">
          <motion.div className="planet-flip" style={{ rotateY: flip }}>
            <div className="planet-face planet-face-front">
              <PlanetFace project={project} />
            </div>
            <div className="planet-face planet-face-back">
              <PlanetFace project={project} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectOrbit() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const projects = [
    {
      shortName: "BURE",
      title: "Boston University Rent Estimator",
      image: bure,
      alt: "Boston University Rent Estimator logo",
      orbitClass: "planet-three",
      stack: ["Python", "Beautiful Soup", "Django"],
      link: "https://github.com/iwcbu/BURE",
      summary:
        "A predictive modeling capstone project for Data Science Tools and Applications (CS506) that used Beautiful Soup to scrape housing data from Apartments.com and train an accurate learning model to estimate off campus rental prices around Boston.",
      learned:
        "To collect data for our model, my partner and I built a web scraper that cleaned and normalized a large volume of apartment listing data from Apartments.com into structured features for training. Through experimentation, we identified the strongest predictors of rental price, including bedroom count, bathroom count, and square footage, and used those features to train a model that generated estimates from user-provided inputs. This project gave me hands-on experience building machine learning models and designing data pipelines that aligned closely with model requirements.",
      flipRange: [0, 0.5, 0.5, 1],
    },
    {
      shortName: "Refilla",
      title: "Refilla",
      image: refilla,
      alt: "Refilla app icon",
      orbitClass: "planet-one",
      stack: ["React Native", "TypeScript", "SQL", "Expo Router", "Supabase"],
      link: "https://github.com/iwcbu/Refilla",
      summary:
        "A full stack mobile app built to help users discover nearby water bottle refill stations, with community driven features such as live station submissions and leaderboard-based engagement.",
      learned:
        "Building Refilla highlighted the importance of scalable architecture and strong codebase organization. Managing a project with over 15,000 lines of code taught me to prioritize modularity, separation of concerns, and maintainable patterns to make debugging and feature development more efficient.",
      flipRange: [0, 0.24, 0.24, 1],
    },
    {
      shortName: "Raft",
      title: "Raft",
      image: raft,
      alt: "Raft project icon",
      orbitClass: "planet-two",
      stack: ["Go", "Distributed Systems", "Concurrency"],
      link: "https://raft.github.io/",
      summary:
        "Implemented Raft from scratch in Go, building a distributed consensus algorithm that keeps replicated state machines synchronized across a cluster of servers. Completed as part of Distributed Systems (CS351), the project involved leader election, log replication, and fault tolerance.",
      learned:
        "This project taught me a lot about concurrency, modular design, and server side problem solving. Because many of the challenges were difficult to visualize, I learned how important it is to break complex distributed behavior into smaller, understandable parts. It also strengthened my understanding of concurrency, asynchronous execution, and writing modular code that is easier to read, debug, and extend.",
      flipRange: [0, 0.74, 0.74, 1],
    },
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const orbitSection = ref.current;

    if (!orbitSection) {
      return undefined;
    }

    const skyObserver = new IntersectionObserver(
      ([entry]) => {
        document.body.classList.toggle("orbit-sky-active", entry.isIntersecting);
      },
      { 
        threshold: 0,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    const stepObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        setActiveIndex(Number(visibleEntry.target.getAttribute("data-step-index")));
      },
      {
        threshold: [0.35, 0.6, 0.85],
        rootMargin: "-12% 0px -18% 0px",
      },
    );

    const updatePinnedState = () => {
      const rect = orbitSection.getBoundingClientRect();
      const shouldPin = rect.top <= 0 && rect.bottom >= window.innerHeight + 2;
      setIsPinned(shouldPin);
    };

    skyObserver.observe(orbitSection);
    orbitSection
      .querySelectorAll("[data-orbit-step]")
      .forEach((step) => stepObserver.observe(step));
    updatePinnedState();
    window.addEventListener("scroll", updatePinnedState, { passive: true });
    window.addEventListener("resize", updatePinnedState);

    return () => {
      skyObserver.disconnect();
      stepObserver.disconnect();
      window.removeEventListener("scroll", updatePinnedState);
      window.removeEventListener("resize", updatePinnedState);
      document.body.classList.remove("orbit-sky-active");
    };
  }, []);

  return (

    <section ref={ref} className="orbit-section">

      <div className="space-header">
        <h1>
          Recent Projects
        </h1>
      </div>

      <div className="orbit-sticky">
        <div className="orbit-story-stage">
          <div className="orbit-stage">
            <div className="orbit-ring" id="projects">
              <motion.div className="orbit-rotation" style={{ rotate }}>
                {projects.map((project, index) => (
                  <OrbitPlanet
                    key={project.shortName}
                    project={project}
                    isActive={index === activeIndex}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="orbit-detail-overlay">
            <AnimatePresence mode="wait">
              <PlanetDetailCard project={activeProject} />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="orbit-steps">
        {projects.map((project, index) => (
          <article
            key={project.shortName}
            className={`orbit-step ${index === activeIndex ? "is-active" : ""}`}
            data-orbit-step
            data-step-index={index}
          >
            <div className="orbit-step-spacer" />
          </article>
        ))}
      </div>
    </section>
  );
}
