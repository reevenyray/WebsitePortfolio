import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiPlay,
  FiArrowRight,
  FiExternalLink,
} from 'react-icons/fi';
import ProjectVisual from './ProjectVisual';

const AUTOPLAY_MS = 6500;
const SWIPE_PX = 50;

const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const pad = (n) => String(n).padStart(2, '0');

// Full-width project carousel.
//  - arrows, dots, keyboard (left/right), and swipe
//  - autoplay that pauses on hover/focus, can be stopped with a button,
//    and never starts for visitors who prefer reduced motion
// Props: projects (array), onNavigate (function)
function ProjectCarousel({ projects, onNavigate }) {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStart = useRef(null);

  const count = projects.length;
  const go = useCallback((i) => setIndex((i + count) % count), [count]);

  // Respect "reduce motion": no autoplay, and the user can still step manually.
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const playing = !userPaused && !reducedMotion && !hovering && !focusWithin && count > 1;

  useEffect(() => {
    if (!playing) return undefined;
    const id = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [playing, index, go]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(index - 1);
    }
  };

  const handlePointerDown = (event) => {
    pointerStart.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) return;
    const delta = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(delta) > SWIPE_PX) go(index + (delta < 0 ? 1 : -1));
  };

  const autoplayOn = !userPaused && !reducedMotion;

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocusWithin(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocusWithin(false);
      }}
    >
      <div
        className="carousel__viewport"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
      >
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live={playing ? 'off' : 'polite'}
        >
          {projects.map((project, i) => {
            const active = i === index;
            const tabIndex = active ? 0 : -1; // keep hidden slides out of tab order

            return (
              <article
                key={project.id}
                className="slide"
                style={{ '--hue': project.hue ?? 40 }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}: ${project.title}`}
                aria-hidden={active ? undefined : true}
              >
                <div className="slide__inner">
                  <div className="slide__copy">
                    <div className="slide__meta">
                      <span className="slide__count" aria-hidden="true">
                        {pad(i + 1)} / {pad(count)}
                      </span>
                      {(project.categories ?? [project.category]).map((category) => (
                        <span
                          key={category}
                          className="category-pill"
                          data-category={slug(category)}
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    <h3 className="slide__title">{project.title}</h3>
                    <p className="slide__summary">{project.summary}</p>

                    <ul className="slide__tags" aria-label="Technologies and features">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>

                    <div className="slide__actions">
                      <button
                        type="button"
                        className="btn btn--primary"
                        tabIndex={tabIndex}
                        onClick={() => onNavigate('projects')}
                      >
                        See project details
                        <FiArrowRight aria-hidden="true" />
                      </button>
                      {project.link && (
                        <a
                          className="btn btn--ghost"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={tabIndex}
                        >
                          View project
                          <FiExternalLink aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="slide__visual" aria-hidden="true">
                    <ProjectVisual kind={project.kind} image={project.image} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="carousel__controls">
        {!reducedMotion && count > 1 && (
          <button
            type="button"
            className="carousel__btn"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={autoplayOn ? 'Pause automatic slide rotation' : 'Start automatic slide rotation'}
          >
            {autoplayOn ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
          </button>
        )}

        <ul className="carousel__dots">
          {projects.map((project, i) => (
            <li key={project.id} style={{ flex: 1, maxWidth: '5rem' }}>
              <button
                type="button"
                className="carousel__dot"
                onClick={() => go(i)}
                aria-label={`Go to project ${i + 1}: ${project.title}`}
                aria-current={i === index ? 'true' : undefined}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="carousel__btn carousel__spacer"
          onClick={() => go(index - 1)}
          aria-label="Previous project"
        >
          <FiChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className="carousel__btn"
          onClick={() => go(index + 1)}
          aria-label="Next project"
        >
          <FiChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default ProjectCarousel;
