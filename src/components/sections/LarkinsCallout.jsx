import React, { useState, useEffect } from 'react';
import { useReveal } from '../../hooks/useReveal';

export default function LarkinsCallout() {
  const [text, setText] = useState('');
  const full = 'В вашей команде не хватает одной роли. Подобрать дизайнера?';
  const leftRef     = useReveal();
  const terminalRef = useReveal();

  useEffect(() => {
    let i = 0, active = true;
    const tick = () => {
      if (!active) return;
      i++;
      setText(full.slice(0, i));
      if (i < full.length) setTimeout(tick, 28);
    };
    const start = setTimeout(tick, 600);
    return () => { active = false; clearTimeout(start); };
  }, []);

  return (
    <section className="assistant">
      <div className="wrap">
        <div className="assistant-grid">
          <div ref={leftRef} data-reveal="stagger">
            <div className="kicker" data-stagger>§ 006 · проводник</div>
            <h2 data-stagger>Познакомьтесь<br />с <span className="y">Ларкинсом.</span></h2>
            <p data-stagger>Он подскажет, где у проекта слабое место, какую роль закрыть первой и что уже можно отгружать.</p>
            <p data-stagger style={{ color: 'var(--lark-fg-3)', fontSize: 14 }}>
              Не чат-бот. Не персонаж. Внутренний голос системы — тихий, короткий, по делу.
            </p>
          </div>
          <div ref={terminalRef} className="terminal" data-reveal="fade">
            <div className="terminal-head">
              <span>сессия · 00482</span>
              <span className="live">в эфире</span>
            </div>
            <div className="terminal-body">
              <div className="t-line"><span className="who">вы</span><span className="msg">Что с проектом #LRK-248?</span></div>
              <div className="t-line out"><span className="who">ларкинс</span><span className="msg">Два этапа закрыты, идёт спринт разработки. 64%, отгрузка через 4 дня.</span></div>
              <div className="t-line"><span className="who">вы</span><span className="msg">Риски?</span></div>
              <div className="t-line out"><span className="who">ларкинс</span><span className="msg">{text}<span className="caret" /></span></div>
            </div>
            <div className="terminal-actions">
              <button>Подобрать</button>
              <button>Отправить команде</button>
              <button>Отложить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
