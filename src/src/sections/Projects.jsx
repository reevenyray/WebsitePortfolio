import ProjectCard from '../components/ProjectCard';

function Projects({ projects }) {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Projects</h1>
        <p className="page__lead">Systems I have designed and built.</p>
      </header>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
