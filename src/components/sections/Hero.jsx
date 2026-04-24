import React from 'react';

export default function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-meta">
        <span><strong>ВЫПУСК 001</strong> · структурная экзекуция</span>
        <span>обновлено <strong>24.04.2026</strong></span>
        <span>стр. <strong>01 / 09</strong></span>
      </div>

      <h1 className="hero-headline">
        Войди <span className="small">в</span> <span className="y">систему.</span><br />
        <span className="outline">Строй</span> <span className="rotate">настоящее.</span>
      </h1>

      <div className="hero-body">
        <div className="col-1">
          <div style={{ marginBottom: 18 }}>§ 001</div>
          <div>манифест</div>
          <div style={{ marginTop: 18, color: '#F5E642' }}>↓ читать ниже</div>
        </div>
        <div className="col-2">
          <p style={{ margin: 0 }}>
            Lark соединяет <em>студентов</em>, <em>команды</em> и <em>клиентов</em> в единую платформу структурной экзекуции. Без хаоса, без фриланс-биржи. Только проекты, роли и результат.
          </p>
        </div>
        <div className="col-3">
          <button className="cta-big">
            Присоединиться <span>→</span>
          </button>
          <button className="cta-ghost">Смотреть проекты</button>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat"><div className="stat-num y">248</div><div className="stat-label">активных проектов</div></div>
        <div className="stat"><div className="stat-num">3 140</div><div className="stat-label">студентов в системе</div></div>
        <div className="stat"><div className="stat-num">512</div><div className="stat-label">команд сформировано</div></div>
        <div className="stat"><div className="stat-num y">97%</div><div className="stat-label">доставлено в срок</div></div>
      </div>
    </section>
  );
}
