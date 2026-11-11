import { useState } from 'react';
import { FiSend, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../data/portfolioData';

const initialForm = { name: '', email: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [opened, setOpened] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (opened) setOpened(false);
  };

  // No server needed: opens the visitor's email app with the message filled in.
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const links = [
    profile.email && { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
    profile.github && { icon: FiGithub, label: 'GitHub', href: profile.github },
    profile.linkedin && { icon: FiLinkedin, label: 'LinkedIn', href: profile.linkedin },
  ].filter(Boolean);

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Contact</h1>
        <p className="page__lead">
          I am open to job opportunities. Reach out and I will reply as soon as I can.
        </p>
      </header>

      {links.length > 0 && (
        <ul className="contact-links">
          {links.map(({ icon: Icon, label, href }) => (
            <li key={href}>
              <a className="btn btn--ghost" href={href} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {profile.email && (
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Your email</label>
            <input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required />
          </div>
          <div className="form__actions">
            <button type="submit" className="btn btn--primary">
              <FiSend aria-hidden="true" />
              Send message
            </button>
            <p className="form__status" role="status">
              {opened && 'Your email app should open with the message ready to send.'}
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contact;
