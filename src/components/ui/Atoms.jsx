import React from 'react';
import { Link } from 'react-router-dom';

export function Wordmark({ size = 22 }) {
  return (
    <Link to="/" className="wordmark" style={{ fontSize: size }}>
      Lark<span className="dot" style={{ width: size / 3, height: size / 3 }} />
    </Link>
  );
}

export function MonoKicker({ children, yellow }) {
  return <div className={'mono ' + (yellow ? 'mono-yellow' : '')}>{children}</div>;
}

export function CtaBig({ children, onClick, as: Tag = 'button', to, href }) {
  if (to) return <Link to={to} className="cta-big">{children} <span>→</span></Link>;
  if (href) return <a className="cta-big" href={href}>{children} <span>→</span></a>;
  return <Tag className="cta-big" onClick={onClick}>{children} <span>→</span></Tag>;
}

export function CtaGhost({ children, onClick, to, href, as: Tag = 'button' }) {
  if (to) return <Link to={to} className="cta-ghost">{children}</Link>;
  if (href) return <a className="cta-ghost" href={href}>{children}</a>;
  return <Tag className="cta-ghost" onClick={onClick}>{children}</Tag>;
}

export function Marquee({ items = ['PROOF OF WORK'] }) {
  const block = (
    <span>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span>{t}</span>
          <span className="dot" />
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">{block}{block}{block}{block}</div>
    </div>
  );
}
