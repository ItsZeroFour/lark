import React from 'react';
import ProjectSheet from '../cards/ProjectSheet';
import { useReveal } from '../../hooks/useReveal';

export default function ForClients() {
  const cardRef = useReveal();
  const leftRef = useReveal();

  return (
    <section className="spread reverse" id="clients">
      <div className="wrap">
        <div className="spread-grid">
          <div ref={cardRef} data-reveal="fade">
            <ProjectSheet />
          </div>
          <div ref={leftRef} data-reveal="list">
            <div className="spread-left">
              <div className="kicker">§ 004 · клиентам</div>
              <h2>Команда <span className="y">вместо</span> фриланса.</h2>
              <p className="lede">Вы получаете не подрядчика, а собранную команду с закреплёнными ролями и прозрачным движением по этапам.</p>
              <ol className="index-list">
                <li><span className="n">I.</span><span className="t">Объём работ, роли и вехи фиксируются до старта.</span></li>
                <li><span className="n">II.</span><span className="t">Один наряд: команда, прогресс, сдача.</span></li>
                <li><span className="n">III.</span><span className="t">Каждая поставка привязана к исполнителю.</span></li>
                <li><span className="n">IV.</span><span className="t">Ни одна договорённость не теряется в переписке.</span></li>
              </ol>
              <button className="cta-big">Опубликовать проект →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
