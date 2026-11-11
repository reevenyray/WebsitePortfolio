import { motion } from 'framer-motion';
import { FiFolder, FiTarget, FiBookOpen, FiSend, FiDownload } from 'react-icons/fi';
import StatTile from '../components/StatTile';

// One orchestrated entrance for the hero, and nothing else on the page.
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

// Props: profile (object), projects (array), focusAreas (array),
// onNavigate (function)
function Home({ profile, projects, focusAreas, onNavigate }) {
  const featured = projects[0];

  return (
    <div className="page">
      <motion.section
        className="hero"
        variants={heroContainer}
        initial="hidden"
        animate="show"
        aria-labelledby="hero-title"
      >
        <div className="hero__grid" aria-hidden="true" />
        
        <div className="hero__layout">
          <div className="hero__body">
            <motion.p className="hero__badge" variants={heroItem}>
              {profile.availability}
            </motion.p>
            <motion.h1 id="hero-title" className="hero__name" variants={heroItem}>
              {profile.name}
            </motion.h1>
            <motion.p className="hero__role" variants={heroItem}>
              {profile.role}
            </motion.p>
            <motion.p className="hero__intro" variants={heroItem}>
              {profile.intro}
            </motion.p>
            <motion.div className="hero__actions" variants={heroItem}>
              <a
                href={profile.resumeUrl}
                download="Reeven_Yray_Resume.pdf"
                className="btn btn--primary"
              >
                <FiDownload aria-hidden="true" />
                Download resume
              </a>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => onNavigate('projects')}
              >
                <FiFolder aria-hidden="true" />
                View projects
              </button>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => onNavigate('contact')}
              >
                <FiSend aria-hidden="true" />
                Contact me
              </button>
            </motion.div>
          </div>

          <img
            className="hero__photo"
            src="/yray.png"
            alt="Portrait of Reeven Yray"
            width="360"
            height="360"
            loading="eager"
          />
        </div>
      </motion.section>

      <section className="tiles" aria-label="Overview">
        <StatTile
          icon={FiFolder}
          label="Projects"
          value={projects.length}
          note="Campus safety, e-commerce, and farm management"
        />
        <StatTile
          icon={FiTarget}
          label="Focus areas"
          value={focusAreas.length}
          note="Development, support, UI/UX, and QA"
        />
        <StatTile
          icon={FiBookOpen}
          label="University"
          value={profile.schoolShort}
          note={profile.track}
        />
      </section>

      <section className="panel" aria-labelledby="featured-title">
        <h2 id="featured-title" className="panel__title">
          Featured project
        </h2>
        <h3 className="panel__project">{featured.title}</h3>
        <p className="panel__text">{featured.summary}</p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => onNavigate('projects')}
        >
          See all projects
        </button>
      </section>
    </div>
  );
}

export default Home;