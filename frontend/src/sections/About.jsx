


export default function About() {

    
    return (
        
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
    )

}