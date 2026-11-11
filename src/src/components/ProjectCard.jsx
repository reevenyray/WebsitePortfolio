import { FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './ProjectCard.module.css';

// Props: title, category, summary (strings), highlights, tags (arrays),
// link, repo (optional strings)
function ProjectCard({ title, category, summary, highlights, tags, link, repo }) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.category}>{category}</span>
      </header>

      <p className={styles.summary}>{summary}</p>

      <ul className={styles.highlights}>
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <footer className={styles.footer}>
        <ul className={styles.tags} aria-label="Technologies and features">
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {repo && (
            <a className={styles.link} href={repo} target="_blank" rel="noreferrer">
              Source code
              <FiGithub aria-hidden="true" />
            </a>
          )}
          {link && (
            <a className={styles.link} href={link} target="_blank" rel="noreferrer">
              Live demo
              <FiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}

export default ProjectCard;
