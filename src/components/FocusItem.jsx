// Props: icon (component), title (string), description (string)
function FocusItem({ icon: Icon, title, description }) {
  return (
    <li className="focus-item">
      <span className="focus-item__icon">
        <Icon aria-hidden="true" />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default FocusItem;
