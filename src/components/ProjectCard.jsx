import { FiExternalLink, FiCheck } from 'react-icons/fi';
import styles from './ProjectCard.module.css';

// "Management System" -> "management-system" (used to pick the tag colours)
const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');

// Props: title, category, summary (strings), highlights, tags (arrays),
// link (optional string)
function ProjectCard({ title, category, summary, highlights, tags, link }) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <span className="category-pill" data-category={slug(category)}>
          {category}
        </span>
        <h3 className={styles.title}>{title}</h3>
      </header>

      <p className={styles.summary}>{summary}</p>

      <ul className={styles.highlights}>
        {highlights.map((item) => (
          <li key={item}>
            <FiCheck className={styles.check} aria-hidden="true" />
            <span>{item}</span>
          </li>
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

        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            View project
            <FiExternalLink aria-hidden="true" />
          </a>
        )}
      </footer>
    </article>
  );
}

export default ProjectCard;
