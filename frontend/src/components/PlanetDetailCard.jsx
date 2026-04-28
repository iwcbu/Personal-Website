import { motion } from 'motion/react';

export default function PlanetDetailCard({ project }) {

    return (
        <a href={`${project.link}`} style={{ textDecoration: "none"}}>
        <motion.article
            key={project.shortName}
            className="orbit-detail-card"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >
        
            <h3>{project.title}</h3>

            <div className="tag-row">
                {project.stack.map((item) => (
                    <span className="tag" key={item}>{item}</span>
                ))}
            </div>

            <div className="project-detail-grid">
                <section>
                <h4>What it is</h4>
                <p>{project.summary}</p>
                </section>

                <section>
                <h4>What I learned</h4>
                <p>{project.learned}</p>
                </section>
            </div>
        </motion.article>
        </a>
    )


}