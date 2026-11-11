import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

// Props: projects (array of project objects)
function Projects({ projects }) {
  // State: the active category filter.
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const visibleProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Projects</h1>
        <p className="page__lead" role="status">
          Showing {visibleProjects.length} of {projects.length}
        </p>
      </header>

      <div className="filters" role="group" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`chip ${filter === category ? 'is-active' : ''}`}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            summary={project.summary}
            highlights={project.highlights}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
