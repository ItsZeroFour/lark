import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

/* ── Sections data ── */
const SECTIONS = [
  {
    id: 'overview',
    num: '§ 013.1',
    title: 'Обзор платформы',
    items: [
      { id: 'D-001', title: 'Архитектура системы',       desc: 'Как устроена платформа изнутри: роли, потоки данных, границы модулей.',    badge: 'КОНЦЕПТ' },
      { id: 'D-002', title: 'Глоссарий терминов',        desc: 'Proof of Work, наряд, этап, лид — определения всех ключевых понятий.',       badge: 'СПРАВКА' },
      { id: 'D-003', title: 'Жизненный цикл проекта',    desc: 'От публикации брифа до финального отчёта: все фазы и переходы между ними.',  badge: 'ПРОЦЕСС' },
    ],
  },
  {
    id: 'api',
    num: '§ 013.2',
    title: 'API и интеграции',
    items: [
      { id: 'D-004', title: 'REST API · Projects',       desc: 'Эндпоинты для создания, чтения и обновления проектов и нарядов.',            badge: 'API' },
      { id: 'D-005', title: 'REST API · Users & Roles',  desc: 'Управление участниками, роли в проекте, привязка к Proof of Work.',          badge: 'API' },
      { id: 'D-006', title: 'Webhooks',                  desc: 'Подписка на события платформы: смена этапа, новый участник, завершение.',     badge: 'API' },
      { id: 'D-007', title: 'Интеграция с Notion',       desc: 'Синхронизация нарядов с рабочим пространством Notion через официальный коннектор.', badge: 'ИНТЕГР.' },
      { id: 'D-008', title: 'Интеграция с GitHub',       desc: 'Привязка коммитов и PR к задачам Lark для автоматической атрибуции вкладов.', badge: 'ИНТЕГР.' },
    ],
  },
  {
    id: 'larkins',
    num: '§ 013.3',
    title: 'Ларкинс',
    items: [
      { id: 'D-009', title: 'Введение в Ларкинса',       desc: 'Принципы работы внутреннего проводника: когда говорит, почему молчит.',      badge: 'КОНЦЕПТ' },
      { id: 'D-010', title: 'Кастомизация поведения',    desc: 'Настройка частоты и приоритетов подсказок на уровне проекта и команды.',     badge: 'НАСТР.' },
      { id: 'D-011', title: 'Larkins API',               desc: 'Программный доступ к сигналам и рекомендациям Ларкинса.',                    badge: 'API' },
    ],
  },
  {
    id: 'security',
    num: '§ 013.4',
    title: 'Безопасность и данные',
    items: [
      { id: 'D-012', title: 'Политика хранения данных',  desc: 'Где хранятся данные, сроки хранения, права на удаление.',                   badge: 'ПРАВИЛА' },
      { id: 'D-013', title: 'Аутентификация и доступ',   desc: 'OAuth 2.0, SSO, управление токенами и двухфакторная аутентификация.',        badge: 'БЕЗОПАСН.' },
      { id: 'D-014', title: 'Аудит-лог',                 desc: 'Полный журнал действий в проекте — кто, что и когда изменил.',               badge: 'СПРАВКА' },
    ],
  },
];

const BADGE_COLORS = {
  'API':      { bg: 'rgba(245,230,66,0.12)', color: '#F5E642' },
  'КОНЦЕПТ':  { bg: 'rgba(255,255,255,0.06)', color: '#ccc' },
  'СПРАВКА':  { bg: 'rgba(255,255,255,0.06)', color: '#ccc' },
  'ПРОЦЕСС':  { bg: 'rgba(255,255,255,0.06)', color: '#ccc' },
  'ИНТЕГР.':  { bg: 'rgba(245,230,66,0.08)', color: '#F5E642' },
  'НАСТР.':   { bg: 'rgba(255,255,255,0.06)', color: '#ccc' },
  'ПРАВИЛА':  { bg: 'rgba(255,255,255,0.06)', color: '#ccc' },
  'БЕЗОПАСН.':{ bg: 'rgba(255,255,255,0.06)', color: '#ccc' },
};

