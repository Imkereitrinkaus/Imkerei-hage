/**
 * order-form.js
 * Bestellformular-Logik: Mengen, Summen, Anfrage-Zusammenfassung.
 * Diese Datei muss nicht bearbeitet werden.
 */

(function () {
  'use strict';

  function formatPrice(price) {
    return price.toFixed(2).replace('.', ',') + '\u00a0€';
  }

  // ---- Produktmengen aus site-content.js rendern ---------

  function buildProductRows() {
    const container = document.getElementById('order-products');
    if (!container) return;
    container.innerHTML = '';

    siteContent.products.forEach(product => {
      if (!product.available) return;

      const row = document.createElement('div');
      row.className = 'order-product';
      row.dataset.price = product.price;
      row.dataset.productId = product.id;
      row.dataset.productName = product.name + ' ' + product.size;

      row.innerHTML = `
        <div class="order-product__info">
          <div class="order-product__name">${product.name} <span style="color:var(--color-text-muted);font-weight:400;">${product.size}</span></div>
          <div class="order-product__price">${formatPrice(product.price)} pro Glas</div>
        </div>
        <div class="order-product__qty">
          <button type="button" class="qty-btn qty-minus" aria-label="Anzahl verringern für ${product.name}">−</button>
          <span class="qty-display" aria-live="polite">0</span>
          <button type="button" class="qty-btn qty-plus" aria-label="Anzahl erhöhen für ${product.name}">+</button>
        </div>
        <div class="order-product__subtotal">–</div>
      `;

      const minus    = row.querySelector('.qty-minus');
      const plus     = row.querySelector('.qty-plus');
      const display  = row.querySelector('.qty-display');
      const subtotal = row.querySelector('.order-product__subtotal');

      function updateRow() {
        const qty = parseInt(display.textContent, 10);
        const sub = qty * product.price;
        subtotal.textContent = qty > 0 ? formatPrice(sub) : '–';
        updateTotal();
      }

      minus.addEventListener('click', function () {
        const qty = parseInt(display.textContent, 10);
        if (qty > 0) {
          display.textContent = qty - 1;
          updateRow();
        }
      });

      plus.addEventListener('click', function () {
        const qty = parseInt(display.textContent, 10);
        display.textContent = qty + 1;
        updateRow();
      });

      container.append(row);
    });
  }

  // ---- Gesamtpreis berechnen -----------------------------

  function updateTotal() {
    let total = 0;

    document.querySelectorAll('.order-product').forEach(row => {
      const qty   = parseInt(row.querySelector('.qty-display').textContent, 10);
      const price = parseFloat(row.dataset.price);
      total += qty * price;
    });

    const totalEl = document.getElementById('order-total-amount');
    if (totalEl) {
      totalEl.textContent = formatPrice(total);
    }

    return total;
  }

  // ---- Anfrage zusammenstellen ---------------------------

  function buildSummary() {
    const name    = (document.getElementById('order-name')    || {}).value || '';
    const email   = (document.getElementById('order-email')   || {}).value || '';
    const phone   = (document.getElementById('order-phone')   || {}).value || '';
    const message = (document.getElementById('order-message') || {}).value || '';

    const lines = [];

    lines.push('=== Bestellanfrage ===');
    lines.push('');
    lines.push('Name:    ' + name);
    lines.push('E-Mail:  ' + email);
    if (phone) lines.push('Telefon: ' + phone);
    lines.push('');
    lines.push('--- Produkte ---');

    let total = 0;
    let hasProducts = false;

    document.querySelectorAll('.order-product').forEach(row => {
      const qty   = parseInt(row.querySelector('.qty-display').textContent, 10);
      const price = parseFloat(row.dataset.price);
      const pName = row.dataset.productName;
      if (qty > 0) {
        const sub = qty * price;
        lines.push(qty + 'x ' + pName + ' = ' + formatPrice(sub));
        total += sub;
        hasProducts = true;
      }
    });

    if (!hasProducts) lines.push('Keine Produkte ausgewählt.');

    lines.push('');
    lines.push('Gesamtbetrag: ' + formatPrice(total));

    if (message) {
      lines.push('');
      lines.push('--- Nachricht ---');
      lines.push(message);
    }

    lines.push('');
    lines.push('======================');

    return { text: lines.join('\n'), total, hasProducts, name, email, phone, message };
  }

  // ---- Formular abschicken -------------------------------

  function handleSubmit(e) {
    e.preventDefault();

    const nameEl  = document.getElementById('order-name');
    const emailEl = document.getElementById('order-email');
    const result  = document.getElementById('form-result');

    // Einfache Validierung
    if (!nameEl || !nameEl.value.trim()) {
      showResult('Bitte gib deinen Namen ein.', 'error');
      if (nameEl) nameEl.focus();
      return;
    }

    if (!emailEl || !emailEl.value.trim() || !emailEl.value.includes('@')) {
      showResult('Bitte gib eine gültige E-Mail-Adresse ein.', 'error');
      if (emailEl) emailEl.focus();
      return;
    }

    const summary = buildSummary();

    // Zusammenfassung anzeigen
    const summaryBox = document.getElementById('order-summary-box');
    const summaryPre = document.getElementById('order-summary-text');
    if (summaryBox && summaryPre) {
      summaryPre.textContent = summary.text;
      summaryBox.classList.add('is-visible');
    }

    const actionsEl = document.getElementById('order-summary-actions');
    if (actionsEl) actionsEl.style.display = 'flex';

    // mailto vorbereiten
    const mailtoBtn = document.getElementById('btn-mailto');
    if (mailtoBtn && siteContent.contact.email && !siteContent.contact.email.includes('[')) {
      const subject = encodeURIComponent('Honig-Anfrage von ' + summary.name);
      const body    = encodeURIComponent(summary.text);
      mailtoBtn.href = 'mailto:' + siteContent.contact.email + '?subject=' + subject + '&body=' + body;
      mailtoBtn.style.display = 'inline-flex';
    }

    showResult(
      summary.hasProducts
        ? 'Danke! Hier ist deine Anfrage-Zusammenfassung. Du kannst sie kopieren oder direkt per E-Mail senden.'
        : 'Danke für deine Nachricht! Du kannst die Zusammenfassung unten kopieren.',
      'success'
    );

    window.scrollTo({
      top: document.getElementById('order-summary-box').getBoundingClientRect().top + window.scrollY - 100,
      behavior: 'smooth'
    });
  }

  function showResult(msg, type) {
    const el = document.getElementById('form-result');
    if (!el) return;
    el.textContent = msg;
    el.className = 'form-result form-result--' + type;
  }

  // ---- Copy to Clipboard ---------------------------------

  function copyToClipboard() {
    const summaryPre = document.getElementById('order-summary-text');
    if (!summaryPre) return;
    const text = summaryPre.textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('btn-copy');
        if (btn) {
          const orig = btn.textContent;
          btn.textContent = '✓ Kopiert!';
          setTimeout(() => { btn.textContent = orig; }, 2000);
        }
      });
    } else {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.append(textarea);
      textarea.select();
      try { document.execCommand('copy'); } catch (err) { /* noop */ }
      document.body.removeChild(textarea);
    }
  }

  // ---- Init ----------------------------------------------

  function init() {
    buildProductRows();
    updateTotal();

    const form = document.getElementById('order-form');
    if (form) form.addEventListener('submit', handleSubmit);

    const copyBtn = document.getElementById('btn-copy');
    if (copyBtn) copyBtn.addEventListener('click', copyToClipboard);

    // Mailto-Button standardmäßig ausblenden, wird nach Submit eingeblendet
    const mailtoBtn = document.getElementById('btn-mailto');
    if (mailtoBtn) mailtoBtn.style.display = 'none';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
