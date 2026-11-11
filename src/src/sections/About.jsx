import FocusItem from '../components/FocusItem';

// Props: profile, focusAreas, skills
function About({ profile, focusAreas, skills }) {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">About</h1>
        <p className="page__lead">
          {profile.program} student at {profile.school}.
        </p>
      </header>

      <div className="about">
        <div className="about__text">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="about__school">
          <h2>Education</h2>
          <p className="about__school-name">{profile.school}</p>
          <p>{profile.program}</p>
          <p className="about__school-track">Track: {profile.track}</p>
        </aside>
      </div>

      <section aria-labelledby="skills-title">
        <h2 id="skills-title" className="section-title">
          Tech stack
        </h2>
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skills__row">
              <dt>{s.group}</dt>
              <dd>
                {s.items.map((i) => (
                  <span key={i} className="skills__chip">{i}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

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
