import React from 'react';
import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="finale" id="finale">
      <div className="wrap finale-inner">
        <div className="meta">§ 007 · приглашение</div>
        <h2>Готовы<br />строить<br />по-настоящему?</h2>
        <div className="finale-ctas">
          <Link className="dark" to="/apply">Я студент →</Link>
          <Link className="darkline" to="/apply?role=client">Я клиент →</Link>
        </div>
      </div>
    </section>
  );
}
