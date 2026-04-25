import { useEffect, useRef } from 'react';

/**
 * useReveal — подключает IntersectionObserver к корневому элементу.
 * Когда элемент входит во viewport, на него добавляется класс .is-visible.
 * На дочерние элементы с атрибутом data-reveal="stagger" применяется
 * задержка через CSS-переменную --i.
 *
 * @param {object} options — параметры observer
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Нумеруем stagger-дочерей сразу
    const staggerChildren = el.querySelectorAll('[data-stagger]');
    staggerChildren.forEach((child, i) => {
      child.style.setProperty('--i', i);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useRevealAll — применяет observer ко всем элементам
 * с data-reveal внутри компонента.
 */
export function useRevealAll() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
