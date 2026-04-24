import React from 'react';
import { Link } from 'react-router-dom';
import TeamCard from '../components/cards/TeamCard';

const TEAM = [
  { initials: 'ДК', name: 'Дмитрий Каримов',  role: 'Сооснователь · CEO',          city: 'Москва',          bio: 'До Lark — продуктовый директор в «Потоке». 12 лет в EdTech и рабочих процессах.',                          link: 'linkedin.com/in/dkarimov' },
  { initials: 'АС', name: 'Анна Соловьёва',    role: 'Сооснователь · CPO',          city: 'Берлин',          bio: 'Вела продукт в Miro и Setka. Отвечает за Proof of Work и архитектуру ролей.',                           link: 'annasolovyeva.com' },
  { initials: 'МК', name: 'Майя Климова',       role: 'Head of Design',              city: 'Санкт-Петербург', bio: 'Собирала первые визуальные принципы платформы. Ведёт бренд и дизайн-систему.',                          link: 'behance.net/mayak' },
  { initials: 'ЮП', name: 'Юрий Паньков',       role: 'Head of Engineering',         city: 'Тбилиси',         bio: 'Раньше — бэкенд в Selectel. Автор внутренней архитектуры проектов и наряд-системы.',                    link: 'github.com/ypankov' },
  { initials: 'РС', name: 'Ростислав Снеткин',  role: 'Инженер платформы',           city: 'Казань',          bio: 'Отвечает за инфраструктуру Ларкинса и интеграции с рабочими инструментами.',                           link: 'github.com/rsnetkin' },
  { initials: 'ЛТ', name: 'Лиля Терехова',      role: 'Продакт-менеджер',            city: 'Новосибирск',     bio: 'Ведёт маркетплейс и процесс сборки команд. Бывший PM в «Яндекс.Практикум».',                            link: 'linkedin.com/in/lterekhova' },
  { initials: 'НГ', name: 'Никита Громов',       role: 'Исследователь',               city: 'Ереван',          bio: 'Качественные и количественные исследования студентов и клиентов. PhD по соц. психологии.',               link: 'nikita-gromov.ru' },
  { initials: 'ВЖ', name: 'Варвара Жукова',      role: 'Комьюнити и партнёрства',     city: 'Москва',          bio: 'Связывает Lark с вузами, студиями и компаниями. Принесла 80+ партнёров за год.',                        link: 'linkedin.com/in/vzhukova' },
];

const ADVISORS = [
  { initials: 'ИВ', name: 'Илья Воронцов',   role: 'Советник', note: 'Основатель «Поток»' },
  { initials: 'СБ', name: 'Светлана Белова',  role: 'Советник', note: 'Экс-директор Сколково EdTech' },
  { initials: 'МЛ', name: 'Максим Лурье',     role: 'Советник', note: 'Продуктовый лид в Arc' },
];

export default function TeamPage() {
  return (
    <main>
      <section className="page-hero wrap">
        <div className="hero-meta">
          <span><strong>§ 009</strong> · команда</span>
          <span>редакция <strong>2026.04</strong></span>
          <span>стр. <strong>03 / 09</strong></span>
        </div>
        <h1 className="hero-headline">
          <span className="outline">Восемь</span> <span className="y">человек</span><br />
          и <span className="rotate">три</span> советника.
        </h1>
        <div className="hero-body">
          <div className="col-1">
            <div>§ 009.0</div>
            <div>костяк</div>
            <div style={{ marginTop: 18, color: '#F5E642' }}>↓ люди ниже</div>
          </div>
          <div className="col-2">
            <p style={{ margin: 0 }}>
              Небольшая команда с большими обязательствами. Каждый работает в системе, которую строит: публикует проекты, ведёт команды, записывает <em>Proof of Work</em>.
            </p>
          </div>
          <div className="col-3">
            <Link className="cta-big" to="/apply">Работать с нами →</Link>
            <Link className="cta-ghost" to="/about">О компании</Link>
          </div>
        </div>
      </section>

      <section className="team-sec">
        <div className="wrap">
          <div className="features-head">
            <h2>Команда.</h2>
            <div className="meta">§ 009.1 · основной состав<br />{TEAM.length} человек</div>
          </div>
          <div className="team-grid-real">
            {TEAM.map(p => <TeamCard key={p.name} p={p} />)}
          </div>
        </div>
      </section>

      <section className="advisors-sec">
        <div className="wrap">
          <div className="features-head">
            <h2>Советники.</h2>
            <div className="meta">§ 009.2 · внешние эксперты</div>
          </div>
          <div className="advisors-grid">
            {ADVISORS.map(a => (
              <div className="advisor" key={a.name}>
                <div className="advisor-photo">{a.initials}</div>
                <div>
                  <div className="advisor-name">{a.name}</div>
                  <div className="mono" style={{ color: 'var(--lark-fg-3)', marginTop: 4 }}>{a.role} · {a.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip wrap">
        <div className="cta-strip-inner">
          <div>
            <div className="mono mono-yellow">§ 009.3</div>
            <h3>Откликнуться в команду.</h3>
          </div>
          <Link className="cta-big" to="/apply">Вакансии и отклик <span>→</span></Link>
        </div>
      </section>
    </main>
  );
}
