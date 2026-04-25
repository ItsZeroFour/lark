import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';

export default function Hero() {
  const headlineRef = useReveal();
  const metaRef     = useReveal();
  const statsRef    = useReveal();
  const bodyRef     = useReveal();

  return (
    <section className="hero wrap" id="top">
      <div ref={metaRef} className="hero-meta" data-reveal="fade-plain">
        <span><strong>ВЫПУСК 001</strong> · структурная экзекуция</span>
        <span>обновлено <strong>24.04.2026</strong></span>
        <span>стр. <strong>01 / 09</strong></span>
      </div>

      {/*
        Убрали .rotate — вызывал постоянный overflow на desktop.
        Убрали .small superscript «в» — вертикальный сдвиг рвал строки.
        Каждая строка в своём .hl-clip (overflow:hidden) для clip-анимации.
      */}
      <h1 ref={headlineRef} className="hero-headline hero-headline-wrap">
        <span className="hl-clip">
          <span className="hero-headline-line">
            Войди в <span className="y">систему.</span>
          </span>
        </span>
        <span className="hl-clip">
          <span className="hero-headline-line">
            <span className="outline">Строй</span> настоящее.
          </span>
        </span>
      </h1>

      <div ref={bodyRef} className="hero-body" data-reveal="stagger">
        <div className="col-1" data-stagger>
          <div style={{ marginBottom: 18 }}>§ 001</div>
          <div>манифест</div>
          <div style={{ marginTop: 18, color: '#F5E642' }}>↓ читать ниже</div>
        </div>
        <div className="col-2" data-stagger>
          <p style={{ margin: 0 }}>
            Lark соединяет <em>студентов</em>, <em>команды</em> и <em>клиентов</em> в единую платформу структурной экзекуции. Без хаоса, без фриланс-биржи. Только проекты, роли и результат.
          </p>
        </div>
        <div className="col-3" data-stagger>
          <Link to="/apply" className="cta-big">Присоединиться <span>→</span></Link>
          <Link to="/projects" className="cta-ghost">Смотреть проекты</Link>
        </div>
      </div>

      <div ref={statsRef} className="hero-stats">
        <div className="stat"><div className="stat-num y">248</div><div className="stat-label">активных проектов</div></div>
        <div className="stat"><div className="stat-num">3 140</div><div className="stat-label">студентов в системе</div></div>
        <div className="stat"><div className="stat-num">512</div><div className="stat-label">команд сформировано</div></div>
        <div className="stat"><div className="stat-num y">97%</div><div className="stat-label">доставлено в срок</div></div>
      </div>
    </section>
  );
}
