import projects from "../data/projects";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p><strong>{project.tech}</strong></p>

          <ul>
            {project.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub Repository
          </a>
        </div>
      ))}
    </section>
  );
}
