import { copy } from "./catalog.js";

export function header(language, cartCount, currentPage, theme) {
  const text = copy[language];
  const themeLabel = theme === "dark" ? text.themeLight : text.themeDark;
  const themeIcon = theme === "dark" ? "☼" : "☾";
  const shopHref = currentPage === "home" ? "#shop" : "/shop";
  const journeyHref = currentPage === "home" ? "#journey" : "/#journey";
  const impactHref = currentPage === "home" ? "#impact" : "/#impact";
  return `
    <div class="announcement">${language === "de" ? "TrueOrigin · Schokolade mit einer Geschichte" : "TrueOrigin · Chocolate with a story"}</div>
    <header class="site-header" id="top">
      <a class="wordmark" href="/" aria-label="TrueOrigin — ${text.home}">True<span>Origin</span><i>.</i></a>
      <nav class="main-nav" id="main-navigation" aria-label="${language === "de" ? "Hauptnavigation" : "Main navigation"}">
        <a href="${shopHref}" ${currentPage === "shop" ? 'aria-current="page"' : ""}>${text.navShop}</a>
        <a href="${journeyHref}">${text.navStory}</a>
        <a href="${impactHref}">${text.navImpact}</a>
      </nav>
      <div class="header-actions">
        <div class="language-switch" aria-label="${language === "de" ? "Sprache wählen" : "Choose language"}">
          <button type="button" class="language-button ${language === "de" ? "is-active" : ""}" data-language="de" aria-pressed="${language === "de"}">DE</button>
          <span aria-hidden="true">/</span>
          <button type="button" class="language-button ${language === "en" ? "is-active" : ""}" data-language="en" aria-pressed="${language === "en"}">EN</button>
        </div>
        <button class="theme-toggle" type="button" data-action="theme-toggle" aria-label="${themeLabel}" title="${themeLabel}"><span aria-hidden="true">${themeIcon}</span></button>
        <a class="bag-link" href="/warenkorb" aria-label="${text.bag}"><span class="bag-label">${text.bag}</span><span class="bag-count">${cartCount || ""}</span></a>
        <button class="menu-toggle" type="button" data-action="menu" aria-label="${text.menu}" aria-expanded="false" aria-controls="main-navigation">☰</button>
      </div>
    </header>`;
}

export function footer(language) {
  const text = copy[language];
  return `
    <footer class="site-footer">
      <div class="footer-main page-shell">
        <div class="footer-brand">
          <a class="wordmark wordmark-footer" href="/">True<span>Origin</span><i>.</i></a>
          <p>${text.footerTagline}</p>
        </div>
        <div class="footer-column"><span class="footer-heading">${text.footerExplore}</span><a href="/shop">${text.navShop}</a><a href="/#journey">${text.navStory}</a><a href="/#impact">${text.navImpact}</a></div>
        <div class="footer-column"><span class="footer-heading">${text.footerContact}</span><span>${text.footerContactLink}</span></div>
        <div class="footer-signoff">${language === "de" ? "Gute Dinge brauchen Zeit.<br>Wir machen es Schritt für Schritt." : "Good things take time.<br>We are taking it step by step."}</div>
      </div>
      <div class="footer-bottom page-shell"><span>© ${new Date().getFullYear()} TRUEORIGIN</span><span>${text.footerMade}</span><a href="#top">↑ ${text.backTop}</a></div>
      <div class="creator-credit">Made with ♥️ by LostGPU</div>
    </footer>`;
}

export function productCard(product, language, options = {}) {
  const text = copy[language];
  const tag = product.tag[language];
  const availabilityClass = product.available ? "is-available" : "is-unavailable";
  const availabilityText = product.available ? text.available : text.unavailable;
  return `
    <a class="product-card" href="/product/${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.imageAlt[language]}" loading="lazy" decoding="async" style="object-position:${product.imagePosition}">
        <span class="product-tag">${tag}</span>
        ${options.quickView === false ? "" : `<span class="quick-view">${text.quickView} ↗</span>`}
      </div>
      <div class="product-meta">
        <div><h3>${product.name[language]}</h3><p>${product.tasting[language]}</p></div>
        <strong class="product-availability ${availabilityClass}"><span class="availability-dot" aria-hidden="true"></span>${availabilityText}</strong>
      </div>
    </a>`;
}

export function quantityControl(value, language, key = "") {
  const text = copy[language];
  return `<div class="quantity-control" data-quantity-control ${key ? `data-item-id="${key}"` : ""} aria-label="${text.quantity}">
    <button type="button" data-action="quantity-minus" aria-label="${text.decrease}">−</button>
    <input type="number" min="1" max="99" value="${value}" aria-label="${text.quantity}" inputmode="numeric">
    <button type="button" data-action="quantity-plus" aria-label="${text.increase}">+</button>
  </div>`;
}

export function orderSummary(cart, language, { showCheckout = true } = {}) {
  const text = copy[language];
  return `<aside class="summary-card">
    <h2>${text.orderSummary}</h2>
    <div class="summary-line"><span>${text.subtotal}</span><span>${cart.reduce((sum, item) => sum + item.quantity, 0)}</span></div>
    <div class="summary-line"><span>${text.shipping}</span><span>${text.ordersUnavailable}</span></div>
    <p class="summary-note">${text.shippingNote}</p>
    ${showCheckout ? `<a class="button button-dark" href="/checkout">${text.toCheckout}<span aria-hidden="true">↗</span></a>` : ""}
  </aside>`;
}
