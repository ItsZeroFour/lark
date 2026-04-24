import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wordmark } from '../ui/Atoms';

const LINKS = [
  { id: 'platform', to: '/#platform', label: 'Платформа' },
  { id: 'about',    to: '/about',     label: 'О нас' },
  { id: 'team',     to: '/team',      label: 'Команда' },
  { id: 'apply',    to: '/apply',     label: 'Заявка' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const activeId = pathname === '/' ? 'home'
    : pathname.startsWith('/about') ? 'about'
    : pathname.startsWith('/team')  ? 'team'
    : pathname.startsWith('/apply') ? 'apply'
    : 'home';

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-ticker">
          <span>№ 001 / 2026</span>
          <span className="hide-sm">МОСКВА</span>
          <span className="hide-sm">RU</span>
        </div>

        <nav className="topbar-center">
          {LINKS.map(l => (
            <Link
              key={l.id}
              to={l.to}
              className={activeId === l.id ? 'is-active' : ''}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Wordmark size={22} />

        <Link className="topbar-cta hide-sm" to="/apply">
          Подать заявку <span className="arr">→</span>
        </Link>

        <button
          className="topbar-burger"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="topbar-sheet">
          {LINKS.map(l => (
            <Link
              key={l.id}
              to={l.to}
              className={activeId === l.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              <span className="mono">§</span> {l.label}
            </Link>
          ))}
          <Link className="topbar-sheet-cta" to="/apply" onClick={() => setOpen(false)}>
            Подать заявку →
          </Link>
        </div>
      )}
    </header>
  );
}
