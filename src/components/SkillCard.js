export default function SkillCard({ title, children }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <div className="cardBody">{children}</div>
    </article>
  );
}
