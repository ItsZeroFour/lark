import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

const PROJECTS = [
  {
    id: 'LRK-248',
    title: 'Переделка онбординга',
    client: 'ООО «Поток»',
    status: 'active',
    phase: 3,
    progress: 64,
    deadline: '28.04.2026',
    stack: ['UX', 'React', 'Motion'],
    roles: ['Дизайнер · лид', 'Инженер × 2', 'PM'],
    brief: 'Полный редизайн пользовательского онбординга — от карты пути до финального экрана активации.',
  },
  {
    id: 'LRK-251',
    title: 'Аналитическая панель v2',
    client: 'Selectel',
    status: 'active',
    phase: 2,
    progress: 41,
    deadline: '12.05.2026',
    stack: ['Data Viz', 'TypeScript', 'Figma'],
    roles: ['Дизайнер', 'Инженер × 3', 'Аналитик'],
    brief: 'Построить единую панель аналитики для внутренних команд с real-time обновлениями и экспортом.',
  },
  {
    id: 'LRK-255',
    title: 'Брендинг стартапа',
    client: 'Confidential',
    status: 'open',
    phase: 0,
    progress: 0,
    deadline: '30.05.2026',
    stack: ['Branding', 'Motion', 'Figma'],
    roles: ['Бренд-дизайнер · лид', 'Motion · 1'],
    brief: 'Айдентика для B2B SaaS-продукта. Логотип, типографика, ключевые носители, моушн-гайдлайн.',
  },
  {
    id: 'LRK-247',
    title: 'Мобильное приложение',
    client: 'МТС Линк',
    status: 'done',
    phase: 4,
    progress: 100,
    deadline: '10.04.2026',
    stack: ['iOS', 'Android', 'Figma'],
    roles: ['Дизайнер × 2', 'Инженер × 2'],
    brief: 'Редизайн мобильного приложения для корпоративных видеоконференций. Все этапы выполнены.',
  },
  {
    id: 'LRK-252',
    title: 'Поисковый интерфейс v3',
    client: 'Яндекс Практикум',
    status: 'active',
    phase: 2,
    progress: 38,
    deadline: '20.05.2026',
    stack: ['UX Research', 'Prototyping', 'React'],
    roles: ['UX · лид', 'Исследователь', 'Инженер'],
    brief: 'Переосмысление поискового интерфейса с упором на контекстные подсказки и фильтрацию.',
  },
  {
    id: 'LRK-257',
    title: 'Design System 2.0',
    client: 'Setka',
    status: 'open',
    phase: 0,
    progress: 0,
    deadline: '01.06.2026',
    stack: ['Design System', 'Storybook', 'Tokens'],
    roles: ['Дизайнер · лид', 'Инженер × 2', 'PM'],
    brief: 'Обновление дизайн-системы: новые токены, компоненты, документация и автоматизация поставки.',
  },
  {
    id: 'LRK-253',
    title: 'Лендинг продукта',
    client: 'Arc',
    status: 'active',
    phase: 1,
    progress: 22,
    deadline: '18.05.2026',
    stack: ['Web', 'Motion', 'Copywriting'],
    roles: ['Дизайнер', 'Копирайтер', 'Инженер'],
    brief: 'Продуктовая страница для нового AI-инструмента. Акцент на сторителлинг и конверсию.',
  },
  {
    id: 'LRK-244',
    title: 'Отчёт о метриках',
    client: 'Авито',
    status: 'done',
    phase: 4,
    progress: 100,
    deadline: '01.04.2026',
    stack: ['Data', 'Figma', 'Keynote'],
    roles: ['Дизайнер', 'Аналитик'],
    brief: 'Квартальный визуальный отчёт по ключевым метрикам продукта для инвесторов.',
  },
];

const STATUS_LABELS = { active: 'В работе', open: 'Открыт набор', done: 'Выполнен' };
const STATUS_COLORS = { active: '#F5E642', open: '#FFFFFF', done: '#555555' };
const PHASE_NAMES   = ['Набор', 'Исслед.', 'Дизайн', 'Разраб.', 'Готово'];

const FILTERS = [
  { id: 'all',    label: 'Все' },
  { id: 'active', label: 'В работе' },
  { id: 'open',   label: 'Открытые' },
  { id: 'done',   label: 'Выполнены' },
];

