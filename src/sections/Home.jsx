import { motion } from 'framer-motion';
import { FiFolder, FiTarget, FiBookOpen, FiSend, FiDownload } from 'react-icons/fi';
import StatTile from '../components/StatTile';
import Headshot from '../components/Headshot';
import ProjectCarousel from '../components/ProjectCarousel';

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
  return (
    <div className="page">
      {/* Hero: no panel or border, the content sits on the page itself. */}
      <motion.section
        className="hero"
        variants={heroContainer}
        initial="hidden"
        animate="show"
        aria-labelledby="hero-title"
      >
        <div className="hero__body">
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
            <button
              type="button"
              className="btn btn--primary"
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
              Get in touch
            </button>
            <a
              className="btn btn--ghost"
              href={profile.resume}
              download
            >
              <FiDownload aria-hidden="true" />
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div variants={heroItem} style={{ display: 'contents' }}>
          <Headshot src={profile.photo} alt={profile.photoAlt} />
        </motion.div>
      </motion.section>

      <ul className="stats" aria-label="Overview">
        <StatTile
          icon={FiFolder}
          label="Projects"
          value={projects.length}
          note="Web, mobile, and management systems"
        />
        <StatTile
          icon={FiTarget}
          label="Focus areas"
          value={focusAreas.length}
          note="Dev, prototyping, UI/UX, and QA"
        />
        <StatTile
          icon={FiBookOpen}
          label="University"
          value={profile.schoolShort}
          note={profile.track}
        />
      </ul>

      {/* Full-bleed carousel: breaks out of the centred column. */}
      <section className="showcase" aria-labelledby="showcase-title">
        <div className="showcase__head">
          <h2 id="showcase-title" className="section-title">
            Featured projects
          </h2>
        </div>
        <ProjectCarousel projects={projects} onNavigate={onNavigate} />
      </section>
    </div>
  );
}

export default Home;
