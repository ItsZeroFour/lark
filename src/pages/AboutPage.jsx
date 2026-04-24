import React from 'react';
import { Link } from 'react-router-dom';

const PRINCIPLES = [
  { n: '01', t: 'Структура важнее скорости.', b: 'Проект без ролей — это не проект. Мы не запускаем работу, пока не определены ответственные, этапы и критерии сдачи.' },
  { n: '02', t: 'Атрибуция — не украшение.', b: 'Каждая поставка имеет автора. Командные заслуги распределяются между людьми, а не размазываются.' },
  { n: '03', t: 'Обратимость приводит к халтуре.', b: 'То, что можно переделать бесконечно, редко делается хорошо. Дедлайны не условность.' },
  { n: '04', t: 'Прозрачность вместо отчётности.', b: 'Статус проекта виден всем участникам. Презентации и «созвоны ради созвонов» в нашей модели не нужны.' },
  { n: '05', t: 'Тихая технология.', b: 'Инструменты не должны отвлекать. Ларкинс говорит, только когда это имеет значение.' },
];

const TIMELINE = [
  { y: '2024', q: 'II кв.', t: 'Идея', b: 'Собрали первых 12 студентов и 3 клиентов вокруг одного закрытого пилота.' },
  { y: '2024', q: 'IV кв.', t: 'Закрытый бета', b: 'Первые 40 проектов. Формат Proof of Work оформлен как артефакт.' },
  { y: '2025', q: 'II кв.', t: 'Открытие', b: 'Платформа открывается для всех студентов в России.' },
  { y: '2025', q: 'IV кв.', t: 'Ларкинс', b: 'Внутренний проводник запущен как часть продукта, а не «чат-бот».' },
  { y: '2026', q: 'I кв.',  t: 'Масштаб', b: '3 140 активных пользователей, 248 проектов в работе.' },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero wrap">
        <div className="hero-meta">
          <span><strong>§ 008</strong> · о нас</span>
          <span>редакция <strong>2026.04</strong></span>
          <span>стр. <strong>02 / 09</strong></span>
        </div>
        <h1 className="hero-headline">
          Платформа,<br />
          <span className="y">которая</span> <span className="outline">возвращает</span><br />
          структуру <span className="rotate">работе.</span>
        </h1>
      </section>

      <section className="about-intro wrap">
        <div className="about-intro-grid">
          <div className="mono mono-yellow">манифест</div>
          <div className="about-lede">
            <p>Мы считаем, что обучение через реальную работу должно оставлять <em>след</em>. Не сертификат. Не «я участвовал». Строчку в трудовой биографии человека — публичную, привязанную к задаче, нестираемую.</p>
            <p>Lark — это попытка собрать такую биографию с первого дня. Не позже. Не «когда уже есть опыт». Сейчас.</p>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="wrap">
          <div className="features-head">
            <h2>Пять<br />правил.</h2>
            <div className="meta">§ 008.1 · принципы<br />применимы ко всему<br />что мы делаем</div>
          </div>
          <div className="principles-list">
            {PRINCIPLES.map(p => (
              <div className="principle" key={p.n}>
                <div className="principle-num">{p.n}</div>
                <div className="principle-content">
                  <div className="principle-title">{p.t}</div>
                  <div className="principle-body">{p.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-sec">
        <div className="wrap">
          <div className="features-head">
            <h2>История<br />системы.</h2>
            <div className="meta">§ 008.2 · хронология</div>
          </div>
          <div className="timeline">
            {TIMELINE.map((e, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-date"><span className="y">{e.y}</span> · {e.q}</div>
                <div className="tl-title">{e.t}</div>
                <div className="tl-body">{e.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip wrap">
        <div className="cta-strip-inner">
          <div>
            <div className="mono mono-yellow">§ 008.3</div>
            <h3>Хотите в систему?</h3>
          </div>
          <Link className="cta-big" to="/apply">Подать заявку <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}
