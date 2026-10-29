function ProfileCard({
  initials,
  image,
  name,
  role,
  bio,
  skills = [],
  available = false,
}) {
  return (
    <article className="card">
      {image ? (
        <img className="avatar" src={image} alt={`photo of ${name}`} />
      ) : (
        <div className="avatar">{initials}</div>
      )}
      <h2 className="name">{name}</h2>
      <p className="role">{role}</p>
      {available && <span className="badge"> Avilable for work</span>}
      <p className="bio">{bio}</p>

      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

export default ProfileCard;
