import React from 'react';

export default function StudentCard() {
  return (
    <div className="id-card">
      <div className="id-card-header">
        <span>LARK · ID 00482</span>
        <span className="y">АКТИВЕН</span>
      </div>
      <div className="id-card-body">
        <div className="photo-block">МК</div>
        <div className="id-info">
          <h3>Майя Климова</h3>
          <div className="id-field"><span className="k">Роль</span><span>Дизайнер · лид</span></div>
          <div className="id-field"><span className="k">Город</span><span>Санкт-Петербург</span></div>
          <div className="id-field"><span className="k">Опыт</span><span>2 480 XP</span></div>
          <div className="id-field"><span className="k">В системе</span><span>с марта 2025</span></div>
        </div>
      </div>
      <div className="id-section">
        <div className="id-section-label">Навыки</div>
        <div className="id-skills">
          {['Figma', 'Motion', 'React', 'Исследование', 'TypeScript', 'Бренд'].map(s => (
            <span className="id-skill" key={s}>{s}</span>
          ))}
        </div>
      </div>
      <div className="id-section">
        <div className="id-section-label">Proof of Work · 3 записи</div>
        <div className="id-record"><span className="i">#LRK-248</span><span className="p">Переделка онбординга</span><span className="s">64%</span></div>
        <div className="id-record"><span className="i">#LRK-201</span><span className="p">Аналитическая панель</span><span className="s">100%</span></div>
        <div className="id-record"><span className="i">#LRK-176</span><span className="p">Поиск v3</span><span className="s">38%</span></div>
      </div>
      <div className="id-stamp">ПОДТВЕРЖДЕНО</div>
    </div>
  );
}
