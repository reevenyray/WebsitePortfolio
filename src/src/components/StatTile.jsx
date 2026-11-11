// Props: icon (component), label (string), value (string | number), note (string)
function StatTile({ icon: Icon, label, value, note }) {
  return (
    <article className="stat-tile">
      <div className="stat-tile__head">
        <Icon aria-hidden="true" />
        <h3>{label}</h3>
      </div>
      <p className="stat-tile__value">{value}</p>
      <p className="stat-tile__note">{note}</p>
    </article>
  );
}

export default StatTile;
