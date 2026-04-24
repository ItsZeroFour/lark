import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function ApplyPage() {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') === 'client' ? 'client' : 'student';

  const [form, setForm] = useState({
    role: initialRole,
    name: '', email: '', city: '', skill: '', link: '', message: '', consent: false,
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (k, v) => setForm(s => ({ ...s, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = true;
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) er.email = true;
    if (!form.consent) er.consent = true;
    if (form.role === 'student' && !form.skill.trim()) er.skill = true;
    if (form.role === 'client' && !form.message.trim()) er.message = true;
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <main className="apply-sec wrap">
        <div className="hero-meta" style={{ marginBottom: 48 }}>
          <span><strong>§ 010</strong> · заявка</span>
          <span>стр. <strong>04 / 09</strong></span>
        </div>
        <div className="form-sheet form-sent">
          <div className="form-stamp-big">ПРИНЯТО</div>
          <div className="mono mono-yellow" style={{ marginBottom: 16 }}>
            Талон № 00{Math.floor(Math.random() * 900) + 100}
          </div>
          <h2 className="display" style={{ fontSize: 56, margin: '0 0 16px' }}>Заявка в системе.</h2>
          <p style={{ fontSize: 17, color: 'var(--lark-fg-2)', lineHeight: 1.5, maxWidth: '42ch' }}>
            Мы свяжемся с вами на адрес <b>{form.email}</b> в течение двух рабочих дней.
            До тех пор заявка находится в статусе «в обработке».
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <Link className="cta-ghost" to="/">← На главную</Link>
            <button className="cta-ghost" onClick={() => {
              setSent(false);
              setForm(f => ({ ...f, name: '', email: '', city: '', skill: '', link: '', message: '' }));
            }}>
              Новая заявка
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="apply-sec wrap">
      <div className="hero-meta" style={{ marginBottom: 48 }}>
        <span><strong>§ 010</strong> · заявка</span>
        <span>редакция <strong>2026.04</strong></span>
        <span>стр. <strong>04 / 09</strong></span>
      </div>

      <form className="form-sheet" onSubmit={submit} noValidate>
        <div className="form-head">
          <span>ЗАЯВКА · ФОРМА F-01</span>
          <span className="y">ЧЕРНОВИК</span>
        </div>

        <div className="form-body">
          <div className="form-section">
            <div className="form-section-label">01 · Кто вы</div>
            <div className="role-switch">
              <label className={'role-opt' + (form.role === 'student' ? ' on' : '')}>
                <input type="radio" name="role" checked={form.role === 'student'} onChange={() => update('role', 'student')} />
                <span className="role-t">Студент / специалист</span>
                <span className="role-s">Ищу проекты для Proof of Work</span>
              </label>
              <label className={'role-opt' + (form.role === 'client' ? ' on' : '')}>
                <input type="radio" name="role" checked={form.role === 'client'} onChange={() => update('role', 'client')} />
                <span className="role-t">Клиент / компания</span>
                <span className="role-s">Хочу опубликовать проект</span>
              </label>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-label">02 · Контакты</div>
            <div className="form-row">
              <label className={'field' + (errors.name ? ' is-err' : '')}>
                <span className="fk">Имя {form.role === 'client' ? 'и компания' : 'и фамилия'}</span>
                <input type="text" value={form.name} onChange={e => update('name', e.target.value)}
                  placeholder={form.role === 'client' ? 'Иван Петров, ООО «Поток»' : 'Иван Петров'} />
              </label>
              <label className={'field' + (errors.email ? ' is-err' : '')}>
                <span className="fk">Электронная почта</span>
                <input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="ivan@example.ru" />
              </label>
            </div>
            <div className="form-row">
              <label className="field">
                <span className="fk">Город</span>
                <input type="text" value={form.city} onChange={e => update('city', e.target.value)} placeholder="Санкт-Петербург" />
              </label>
              <label className="field">
                <span className="fk">Ссылка <span className="mono" style={{ opacity: .5 }}>(необязательно)</span></span>
                <input type="text" value={form.link} onChange={e => update('link', e.target.value)}
                  placeholder={form.role === 'client' ? 'сайт компании' : 'портфолио / Behance / GitHub'} />
              </label>
            </div>
          </div>

          {form.role === 'student' ? (
            <div className="form-section">
              <div className="form-section-label">03 · Роль в системе</div>
              <label className={'field' + (errors.skill ? ' is-err' : '')}>
                <span className="fk">Основная специализация</span>
                <input type="text" value={form.skill} onChange={e => update('skill', e.target.value)} placeholder="Дизайнер · продуктовый · motion" />
              </label>
              <label className="field" style={{ marginTop: 12 }}>
                <span className="fk">Коротко о себе <span className="mono" style={{ opacity: .5 }}>(до 240 символов)</span></span>
                <textarea rows="3" maxLength="240" value={form.message} onChange={e => update('message', e.target.value)} placeholder="Что делаете, на каких проектах работали." />
              </label>
            </div>
          ) : (
            <div className="form-section">
              <div className="form-section-label">03 · О проекте</div>
              <label className={'field' + (errors.message ? ' is-err' : '')}>
                <span className="fk">Задача и объём</span>
                <textarea rows="4" value={form.message} onChange={e => update('message', e.target.value)} placeholder="Что нужно сделать, какие роли требуются, сроки." />
              </label>
            </div>
          )}

          <div className="form-section form-foot">
            <label className={'consent' + (errors.consent ? ' is-err' : '')}>
              <input type="checkbox" checked={form.consent} onChange={e => update('consent', e.target.checked)} />
              <span className="ck" />
              <span>Согласен на обработку персональных данных.</span>
            </label>
            <button type="submit" className="cta-big">
              Отправить талон <span>→</span>
            </button>
          </div>

          {Object.keys(errors).length > 0 && (
            <div className="form-errors">Проверьте заполнение обязательных полей.</div>
          )}
        </div>
      </form>
    </main>
  );
}
