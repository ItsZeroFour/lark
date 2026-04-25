import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wordmark } from '../ui/Atoms';

const LINKS = [
  { id: 'projects', to: '/projects', label: 'Проекты' },
  { id: 'about',    to: '/about',    label: 'О нас' },
  { id: 'team',     to: '/team',     label: 'Команда' },
  { id: 'guides',   to: '/guides',   label: 'Гайды' },
  { id: 'docs',     to: '/docs',     label: 'Доки' },
  { id: 'apply',    to: '/apply',    label: 'Заявка' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const activeId = pathname.startsWith('/projects') ? 'projects'
    : pathname.startsWith('/about')   ? 'about'
    : pathname.startsWith('/team')    ? 'team'
    : pathname.startsWith('/guides')  ? 'guides'
    : pathname.startsWith('/docs')    ? 'docs'
    : pathname.startsWith('/apply')   ? 'apply'
    : 'home';

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const close = () => setOpen(false);

  return (
    <>
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
            className={`topbar-burger${open ? ' is-open' : ''}`}
            aria-label="Меню"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {open && (
        <div className="nav-overlay" role="dialog" aria-modal="true" aria-label="Навигация">
          <div className="nav-overlay-header">
            <div className="topbar-ticker">
              <span>№ 001 / 2026</span>
            </div>
            <Wordmark size={22} />
            <button
              className="topbar-burger is-open"
              aria-label="Закрыть"
              onClick={close}
            >
              <span /><span /><span />
            </button>
          </div>

          <nav className="nav-overlay-links">
            {LINKS.map((l, i) => (
              <Link
                key={l.id}
                to={l.to}
                className={`nav-overlay-link${activeId === l.id ? ' is-active' : ''}`}
                onClick={close}
              >
                <span className="nav-overlay-num">0{i + 1}</span>
                <span className="nav-overlay-label">{l.label}</span>
                <span className="nav-overlay-arrow">→</span>
              </Link>
            ))}
          </nav>

          <div className="nav-overlay-footer">
            <Link className="nav-overlay-cta" to="/apply" onClick={close}>
              Подать заявку →
            </Link>
            <div className="mono" style={{ color: 'var(--lark-fg-4)', marginTop: 16 }}>
              © 2026 LarkFrilance · v 1.0.0
            </div>
          </div>
        </div>
      )}
    </>
  );
}
