import { useState } from 'react';
import {
  FiSend,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiArrowUpRight,
} from 'react-icons/fi';

const initialForm = { name: '', email: '', message: '' };

// "https://github.com/user" -> "github.com/user"
const display = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

// Props: contact ({ email, github, linkedin }), resume (string, file path)
function Contact({ contact, resume }) {
  // State: one object holds every controlled input.
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  // The input's `name` attribute matches the key in state,
  // so one handler covers all three fields.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData(initialForm);
  };

  const channels = [
    {
      id: 'email',
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: FiMail,
      external: false,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: display(contact.github),
      href: contact.github,
      icon: FiGithub,
      external: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: display(contact.linkedin),
      href: contact.linkedin,
      icon: FiLinkedin,
      external: true,
    },
    {
      id: 'cv',
      label: 'Resume',
      value: 'Download my CV (PDF)',
      href: resume,
      icon: FiDownload,
      external: false,
      download: true,
    },
  ];

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Contact</h1>
        <p className="page__lead">
          Have a project, a question, or an opportunity? Send a message.
        </p>
      </header>

      <div className="contact">
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__actions">
            <button type="submit" className="btn btn--primary">
              <FiSend aria-hidden="true" />
              Send message
            </button>
            <p className="form__status" role="status">
              {submitted &&
                'Message captured and logged to the browser console. No server is connected yet.'}
            </p>
          </div>
        </form>

        <aside className="reach" aria-labelledby="reach-title">
          <h2 id="reach-title" className="reach__title">
            Prefer a direct line?
          </h2>
          <p className="reach__intro">
            Skip the form and reach me on any of these.
          </p>

          <ul className="reach__list">
            {channels.map(({ id, label, value, href, icon: Icon, external, download }) => (
              <li key={id}>
                <a
                  className="reach__link"
                  href={href}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  {...(download ? { download: true } : {})}
                >
                  <span className="reach__icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="reach__text">
                    <span className="reach__label">{label}</span>
                    <span className="reach__value">{value}</span>
                  </span>
                  <FiArrowUpRight className="reach__arrow" aria-hidden="true" />
                  {external && (
                    <span className="visually-hidden">(opens in a new tab)</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
