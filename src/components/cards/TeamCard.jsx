import React from 'react';

export default function TeamCard({ p }) {
  return (
    <article className="team-card">
      <div className="team-photo">{p.initials}</div>
      <div className="team-meta">
        <div className="team-id mono">ID · {p.initials}-{String(Math.floor(Math.random() * 90) + 10)}</div>
        <h3>{p.name}</h3>
        <div className="team-role">{p.role}</div>
        <div className="team-city mono">{p.city}</div>
        <p className="team-bio">{p.bio}</p>
        <a
          className="team-link mono"
          href={'https://' + p.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          → {p.link}
        </a>
      </div>
    </article>
  );
}