/* ── Doc Item ── */
function DocItem({ item, index }) {
  const ref = useReveal();
  const badge = BADGE_COLORS[item.badge] || { bg: 'rgba(255,255,255,0.06)', color: '#ccc' };
  return (
    <div
      ref={ref}
      className="doc-item"
      data-reveal="fade"
      style={{ '--i': index % 5 }}
    >
      <div className="doc-item-head">
        <span className="mono" style={{ color: 'var(--lark-fg-4)' }}>#{item.id}</span>
        <span
          className="mono"
          style={{
            background: badge.bg,
            color: badge.color,
            padding: '2px 8px',
            fontSize: 9,
            letterSpacing: '0.12em',
          }}
        >
          {item.badge}
        </span>
      </div>
      <h3 className="doc-item-title">{item.title}</h3>
      <p className="doc-item-desc">{item.desc}</p>
      <span className="guide-link mono">Открыть →</span>
    </div>
  );
}

/* ── Page ── */
export default function DocsPage() {
  const headRef = useReveal();
  const bodyRef = useReveal();
  const ctaRef  = useReveal();

  const totalDocs = SECTIONS.reduce((s, sec) => s + sec.items.length, 0);

  return (
    <main>
      {/* HERO */}
      <section className="page-hero wrap">
        <div className="hero-meta" data-reveal="fade-plain">
          <span><strong>§ 013</strong> · документация</span>
          <span>версия <strong>1.0.0</strong></span>
          <span>стр. <strong>07 / 09</strong></span>
        </div>

        <h1 ref={headRef} className="hero-headline hero-headline-wrap">
          <span className="hl-clip">
            <span className="hero-headline-line">
              <span className="y">Технический</span>
            </span>
          </span>
          <span className="hl-clip">
            <span className="hero-headline-line">
              <span className="outline">справочник.</span>
            </span>
          </span>
        </h1>

        <div ref={bodyRef} className="hero-body" data-reveal="stagger">
          <div className="col-1" data-stagger>
            <div style={{ marginBottom: 18 }}>§ 013.0</div>
            <div>API · концепты</div>
            <div style={{ marginTop: 18, color: '#F5E642' }}>↓ разделы ниже</div>
          </div>
          <div className="col-2" data-stagger>
            <p style={{ margin: 0 }}>
              Полная документация платформы: концептуальные объяснения, эндпоинты API, правила интеграций и политики безопасности.
            </p>
          </div>
          <div className="col-3" data-stagger>
            <Link to="/guides" className="cta-big">Гайды →</Link>
            <Link to="/apply" className="cta-ghost">Начать работу</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="hero-stats" data-reveal="stagger">
        <div className="stat">
          <div className="stat-num y">{totalDocs}</div>
          <div className="stat-label">статей в базе</div>
        </div>
        <div className="stat">
          <div className="stat-num">{SECTIONS.length}</div>
          <div className="stat-label">разделов</div>
        </div>
        <div className="stat">
          <div className="stat-num">v1.0</div>
          <div className="stat-label">текущая версия</div>
        </div>
        <div className="stat">
          <div className="stat-num y">REST</div>
          <div className="stat-label">формат API</div>
        </div>
      </div>

      {/* DOC SECTIONS */}
      <section className="proj-section wrap">
        {SECTIONS.map(sec => {
          const secRef = useReveal(); // eslint-disable-line
          return (
            <div key={sec.id} className="doc-section">
              <div ref={secRef} className="doc-section-header" data-reveal="fade">
                <div className="mono mono-yellow">{sec.num}</div>
                <h2 className="doc-section-title">{sec.title}</h2>
              </div>
              <div className="doc-grid">
                {sec.items.map((item, i) => (
                  <DocItem key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="cta-strip wrap">
        <div ref={ctaRef} className="cta-strip-inner" data-reveal="stagger">
          <div data-stagger>
            <div className="mono mono-yellow">§ 013.5</div>
            <h3>Нашли ошибку в доках?</h3>
          </div>
          <Link className="cta-big" to="/apply" data-stagger>
            Написать нам →
          </Link>
        </div>
      </section>
    </main>
  );
}
