import React from 'react';
import { Link } from 'react-router-dom';

const COLS = [
  {
    h: 'Платформа',
    l: [
      ['Проекты',       '/projects'],
      ['Команды',       '/#teams'],
      ['Proof of Work', '/#platform'],
      ['Ларкинс',       '/'],
    ],
  },
  {
    h: 'Компания',
    l: [
      ['О нас',   '/about'],
      ['Команда', '/team'],
      ['Журнал',  '#'],
      ['Пресса',  '#'],
    ],
  },
  {
    h: 'Материалы',
    l: [
      ['Документация', '/docs'],
      ['Гайды',        '/guides'],
      ['Сообщество',   '#'],
      ['Поддержка',    '#'],
    ],
  },
  {
    h: 'Правовое',
    l: [
      ['Условия',    '#'],
      ['Политика',   '#'],
      ['Безопасность', '#'],
      ['Куки',       '#'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="colophon">
      <div className="wrap">
        <div className="colophon-grid">
          <div className="colophon-brand">
            <Link to="/" className="wordmark" style={{ fontSize: 48 }}>
              Lark<span className="dot" style={{ width: 16, height: 16 }} />
            </Link>
            <p>Платформа, где талант встречает структуру. Выпускается ежедневно. Читается внимательно.</p>
            <div className="badges">
              <span>RU · 2026</span>
              <span>v 1.0.0</span>
            </div>
          </div>

          {COLS.map(c => (
            <div className="colophon-col" key={c.h}>
              <div className="h">{c.h}</div>
              {c.l.map(([label, href]) => {
                const isInternal = href.startsWith('/') && !href.startsWith('/#');
                return isInternal
                  ? <Link key={label} to={href}>{label}</Link>
                  : <a key={label} href={href}>{label}</a>;
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="colophon-bar">
        <span className="c">© 2026 LarkFrilance</span>
        <span className="center hide-sm">структура &gt; хаос</span>
        <span className="right">выпуск № 001</span>
      </div>
    </footer>
  );
}
