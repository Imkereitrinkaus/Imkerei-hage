/**
 * render-content.js
 * Befüllt alle HTML-Bereiche mit Inhalten aus site-content.js.
 * Diese Datei muss nicht bearbeitet werden.
 */

(function () {
  'use strict';

  const c = siteContent;

  // ---- Hilfsfunktionen -----------------------------------

  function el(tag, props, ...children) {
    const node = document.createElement(tag);
    if (props) {
      Object.entries(props).forEach(([key, val]) => {
        if (key === 'className') { node.className = val; }
        else if (key === 'innerHTML') { node.innerHTML = val; }
        else if (key.startsWith('data-')) { node.setAttribute(key, val); }
        else { node[key] = val; }
      });
    }
    children.flat().forEach(child => {
      if (child == null) return;
      node.append(typeof child === 'string' ? document.createTextNode(child) : child);
    });
    return node;
  }

  function mount(selector, node) {
    const target = document.querySelector(selector);
    if (!target) return;
    if (typeof node === 'string') { target.innerHTML = node; }
    else { target.innerHTML = ''; target.append(node); }
  }

  function appendTo(selector, node) {
    const target = document.querySelector(selector);
    if (!target) return;
    if (typeof node === 'string') { target.insertAdjacentHTML('beforeend', node); }
    else { target.append(node); }
  }

  function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + '\u00a0€';
  }

  // ---- Meta / SEO ----------------------------------------

  function renderMeta() {
    document.title = c.brand.name + ' – ' + c.brand.slogan + ' | ' + c.brand.location;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', c.brand.metaDescription);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', c.brand.name + ' – ' + c.brand.slogan);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', c.brand.metaDescription);
  }

  // ---- Navigation ----------------------------------------

  function renderNav() {
    const brand = document.querySelector('.nav__brand-name');
    if (brand) {
      brand.innerHTML = '';
      brand.append(
        document.createTextNode(c.brand.name.split(' ')[0] + ' '),
        el('span', {}, c.brand.name.split(' ').slice(1).join(' '))
      );
    }

    const brandSub = document.querySelector('.nav__brand-sub');
    if (brandSub) brandSub.textContent = c.brand.sloganSub;

    const linksContainer = document.querySelector('.nav__links');
    if (linksContainer) {
      linksContainer.innerHTML = '';
      c.nav.links.slice(0, -1).forEach(link => {
        linksContainer.append(
          el('a', { href: link.href, className: 'nav__link' }, link.label)
        );
      });
      const last = c.nav.links[c.nav.links.length - 1];
      linksContainer.append(
        el('a', { href: last.href, className: 'nav__link nav__cta' }, last.label)
      );
    }

    const mobileLinks = document.querySelector('.nav__mobile');
    if (mobileLinks) {
      mobileLinks.innerHTML = '';
      c.nav.links.forEach(link => {
        mobileLinks.append(
          el('a', { href: link.href, className: 'nav__mobile-link' }, link.label)
        );
      });
    }
  }

  // ---- Hero ----------------------------------------------

  function renderHero() {
    const badge = document.querySelector('.hero__badge');
    if (badge) badge.textContent = c.brand.sloganSub;

    const title = document.querySelector('.hero__title');
    if (title) {
      title.innerHTML = c.hero.title + '<span class="hero__title-highlight">' + c.hero.titleHighlight + '</span>';
    }

    const desc = document.querySelector('.hero__desc');
    if (desc) desc.textContent = c.hero.text;

    const primaryBtn = document.querySelector('.hero__btn-primary');
    if (primaryBtn) {
      primaryBtn.textContent = c.hero.primaryButton;
      primaryBtn.href = c.hero.primaryButtonHref;
    }

    const secondaryBtn = document.querySelector('.hero__btn-secondary');
    if (secondaryBtn) {
      secondaryBtn.textContent = c.hero.secondaryButton;
      secondaryBtn.href = c.hero.secondaryButtonHref;
    }

    const img = document.querySelector('.hero__image');
    if (img) {
      img.src = c.hero.image;
      img.alt = c.hero.imageAlt;
    }
  }

  // ---- Über ----------------------------------------------

  function renderAbout() {
    const label = document.querySelector('.about__label');
    if (label) label.textContent = c.brand.location;

    const headline = document.querySelector('.about__headline');
    if (headline) headline.textContent = c.about.headline;

    const subline = document.querySelector('.about__subline');
    if (subline) subline.textContent = c.about.subline;

    const textBox = document.querySelector('.about__text');
    if (textBox) {
      textBox.innerHTML = '';
      c.about.paragraphs.forEach(p => {
        textBox.append(el('p', {}, p));
      });
    }

    const img = document.querySelector('.about__image');
    if (img) {
      img.src = c.about.image;
      img.alt = c.about.imageAlt;
    }

    const factsContainer = document.querySelector('.about__facts');
    if (factsContainer) {
      factsContainer.innerHTML = '';
      c.about.facts.forEach(fact => {
        factsContainer.append(
          el('div', { className: 'about__fact' },
            el('div', { className: 'about__fact-icon' }, fact.icon),
            el('div', { className: 'about__fact-label' }, fact.label),
            el('div', { className: 'about__fact-value' }, fact.value)
          )
        );
      });
    }
  }

  // ---- Produkte ------------------------------------------

  function renderProducts() {
    const grid = document.querySelector('.products__grid');
    if (!grid) return;
    grid.innerHTML = '';

    c.products.forEach(product => {
      const card = el('article', { className: 'product-card', 'data-product-id': product.id },
        el('div', { className: 'product-card__image-wrap' },
          el('img', {
            src: product.image,
            alt: product.imageAlt,
            className: 'product-card__image',
            loading: 'lazy'
          }),
          el('div', { className: 'product-card__badge' }, product.badge),
          !product.available
            ? el('div', { className: 'product-card__unavailable' }, 'Aktuell nicht verfügbar')
            : null
        ),
        el('div', { className: 'product-card__body' },
          el('p', { className: 'product-card__subtitle' }, product.subtitle),
          el('h3', { className: 'product-card__name' }, product.name),
          el('p', { className: 'product-card__desc' }, product.description),
          el('div', { className: 'product-card__footer' },
            el('div', { className: 'product-card__price' },
              el('span', { className: 'product-card__price-amount' }, formatPrice(product.price)),
              el('span', { className: 'product-card__price-size' }, 'pro ' + product.size + ' Glas')
            ),
            product.available
              ? el('a', { href: '#kontakt', className: 'btn btn--primary btn--sm' }, 'Anfragen')
              : el('span', { className: 'btn btn--ghost btn--sm' }, 'Nicht verfügbar')
          )
        )
      );
      grid.append(card);
    });
  }

  // ---- Qualität ------------------------------------------

  function renderQuality() {
    const headline = document.querySelector('.quality__headline');
    if (headline) headline.textContent = c.quality.headline;

    const subline = document.querySelector('.quality__subline');
    if (subline) subline.textContent = c.quality.subline;

    const grid = document.querySelector('.quality__grid');
    if (!grid) return;
    grid.innerHTML = '';

    c.quality.points.forEach(point => {
      grid.append(
        el('div', { className: 'quality-card' },
          el('span', { className: 'quality-card__icon' }, point.icon),
          el('h3', { className: 'quality-card__title' }, point.title),
          el('p', { className: 'quality-card__text' }, point.text)
        )
      );
    });
  }

  // ---- Galerie -------------------------------------------

  function renderGallery() {
    const grid = document.querySelector('.gallery__grid');
    if (!grid) return;
    grid.innerHTML = '';

    c.gallery.images.forEach((img, i) => {
      const item = el('div', {
        className: 'gallery__item',
        role: 'button',
        tabIndex: '0',
        'aria-label': 'Bild vergrößern: ' + img.alt,
        'data-src': img.src,
        'data-alt': img.alt
      },
        el('img', {
          src: img.src,
          alt: img.alt,
          className: 'gallery__image',
          loading: 'lazy'
        }),
        el('div', { className: 'gallery__caption' }, img.caption)
      );

      item.addEventListener('click', () => openLightbox(img.src, img.alt));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(img.src, img.alt);
        }
      });
      grid.append(item);
    });
  }

  // ---- Kontakt -------------------------------------------

  function renderContact() {
    const headline = document.querySelector('.contact__headline');
    if (headline) headline.textContent = c.contact.headline;

    const subline = document.querySelector('.contact__subline');
    if (subline) subline.textContent = c.contact.subline;

    const intro = document.querySelector('.contact__info-intro');
    if (intro) intro.textContent = c.contact.intro;

    const details = document.querySelector('.contact__details');
    if (details) {
      details.innerHTML = '';
      const items = [
        { icon: '📞', label: 'Telefon', value: c.contact.phone },
        { icon: '✉️', label: 'E-Mail',  value: c.contact.email },
        { icon: '📍', label: 'Adresse', value: c.contact.address },
        { icon: '🕐', label: 'Abholung', value: c.contact.pickupInfo },
      ];
      items.forEach(item => {
        details.append(
          el('div', { className: 'contact__detail' },
            el('div', { className: 'contact__detail-icon', 'aria-hidden': 'true' }, item.icon),
            el('div', {},
              el('div', { className: 'contact__detail-label' }, item.label),
              el('div', { className: 'contact__detail-value' }, item.value)
            )
          )
        );
      });
    }
  }

  // ---- FAQ -----------------------------------------------

  function renderFaq() {
    const headline = document.querySelector('.faq__headline');
    if (headline) headline.textContent = c.faq.headline;

    const subline = document.querySelector('.faq__subline');
    if (subline) subline.textContent = c.faq.subline;

    const list = document.querySelector('.faq__list');
    if (!list) return;
    list.innerHTML = '';

    c.faq.items.forEach((item, i) => {
      const id = 'faq-answer-' + i;
      const faqItem = el('div', { className: 'faq__item' },
        el('button', {
          className: 'faq__question',
          'aria-expanded': 'false',
          'aria-controls': id,
          type: 'button'
        },
          el('span', {}, item.question),
          el('span', { className: 'faq__icon', 'aria-hidden': 'true' }, '+')
        ),
        el('div', { className: 'faq__answer', id: id, role: 'region' },
          el('div', { className: 'faq__answer-inner' }, item.answer)
        )
      );

      faqItem.querySelector('.faq__question').addEventListener('click', function () {
        const isOpen = faqItem.classList.contains('is-open');

        // Alle schließen
        document.querySelectorAll('.faq__item.is-open').forEach(open => {
          open.classList.remove('is-open');
          open.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          faqItem.classList.add('is-open');
          this.setAttribute('aria-expanded', 'true');
        }
      });

      list.append(faqItem);
    });
  }

  // ---- Footer --------------------------------------------

  function renderFooter() {
    const footerBrand = document.querySelector('.footer__brand-name');
    if (footerBrand) {
      footerBrand.innerHTML = c.brand.name.split(' ')[0] + ' <span>' + c.brand.name.split(' ').slice(1).join(' ') + '</span>';
    }

    const tagline = document.querySelector('.footer__tagline');
    if (tagline) tagline.textContent = c.footer.tagline;

    const footerLinks = document.querySelector('.footer__nav-links');
    if (footerLinks) {
      footerLinks.innerHTML = '';
      c.footer.links.forEach(link => {
        footerLinks.append(
          el('a', { href: link.href, className: 'footer__nav-link' }, link.label)
        );
      });
    }

    const copy = document.querySelector('.footer__copy');
    if (copy) {
      copy.textContent = '© ' + new Date().getFullYear() + ' ' + c.footer.copyright + ' · Alle Angaben ohne Gewähr';
    }
  }

  // ---- Lightbox ------------------------------------------

  function openLightbox(src, alt) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt;
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lightbox__close').focus();
  }

  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // ---- Init ----------------------------------------------

  function init() {
    renderMeta();
    renderNav();
    renderHero();
    renderAbout();
    renderProducts();
    renderQuality();
    renderGallery();
    renderContact();
    renderFaq();
    renderFooter();

    // Lightbox Events
    const lbClose = document.getElementById('lightbox-close');
    if (lbClose) lbClose.addEventListener('click', closeLightbox);

    const lb = document.getElementById('lightbox');
    if (lb) {
      lb.addEventListener('click', function (e) {
        if (e.target === lb) closeLightbox();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