function ProjectCard({ p, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="proj-card"
      data-reveal="fade"
      style={{ '--i': index % 4 }}
    >
      <div className="proj-card-head">
        <span className="proj-id mono">#{p.id}</span>
        <span className="proj-status mono" style={{ color: STATUS_COLORS[p.status] }}>
          {p.status === 'active' && <span className="proj-dot" />}
          {STATUS_LABELS[p.status]}
        </span>
      </div>

      <h3 className="proj-title">{p.title}</h3>
      <div className="proj-client mono">{p.client}</div>

      <p className="proj-brief">{p.brief}</p>

      <div className="proj-stack">
        {p.stack.map(s => <span key={s} className="proj-tag mono">{s}</span>)}
      </div>

      {p.status !== 'done' && (
        <div className="proj-phases">
          {PHASE_NAMES.map((name, i) => (
            <div key={i} className={`proj-phase ${i < p.phase ? 'done' : i === p.phase ? 'active' : 'pending'}`}>
              <div className="proj-phase-bar" />
              <div className="proj-phase-label mono">{name}</div>
            </div>
          ))}
        </div>
      )}

      {p.status === 'active' && (
        <div className="proj-progress-row">
          <div className="proj-progress-track">
            <div className="proj-progress-fill" style={{ width: `${p.progress}%` }} />
          </div>
          <span className="mono" style={{ color: '#F5E642' }}>{p.progress}%</span>
        </div>
      )}

      <div className="proj-footer">
        <div>
          <div className="mono" style={{ marginBottom: 4 }}>Роли</div>
          <div className="proj-roles">
            {p.roles.map(r => <span key={r} className="proj-role mono">{r}</span>)}
          </div>
        </div>
        {/* <div style={{ textAlign: 'right' }}>
          <div className="mono" style={{ marginBottom: 4 }}>Дедлайн</div>
          <div className="proj-deadline">{p.deadline}</div>
        </div> */}
      </div>

      {p.status === 'open' && (
        <Link to="/apply" className="proj-apply-btn cta-big">Откликнуться →</Link>
      )}
      {p.status === 'active' && (
        <Link to="/apply" className="proj-apply-btn cta-ghost">Подать заявку в команду</Link>
      )}
    </article>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const headRef  = useReveal();
  const bodyRef  = useReveal();   // ← был пропущен
  const statsRef = useReveal();
  const ctaRef   = useReveal();   // ← был пропущен

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.status === filter);

  const counts = {
    active: PROJECTS.filter(p => p.status === 'active').length,
    open:   PROJECTS.filter(p => p.status === 'open').length,
    done:   PROJECTS.filter(p => p.status === 'done').length,
  };

  return (
    <main>
      {/* HERO */}
      <section className="page-hero wrap">
        <div className="hero-meta" data-reveal="fade-plain">
          <span><strong>§ 011</strong> · маркетплейс проектов</span>
          <span>обновлено <strong>25.04.2026</strong></span>
          <span>стр. <strong>05 / 09</strong></span>
        </div>

        <h1 ref={headRef} className="hero-headline hero-headline-wrap">
          <span className="hl-clip">
            <span className="hero-headline-line">
              <span className="outline">Реальные</span>
            </span>
          </span>
          <span className="hl-clip">
            <span className="hero-headline-line">
              <span className="y">проекты.</span>
            </span>
          </span>
        </h1>

        {/* ref подключён — теперь hero-body будет видим */}
        <div ref={bodyRef} className="hero-body" data-reveal="stagger">
          <div className="col-1" data-stagger>
            <div style={{ marginBottom: 18 }}>§ 011.0</div>
            <div>каталог</div>
            <div style={{ marginTop: 18, color: '#F5E642' }}>↓ смотреть ниже</div>
          </div>
          <div className="col-2" data-stagger>
            <p style={{ margin: 0 }}>
              Проекты с чётким брифом, ролями и сроками. Каждый — настоящая задача от реального заказчика, а не учебный кейс.
            </p>
          </div>
          <div className="col-3" data-stagger>
            <Link to="/apply?role=client" className="cta-big">Опубликовать проект →</Link>
            <Link to="/apply" className="cta-ghost">Стать участником</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      {/* <div ref={statsRef} className="hero-stats">
        <div className="stat">
          <div className="stat-num y">{counts.active}</div>
          <div className="stat-label">в работе сейчас</div>
        </div>
        <div className="stat">
          <div className="stat-num">{counts.open}</div>
          <div className="stat-label">открыт набор</div>
        </div>
        <div className="stat">
          <div className="stat-num">{counts.done}</div>
          <div className="stat-label">выполнено</div>
        </div>
        <div className="stat">
          <div className="stat-num y">97%</div>
          <div className="stat-label">доставлено в срок</div>
        </div>
      </div> */}

      {/* FILTERS + GRID */}
      <section className="proj-section wrap">
        <div className="proj-filters">
          <div className="proj-filters-label mono">§ 011.1 · фильтр</div>
          <div className="proj-filter-btns">
            {FILTERS.map(f => (
              <button
                key={f.id}
                className={`proj-filter-btn${filter === f.id ? ' active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
                {f.id !== 'all' && (
                  <span className="proj-filter-count">
                    {f.id === 'active' ? counts.active
                      : f.id === 'open' ? counts.open
                      : counts.done}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="proj-grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA — теперь с ref */}
      <section className="cta-strip wrap">
        <div ref={ctaRef} className="cta-strip-inner" data-reveal="stagger">
          <div data-stagger>
            <div className="mono mono-yellow">§ 011.2</div>
            <h3>Есть свой проект?</h3>
          </div>
          <Link className="cta-big" to="/apply?role=client" data-stagger>
            Опубликовать →
          </Link>
        </div>
      </section>
    </main>
  );
}
