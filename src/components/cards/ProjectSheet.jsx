import React from 'react';

export default function ProjectSheet() {
  return (
    <div className="sheet">
      <div className="sheet-head">
        <span>НАРЯД · #LRK-248</span>
        <span>ОТГРУЗКА 28.04</span>
      </div>
      <div className="sheet-body">
        <h3 className="sheet-title">Переделка онбординга</h3>
        <div className="sheet-sub">клиент: ООО «Поток» · лид: М. Климова</div>

        <div className="milestone-rail">
          <div className="milestone done">
            <div className="milestone-label">Этап 01</div>
            <div className="milestone-name">Исследование</div>
          </div>
          <div className="milestone done">
            <div className="milestone-label">Этап 02</div>
            <div className="milestone-name">Ревью дизайна</div>
          </div>
          <div className="milestone active">
            <div className="milestone-label">Этап 03 · сейчас</div>
            <div className="milestone-name">Спринт разработки</div>
          </div>
          <div className="milestone pending">
            <div className="milestone-label">Этап 04</div>
            <div className="milestone-name">QA и релиз</div>
          </div>
        </div>

        <div className="sheet-meta">
          <div><div className="k">Прогресс</div><div className="v y">64%</div></div>
          <div><div className="k">Команда</div><div className="v">04</div></div>
          <div><div className="k">Осталось</div><div className="v">04д</div></div>
        </div>

        <div className="team-row">
          <div className="team-box y"><div className="init">МК</div><div className="role">лид</div></div>
          <div className="team-box"><div className="init">ЮП</div><div className="role">инж.</div></div>
          <div className="team-box"><div className="init">РС</div><div className="role">инж.</div></div>
          <div className="team-box"><div className="init">ЛТ</div><div className="role">пм</div></div>
        </div>
      </div>
    </div>
  );
}
