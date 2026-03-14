/**
 * main.js
 * Navigation, Scroll-Verhalten, kleine UI-Interaktionen.
 * Diese Datei muss nicht bearbeitet werden.
 */

(function () {
  'use strict';

  // ---- Sticky Header -------------------------------------

  const header = document.querySelector('.site-header');

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // ---- Mobile Navigation ---------------------------------

  const toggle = document.querySelector('.nav__toggle');
  const mobileNav = document.querySelector('.nav__mobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.contains('is-open');
      mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Mobile Links schließen das Menü
    mobileNav.querySelectorAll('.nav__mobile-link').forEach(link => {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // ESC schließt das Menü
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  // ---- Aktiver Navigationslink ---------------------------

  function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav__link');
    if (!sections.length || !links.length) return;

    const fromTop = window.scrollY + 100;

    let currentId = '';
    sections.forEach(section => {
      if (section.offsetTop <= fromTop) {
        currentId = section.id;
      }
    });

    links.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('is-active', href === '#' + currentId);
    });
  }

  window.addEventListener('scroll', setActiveNavLink, { passive: true });

  // ---- Smooth Scroll für interne Links -------------------

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();

      const navHeight = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height')) || 72;

      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---- Intersection Observer: Fade-In-Animationen --------

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.product-card, .quality-card, .about__fact, .faq__item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

})();
