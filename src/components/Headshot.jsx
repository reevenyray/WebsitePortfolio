import { FiUser } from 'react-icons/fi';

// Shows the real photo when `src` is set, otherwise a placeholder frame.
// Props: src (string), alt (string)
function Headshot({ src, alt }) {
  return (
    <figure className="headshot">
      {src ? (
        <img className="headshot__img" src={src} alt={alt} width="800" height="1000" />
      ) : (
        <div
          className="headshot__placeholder"
          role="img"
          aria-label="Placeholder for a professional headshot"
        >
          <FiUser className="headshot__icon" aria-hidden="true" />
          <p className="headshot__title">Your headshot here</p>
          <p className="headshot__hint">
            Forward-facing, 4:5 portrait, at least 800 × 1000 px
          </p>
        </div>
      )}
    </figure>
  );
}

export default Headshot;
