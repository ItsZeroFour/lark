import React, { useState, useEffect } from 'react';

export default function LarkinsCallout() {
  const [text, setText] = useState('');
  const full = 'В вашей команде не хватает одной роли. Подобрать дизайнера?';

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
          <div>
            <div className="kicker">§ 006 · проводник</div>
            <h2>Познакомьтесь<br />с <span className="y">Ларкинсом.</span></h2>
            <p>Он подскажет, где у проекта слабое место, какую роль закрыть первой и что уже можно отгружать.</p>
            <p style={{ color: 'var(--lark-fg-3)', fontSize: 14 }}>
              Не чат-бот. Не персонаж. Внутренний голос системы — тихий, короткий, по делу.
            </p>
          </div>
          <div className="terminal">
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
