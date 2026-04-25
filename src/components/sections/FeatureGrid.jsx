import React from 'react';
import { useReveal } from '../../hooks/useReveal';

export default function FeatureGrid() {
  const headRef    = useReveal();
  const columnsRef = useReveal();

  return (
    <section className="features" id="teams">
      <div className="wrap">
        <div ref={headRef} className="features-head" data-reveal="stagger">
          <h2 data-stagger>Три<br />столпа.</h2>
          <div className="meta" data-stagger>§ 005 · архитектура<br />редакция 2026.04<br />под. ред. редакции Lark</div>
        </div>
        <div ref={columnsRef} className="columns" data-reveal="columns">
          <div className="column">
            <div className="column-num">01</div>
            <h3>Proof of Work</h3>
            <p>Профили, которые растут из реальных задач. Не декларация — запись. Каждая строка в профиле привязана к проекту и роли.</p>
            <div className="sub">учёт / атрибуция / история</div>
          </div>
          <div className="column">
            <div className="column-num outline">02</div>
            <h3>Маркетплейс проектов</h3>
            <p>Задачи приходят заранее структурированными: бриф, стек, роли, сроки. Вы не торгуетесь — вы выбираете.</p>
            <div className="sub">бриф / стек / роли / сроки</div>
          </div>
          <div className="column">
            <div className="column-num">03</div>
            <h3>Сборка команд</h3>
            <p>Команда формируется под проект, а не наоборот. Роли видны, состав понятен, лид определён на первом шаге.</p>
            <div className="sub">роли / лид / обязательства</div>
          </div>
        </div>
      </div>
    </section>
  );
}
