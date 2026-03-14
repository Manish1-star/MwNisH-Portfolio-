/**
 * MANISH GHIMIRE PORTFOLIO — ANIMATIONS.JS
 * Handles: scroll reveal, skill bar animation, stagger effects
 * Uses IntersectionObserver for performance
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initSkillBars();
  initStaggerChildren();
});

/* ══════════════════════════════════════
   1. SCROLL REVEAL
   Elements with [data-reveal] or [data-reveal-delay] fade
   in when they enter the viewport.
══════════════════════════════════════ */
function initScrollReveal() {
  const targets = document.querySelectorAll('[data-reveal], [data-reveal-delay]');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Animate once only
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════
   2. SKILL BAR ANIMATION
   Animates progress bars when the skills section
   scrolls into view.
══════════════════════════════════════ */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width') || '0';
        // Slight stagger based on position
        const delay = Array.from(bars).indexOf(bar) * 80;
        setTimeout(() => {
          bar.style.width = `${targetWidth}%`;
        }, delay);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

/* ══════════════════════════════════════
   3. STAGGER CHILDREN
   Cards inside a [data-stagger] parent fade in one by one.
══════════════════════════════════════ */
function initStaggerChildren() {
  const parents = document.querySelectorAll(
    '.projects-grid, .about-cards, .blog-grid, .skills-grid'
  );

  parents.forEach(parent => {
    const children = Array.from(parent.children);

    children.forEach((child, i) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(24px)';
      child.style.transition = `opacity 0.55s ease ${i * 100}ms, transform 0.55s ease ${i * 100}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          children.forEach(child => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(parent);
  });
}

/* ══════════════════════════════════════
   4. SECTION BACKGROUND PARALLAX (subtle)
   Adds a gentle parallax effect to hero orbs
══════════════════════════════════════ */
(function initParallax() {
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  if (!orb1 || !orb2) return;

  // Only run on desktop (performance)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    orb1.style.transform = `translate(${y * 0.05}px, ${y * -0.08}px)`;
    orb2.style.transform = `translate(${y * -0.04}px, ${y * 0.06}px)`;
  }, { passive: true });
})();
