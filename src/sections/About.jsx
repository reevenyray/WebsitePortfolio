import { FiCheck } from 'react-icons/fi';
import FocusItem from '../components/FocusItem';

// Props: profile (object), focusAreas (array)
//
// The bio and Education are one continuous list of rows. Every row uses the
// same [label | content] grid, so nothing floats in the margin.
function About({ profile, focusAreas }) {
  const pad = (n) => String(n).padStart(2, '0');
  const educationNumber = pad(profile.story.length + 1);

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">About</h1>
        <p className="page__lead">
          Studying {profile.track} at {profile.school}.
        </p>
      </header>

      <ol className="story">
        {profile.story.map((chunk, i) => (
          <li key={chunk.id} className="story__row">
            <div className="story__label">
              <span className="story__num" aria-hidden="true">
                {pad(i + 1)}
              </span>
              <h2 className="story__name">{chunk.label}</h2>
            </div>
            <div className="story__body">
              <p className="story__lead">{chunk.lead}</p>
              <p className="story__detail">{chunk.detail}</p>
              {chunk.points && (
                <ul className="points">
                  {chunk.points.map((point) => (
                    <li key={point}>
                      <FiCheck aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}

        <li className="story__row">
          <div className="story__label">
            <span className="story__num" aria-hidden="true">
              {educationNumber}
            </span>
            <h2 className="story__name">Education</h2>
          </div>
          <div className="story__body">
            <p className="story__lead">{profile.school}</p>
            <p className="story__detail">{profile.program}</p>
            <ul className="points">
              <li className="points__accent">Track: {profile.track}</li>
            </ul>
          </div>
        </li>
      </ol>

      <section aria-labelledby="focus-title">
        <h2 id="focus-title" className="section-title">
          What I focus on
        </h2>
        <ul className="focus-list">
          {focusAreas.map((area) => (
            <FocusItem
              key={area.id}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default About;
