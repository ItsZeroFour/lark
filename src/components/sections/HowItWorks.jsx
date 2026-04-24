import React from 'react';

export default function HowItWorks() {
  return (
    <section className="schematic" id="platform">
      <div className="wrap">
        <div className="schematic-header">
          <div>
            <div className="mono mono-yellow">§ 002 · процесс</div>
            <h2>Как<br />работает<br />система.</h2>
          </div>
          <aside>
            Три фазы. Между ними — обязательная передача контекста.{' '}
            <b>Ни один шаг не пропускается.</b>
          </aside>
        </div>

        <div className="schematic-diagram">
          <div className="schematic-row">
            <div className="node">
              <div className="node-num">Фаза 01 / Заказ</div>
              <div className="node-title">Клиент публикует проект.</div>
              <div className="node-body">Бриф, роли, стек и сроки фиксируются до старта. Нет размытых ожиданий.</div>
              <span className="node-tag">вход</span>
            </div>
            <div className="node">
              <div className="node-num">Фаза 02 / Сборка</div>
              <div className="node-title">Команда формируется вокруг него.</div>
              <div className="node-body">Студенты и команды откликаются. Роли заполняются осознанно, а не по остатку.</div>
              <span className="node-tag">обработка</span>
            </div>
            <div className="node">
              <div className="node-num">Фаза 03 / Выпуск</div>
              <div className="node-title">Результат отгружен. Proof of Work записан.</div>
              <div className="node-body">Каждый вклад закреплён за автором. Навсегда, без перезаписи.</div>
              <span className="node-tag">выход</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
