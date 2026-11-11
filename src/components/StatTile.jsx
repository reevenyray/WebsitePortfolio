// An open stat (no box). Props: icon (component), label, value, note
function StatTile({ icon: Icon, label, value, note }) {
  return (
    <li className="stat">
      <h3 className="stat__label">
        <Icon aria-hidden="true" />
        {label}
      </h3>
      <p className="stat__value">{value}</p>
      <p className="stat__note">{note}</p>
    </li>
  );
}

export default StatTile;
