import React from 'react';
import StudentCard from '../cards/StudentCard';

export default function ForStudents() {
  return (
    <section className="spread" id="projects">
      <div className="wrap">
        <div className="spread-grid">
          <div className="spread-left">
            <div className="kicker">§ 003 · студентам</div>
            <h2>Собери <span className="y">настоящее</span> портфолио.</h2>
            <p className="lede">Не кейсы «сделано для себя». Настоящие проекты — с ролями, сроками и заказчиками.</p>
            <ol className="index-list">
              <li><span className="n">I.</span><span className="t">Реальные проекты, оформленные как продакшн-задачи.</span></li>
              <li><span className="n">II.</span><span className="t">Чёткие роли и зоны ответственности.</span></li>
              <li><span className="n">III.</span><span className="t">Публичная запись вкладов, которая накапливается.</span></li>
              <li><span className="n">IV.</span><span className="t">Заказчики видят вас именно по результату.</span></li>
            </ol>
            <button className="cta-big">Стать участником →</button>
          </div>
          <div><StudentCard /></div>
        </div>
      </div>
    </section>
  );
}
