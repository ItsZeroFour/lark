import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

/* ── Data ── */
const CATEGORIES = [
  { id: 'all',     label: 'Все гайды' },
  { id: 'student', label: 'Студентам' },
  { id: 'client',  label: 'Клиентам' },
  { id: 'team',    label: 'Командам' },
];

const GUIDES = [
  {
    id: 'G-001',
    cat: 'student',
    title: 'Как попасть в первый проект',
    desc: 'Пошаговый маршрут от регистрации до первого коммита в системе Proof of Work.',
    time: '8 мин',
    tags: ['старт', 'профиль', 'отклик'],
  },
  {
    id: 'G-002',
    cat: 'student',
    title: 'Как оформить Proof of Work',
    desc: 'Что считается вкладом, как привязать артефакт к задаче и почему это важно для вашей биографии.',
    time: '6 мин',
    tags: ['pow', 'атрибуция', 'артефакты'],
  },
  {
    id: 'G-003',
    cat: 'student',
    title: 'Роли на платформе',
    desc: 'Чем дизайнер отличается от UX-исследователя, зачем нужен PM и как выбрать свою специализацию.',
    time: '5 мин',
    tags: ['роли', 'специализация'],
  },
  {
    id: 'G-004',
    cat: 'client',
    title: 'Как опубликовать проект',
    desc: 'Требования к брифу, как описать роли и этапы, чтобы получить сильную команду быстро.',
    time: '10 мин',
    tags: ['бриф', 'публикация', 'роли'],
  },
  {
    id: 'G-005',
    cat: 'client',
    title: 'Наряд-система: как следить за прогрессом',
    desc: 'Разбор карточки проекта, этапов, статусов и инструментов коммуникации с командой.',
    time: '7 мин',
    tags: ['наряд', 'этапы', 'статусы'],
  },
  {
    id: 'G-006',
    cat: 'client',
    title: 'Как принять результат',
    desc: 'Критерии приёмки, закрытие этапа, оценка команды и финальный отчёт.',
    time: '5 мин',
    tags: ['приёмка', 'отчёт', 'оценка'],
  },
  {
    id: 'G-007',
    cat: 'team',
    title: 'Как собрать команду с нуля',
    desc: 'Правила комплектации, баланс ролей, назначение лида и первый синк.',
    time: '9 мин',
    tags: ['сборка', 'лид', 'роли'],
  },
  {
    id: 'G-008',
    cat: 'team',
    title: 'Ведение спринта внутри Lark',
    desc: 'Как разбить этап на задачи, фиксировать прогресс и передавать контекст между участниками.',
    time: '11 мин',
    tags: ['спринт', 'задачи', 'контекст'],
  },
  {
    id: 'G-009',
    cat: 'team',
    title: 'Ларкинс в работе команды',
    desc: 'Когда слушать Ларкинса, как интерпретировать его подсказки и что делать с предупреждениями.',
    time: '6 мин',
    tags: ['ларкинс', 'ai', 'подсказки'],
  },
];

/* ── Guide Card ── */
function GuideCard({ g, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="guide-card"
      data-reveal="fade"
      style={{ '--i': index % 3 }}
    >
      <div className="guide-card-head">
        <span className="mono" style={{ color: 'var(--lark-fg-4)' }}>#{g.id}</span>
        <span className="mono" style={{ color: 'var(--lark-fg-3)' }}>{g.time} чтения</span>
      </div>
      <h3 className="guide-title">{g.title}</h3>
      <p className="guide-desc">{g.desc}</p>
      <div className="guide-tags">
        {g.tags.map(t => (
          <span key={t} className="proj-tag mono">{t}</span>
        ))}
      </div>
      <Link to="/docs" className="guide-link mono">Читать гайд →</Link>
    </article>
  );
}

/* ── Page ── */
export default function GuidesPage() {
  const [filter, setFilter] = useState('all');
  const headRef = useReveal();
  const bodyRef = useReveal();
  const ctaRef  = useReveal();

  const filtered = filter === 'all'
    ? GUIDES
    : GUIDES.filter(g => g.cat === filter);

  const counts = {
    student: GUIDES.filter(g => g.cat === 'student').length,
    client:  GUIDES.filter(g => g.cat === 'client').length,
    team:    GUIDES.filter(g => g.cat === 'team').length,
  };

  return (
    <main>
      {/* HERO */}
      <section className="page-hero wrap">
        <div className="hero-meta" data-reveal="fade-plain">
          <span><strong>§ 012</strong> · гайды и обучение</span>
          <span>обновлено <strong>25.04.2026</strong></span>
          <span>стр. <strong>06 / 09</strong></span>
        </div>

        <h1 ref={headRef} className="hero-headline hero-headline-wrap">
          <span className="hl-clip">
            <span className="hero-headline-line">
              <span className="outline">Как</span> это
            </span>
          </span>
          <span className="hl-clip">
            <span className="hero-headline-line">
              <span className="y">работает.</span>
            </span>
          </span>
        </h1>

        <div ref={bodyRef} className="hero-body" data-reveal="stagger">
          <div className="col-1" data-stagger>
            <div style={{ marginBottom: 18 }}>§ 012.0</div>
            <div>инструкции</div>
            <div style={{ marginTop: 18, color: '#F5E642' }}>↓ гайды ниже</div>
          </div>
          <div className="col-2" data-stagger>
            <p style={{ margin: 0 }}>
              Короткие и конкретные инструкции для каждой роли в системе. Никакой воды — только шаги, которые реально нужны.
            </p>
          </div>
          <div className="col-3" data-stagger>
            <Link to="/docs" className="cta-big">Документация →</Link>
            <Link to="/apply" className="cta-ghost">Начать работу</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="hero-stats" data-reveal="stagger">
        <div className="stat">
          <div className="stat-num y">{GUIDES.length}</div>
          <div className="stat-label">гайдов в базе</div>
        </div>
        <div className="stat">
          <div className="stat-num">{counts.student}</div>
          <div className="stat-label">для студентов</div>
        </div>
        <div className="stat">
          <div className="stat-num">{counts.client}</div>
          <div className="stat-label">для клиентов</div>
        </div>
        <div className="stat">
          <div className="stat-num y">{counts.team}</div>
          <div className="stat-label">для команд</div>
        </div>
      </div>

      {/* GUIDES GRID */}
      <section className="proj-section wrap">
        <div className="proj-filters">
          <div className="proj-filters-label mono">§ 012.1 · категория</div>
          <div className="proj-filter-btns">
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                className={`proj-filter-btn${filter === c.id ? ' active' : ''}`}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
                {c.id !== 'all' && (
                  <span className="proj-filter-count">
                    {counts[c.id]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="guides-grid">
          {filtered.map((g, i) => (
            <GuideCard key={g.id} g={g} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip wrap">
        <div ref={ctaRef} className="cta-strip-inner" data-reveal="stagger">
          <div data-stagger>
            <div className="mono mono-yellow">§ 012.2</div>
            <h3>Нет ответа на вопрос?</h3>
          </div>
          <Link className="cta-big" to="/docs" data-stagger>
            Документация →
          </Link>
        </div>
      </section>
    </main>
  );
}
