import { copy, productById, products, SITE_URL } from "./catalog.js";
import { addToCart, cartCount, getCart, removeFromCart, setCartQuantity } from "./cart.js";
import { footer, header, orderSummary, productCard, quantityControl } from "./components.js";

let language = localStorage.getItem("trueorigin-language") || "de";
if (language !== "de" && language !== "en") language = "de";
let theme = localStorage.getItem("trueorigin-theme");
if (theme !== "dark" && theme !== "light") theme = document.documentElement.dataset.theme || "light";
let toastTimer;
let supplyMap;

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const productSlug = path.startsWith("/product/") ? path.slice("/product/".length) : null;
const page = path === "/" ? "home" : path === "/shop" ? "shop" : path === "/warenkorb" ? "cart" : path === "/checkout" ? "checkout" : productSlug ? "product" : "not-found";
const text = () => copy[language];

function renderArticleLookup() {
  const labels = text();
  return `<div class="article-lookup">
    <div class="article-lookup-copy"><h3>${labels.articleSearchTitle}</h3><p>${labels.articleSearchText}</p></div>
    <form class="article-lookup-form" data-article-lookup>
      <label for="article-number">${labels.articleNumber}</label>
      <div class="article-lookup-controls">
        <input id="article-number" name="articleNumber" type="text" placeholder="${labels.articleSearchPlaceholder}" autocomplete="off" required>
        <button class="button button-dark" type="submit">${labels.articleSearchButton}<span aria-hidden="true">↗</span></button>
      </div>
      <p class="article-lookup-message" data-article-message aria-live="polite"></p>
    </form>
  </div>`;
}

function renderProductTrace(product) {
  const labels = text();
  const stops = product.supplyChain?.stops || [];
  const hasRoute = stops.length > 0;
  const isExample = product.supplyChain?.status === "example";
  const routeDetail = isExample
    ? labels.traceExampleDetail
    : hasRoute ? labels.traceAvailable : labels.traceUnavailableDetail;
  const routeNotice = isExample
    ? labels.traceExample
    : hasRoute ? labels.traceAvailable : labels.traceUnavailable;
  return `<section class="journey-section product-trace" id="lieferkette"><div class="page-shell">
    <div class="section-heading"><div><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.articleNumber} ${product.articleNumber}</p><h2>${labels.productTraceTitle}</h2></div>
      <p class="section-intro">${routeDetail}</p></div>
    <div class="map-card">
      <div class="map-topline"><span>${product.name[language]}</span><span>${product.articleNumber}</span></div>
      <p class="map-disclaimer">${routeNotice}</p>
      <div id="origin-map" class="map-graphic" data-product-map="${product.id}" role="region" aria-label="${labels.productTraceTitle} — ${product.name[language]}"></div>
      ${hasRoute ? `<ol class="route-stops" aria-label="${labels.productTraceTitle}">${stops.map((stop, index) => `<li class="route-stop"><span class="route-stop-number">${String(index + 1).padStart(2, "0")}</span><div><span>${stop.stage[language]}</span><strong>${stop.place[language]}</strong></div></li>`).join("")}</ol>` : ""}
    </div>
  </div></section>`;
}

function loadLeaflet() {
  if (window.L) return Promise.resolve(window.L);
  if (window.leafletLoading) return window.leafletLoading;
  window.leafletLoading = new Promise((resolve, reject) => {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.append(stylesheet);
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => resolve(window.L);
    script.onerror = () => reject(new Error("OpenStreetMap-Karte konnte nicht geladen werden."));
    document.head.append(script);
  });
  return window.leafletLoading;
}

async function initializeMap() {
  const container = document.querySelector("#origin-map");
  if (!container) return;
  try {
    const product = productById(container.dataset.productMap);
    if (!product) throw new Error("Für die Lieferkettenkarte wurde kein Produkt gefunden.");
    const L = await loadLeaflet();
    if (!container.isConnected) return;
    supplyMap?.remove();
    supplyMap = L.map(container, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(supplyMap);
    const stops = product.supplyChain?.stops || [];
    if (stops.length) {
      const coordinates = stops.map((stop) => stop.coordinates);
      const lineStyle = { color: "#668260", weight: 3, opacity: .85 };
      if (product.supplyChain.status === "example") lineStyle.dashArray = "7 8";
      const route = coordinates.length > 1
        ? L.polyline(coordinates, lineStyle).addTo(supplyMap)
        : null;
      const markers = stops.map((stop) => L.circleMarker(stop.coordinates, {
        radius: 7, color: "#fcfaf5", weight: 3, fillColor: "#587258", fillOpacity: 1
      }).bindTooltip(`${stop.stage[language]} · ${stop.place[language]}`, { direction: "top", offset: [0, -7] }).addTo(supplyMap));
      const bounds = L.featureGroup(route ? [route, ...markers] : markers).getBounds();
      supplyMap.fitBounds(bounds, { padding: [28, 28] });
    } else {
      supplyMap.setView([24, 10], 2);
    }
    supplyMap.invalidateSize();
  } catch (error) {
    console.error(error);
    container.innerHTML = `<p class="map-error">${language === "de" ? "Die Karte ist gerade nicht erreichbar." : "The map is currently unavailable."} <a href="https://www.openstreetmap.org/#map=3/28/-9" target="_blank" rel="noreferrer">${language === "de" ? "OpenStreetMap öffnen" : "Open OpenStreetMap"} ↗</a></p>`;
  }
}

function renderHome() {
  const labels = text();
  return `<section class="hero page-shell">
      <div class="hero-copy reveal"><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.heroEyebrow}</p>
        <h1>${labels.heroTitle}</h1><p class="hero-description">${labels.heroDescription}</p>
        <div class="hero-actions"><a class="button button-dark" href="/shop">${labels.heroCta}<span>↗</span></a><a class="text-link" href="#journey">${labels.heroSecondary}<span>↓</span></a></div>
        <p class="hero-note"><span class="note-rule"></span>${labels.heroNote}</p>
      </div>
      <div class="hero-visual reveal"><img class="hero-photo" src="${products[1].image}" alt="${products[1].imageAlt[language]}" fetchpriority="high"><div class="photo-shade"></div>
        <div class="hero-stamp"><span>${labels.heroStamp}</span><strong>TRUE<br>ORIGIN</strong></div>
        <div class="hero-product-label"><span class="label-line"></span><span>${language === "de" ? "SCHOKOLADE · SORTEN · HERKUNFT" : "CHOCOLATE · VARIETIES · ORIGIN"}</span></div>
        <div class="hero-caption"><span>${labels.heroCaption}</span><span>TRUEORIGIN</span></div>
      </div><span class="hero-side-note" aria-hidden="true">${labels.brandLine}</span>
    </section>
    <section class="intro-strip" aria-label="${language === "de" ? "Unsere Werte" : "Our values"}"><div class="intro-inner"><span>${labels.promiseA}</span><span class="intro-star">✳</span><span>${labels.promiseB}</span><span class="intro-star">✳</span><span>${labels.promiseC}</span></div></section>
    <section class="story-section page-shell"><div class="story-grid">
      <div class="story-image reveal"><img src="${products[0].image}" alt="${products[0].imageAlt[language]}" loading="lazy" decoding="async"></div>
      <div class="story-copy reveal"><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.introEyebrow}</p><h2>${labels.introTitle}</h2><p>${labels.introText}</p>
        <div class="story-badges"><span class="pill">${labels.pointOne}</span><span class="pill">${labels.pointTwo}</span><span class="pill">${labels.pointThree}</span></div>
      </div>
    </div></section>
    <section class="journey-section" id="journey"><div class="page-shell">
      <div class="section-heading reveal"><div><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.journeyEyebrow}</p><h2>${labels.journeyTitle}</h2></div><p class="section-intro">${labels.journeyDescription}</p></div>
      ${renderArticleLookup()}
    </div></section>
    <section class="shop-section" id="shop"><div class="page-shell">
      <div class="shop-heading reveal"><div><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.shopEyebrow}</p><h2>${labels.shopTitle}</h2></div><a class="text-link shop-all" href="/shop">${labels.shopAll}<span>↗</span></a></div>
      <div class="product-grid">${products.slice(0, 3).map((product) => productCard(product, language)).join("")}</div>
    </div></section>
    <section class="impact-section page-shell" id="impact"><div class="impact-heading reveal"><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.impactEyebrow}</p><h2>${labels.impactTitle}</h2></div>
      <div class="impact-grid reveal">
        <article class="impact-card"><span class="impact-number">01</span><h3>${labels.impactOneTitle}</h3><p>${labels.impactOneText}</p></article>
        <article class="impact-card"><span class="impact-number">02</span><h3>${labels.impactTwoTitle}</h3><p>${labels.impactTwoText}</p></article>
        <article class="impact-card"><span class="impact-number">03</span><h3>${labels.impactThreeTitle}</h3><p>${labels.impactThreeText}</p></article>
      </div><p class="impact-disclaimer">${labels.impactFootnote}</p>
    </section>
    <section class="closing-note"><div class="closing-inner"><span class="closing-mark">“</span><p>${labels.closingNote}</p><span class="closing-origin">TRUEORIGIN</span></div></section>
    <section class="shop-cta page-shell"><div><p class="eyebrow"><span class="eyebrow-dot"></span>TRUEORIGIN</p><h2>${labels.ctaTitle}</h2></div><a class="button button-dark" href="/shop">${labels.ctaButton}<span>↗</span></a></section>`;
}

function renderShop() {
  const labels = text();
  return `<section class="page-shell shop-page"><div class="page-intro"><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.shopEyebrow}</p><h1>${labels.shopTitle}</h1><p>${labels.shopIntro}</p></div>
    <div class="product-grid">${products.map((product) => productCard(product, language, { quickView: false })).join("")}</div>
  </section>`;
}

function renderProduct(product) {
  const labels = text();
  return `<section class="page-shell product-page">
    <nav class="breadcrumbs" aria-label="${language === "de" ? "Brotkrumennavigation" : "Breadcrumb"}"><a href="/">${labels.home}</a><span>/</span><a href="/shop">${labels.shop}</a><span>/</span><span>${product.name[language]}</span></nav>
    <div class="product-detail">
      <div class="detail-image"><img src="${product.image}" alt="${product.imageAlt[language]}" fetchpriority="high"><span class="detail-origin">${product.category[language]}</span></div>
      <div class="detail-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span>${product.category[language]}</p>
        <h1>${product.name[language]}</h1><p class="detail-subtitle">${product.tagline[language]}</p>
        <p class="product-article-number">${labels.articleNumber}: <strong>${product.articleNumber}</strong></p>
        <p class="availability-label ${product.available ? "is-available" : "is-unavailable"}"><span class="availability-dot" aria-hidden="true"></span>${product.available ? labels.available : labels.unavailable}</p>
        <div class="detail-cacao"><span>${labels.cacao}</span><strong>${product.cacaoPercentage === null ? labels.cacaoNotSpecified : `${product.cacaoPercentage}%`}</strong></div>
        <p class="detail-description">${product.description[language]}</p>
        <p class="detail-description"><strong>${labels.special}:</strong> ${product.special[language]}</p>
        <div class="purchase-row">${quantityControl(1, language)}<button class="button button-dark" type="button" data-action="add-product" data-product-id="${product.id}" ${product.available ? "" : "disabled"}>${product.available ? labels.addToCart : labels.unavailable}<span aria-hidden="true">↗</span></button></div>
        <div class="product-accordions">
          <details open><summary>${labels.productDetails}</summary><div class="accordion-content">${product.tasting[language]}</div></details>
          <details><summary>${labels.origin}</summary><div class="accordion-content">${labels.originInfo}</div></details>
        </div>
      </div>
    </div>
  </section>${renderProductTrace(product)}`;
}

function renderCart() {
  const labels = text();
  const cart = getCart();
  if (!cart.length) return `<section class="page-shell"><div class="page-intro"><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.cart}</p><h1>${labels.cartTitle}</h1></div>
    <div class="empty-state"><div class="empty-mark">✳</div><h2>${labels.emptyTitle}</h2><p>${labels.emptyText}</p><a class="button button-dark" href="/shop">${labels.continueShopping}<span>↗</span></a></div></section>`;
  const rows = cart.map((item) => {
    const product = productById(item.id);
    if (!product) return "";
    return `<article class="cart-item" data-cart-item="${product.id}">
      <a class="cart-thumb" href="/product/${product.id}"><img src="${product.image}" alt="${product.imageAlt[language]}" loading="lazy"></a>
      <div><h2><a href="/product/${product.id}">${product.name[language]}</a></h2><p>${product.tasting[language]}</p><div class="cart-item-actions">${quantityControl(item.quantity, language, product.id)}<button class="remove-button" type="button" data-action="remove-item" data-product-id="${product.id}">${labels.remove}</button></div></div>
      <strong class="cart-item-price product-availability ${product.available ? "is-available" : "is-unavailable"}"><span class="availability-dot" aria-hidden="true"></span>${product.available ? labels.available : labels.unavailable}</strong>
    </article>`;
  }).join("");
  return `<section class="page-shell"><div class="page-intro"><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.cart}</p><h1>${labels.cartTitle}</h1></div><div class="cart-layout"><div class="cart-list">${rows}<a class="text-link" href="/shop">← ${labels.continueShopping}</a></div>${orderSummary(cart, language)}</div></section>`;
}

function renderCheckout() {
  const labels = text();
  const cart = getCart();
  const items = cart.map((item) => {
    const product = productById(item.id);
    return `<div class="checkout-item"><img src="${product.image}" alt=""><div><strong>${product.name[language]}</strong><br><span>${item.quantity} ×</span></div></div>`;
  }).join("");
  return `<section class="page-shell"><div class="page-intro"><p class="eyebrow"><span class="eyebrow-dot"></span>${labels.checkout}</p><h1>${labels.checkoutTitle}</h1><p>${labels.checkoutIntro}</p></div>
    ${cart.length ? `<div class="checkout-layout"><div class="summary-card"><h2>${labels.orderSummary}</h2><div class="checkout-items">${items}</div><p class="summary-note">${labels.checkoutUnavailable}</p><a class="button button-dark" href="/shop">${labels.continue}<span>↗</span></a></div></div>` : `<div class="empty-state checkout-empty"><div class="empty-mark">✳</div><h2>${labels.checkoutEmpty}</h2><a class="button button-dark" href="/shop">${labels.continue}<span>↗</span></a></div>`}
  </section>`;
}

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: .12 });
  elements.forEach((element) => observer.observe(element));
}

function renderPageContent() {
  const main = document.querySelector("#page-content");
  supplyMap?.remove();
  supplyMap = null;
  if (page === "home") main.innerHTML = renderHome();
  else if (page === "shop") main.innerHTML = renderShop();
  else if (page === "product") {
    const product = productById(productSlug);
    main.innerHTML = product ? renderProduct(product) : `<section class="page-shell empty-state"><h1>404</h1><p>${language === "de" ? "Diese Sorte gibt es hier nicht." : "This variety is not available here."}</p><a class="button button-dark" href="/shop">${text().continueShopping}</a></section>`;
  } else if (page === "cart") main.innerHTML = renderCart();
  else if (page === "checkout") main.innerHTML = renderCheckout();
  else main.innerHTML = `<section class="page-shell empty-state"><h1>404</h1><p>${language === "de" ? "Diese Seite wurde nicht gefunden." : "This page could not be found."}</p><a class="button button-dark" href="/">${text().backHome}</a></section>`;
  main.classList.remove("page-content-enter");
  void main.offsetWidth;
  main.classList.add("page-content-enter");
  observeReveals();
  initializeMap();
  if (page === "product" && window.location.hash === "#lieferkette") {
    requestAnimationFrame(() => document.querySelector("#lieferkette")?.scrollIntoView());
  }
}

function render() {
  document.documentElement.lang = language;
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#1b1915" : "#f6f2e9";
  document.querySelector("#site-header").innerHTML = header(language, cartCount(), page, theme);
  document.querySelector("#site-footer").innerHTML = footer(language);
  renderPageContent();
  document.title = page === "home" ? (language === "de" ? "TrueOrigin — Jeder Bissen hat eine Geschichte" : "TrueOrigin — Every Bite Has a Story") : `${page === "product" ? productById(productSlug)?.name[language] || "404" : text()[page]} — TrueOrigin`;
  const canonical = document.querySelector('link[rel="canonical"]') || document.head.appendChild(Object.assign(document.createElement("link"), { rel: "canonical" }));
  canonical.href = `${SITE_URL}${path === "/" ? "/" : path}`;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const languageButton = target.closest("[data-language]");
  if (languageButton) {
    language = languageButton.dataset.language;
    localStorage.setItem("trueorigin-language", language);
    render();
    return;
  }
  const action = target.closest("[data-action]");
  if (!action) return;
  if (action.dataset.action === "menu") {
    const nav = document.querySelector("#main-navigation");
    const open = nav.classList.toggle("is-open");
    action.setAttribute("aria-expanded", String(open));
  } else if (action.dataset.action === "theme-toggle") {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("trueorigin-theme", theme);
    render();
  } else if (action.dataset.action === "add-product") {
    const product = productById(action.dataset.productId);
    if (!product?.available) return;
    const quantity = Number(document.querySelector("[data-quantity-control] input")?.value || 1);
    addToCart(action.dataset.productId, quantity);
    showToast(text().added);
  } else if (action.dataset.action === "remove-item") {
    removeFromCart(action.dataset.productId);
  } else if (action.dataset.action === "quantity-plus" || action.dataset.action === "quantity-minus") {
    const control = action.closest("[data-quantity-control]");
    const input = control.querySelector("input");
    const next = Number(input.value) + (action.dataset.action === "quantity-plus" ? 1 : -1);
    input.value = String(Math.max(1, Math.min(99, next)));
    if (control.dataset.itemId) setCartQuantity(control.dataset.itemId, Number(input.value));
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || !form.hasAttribute("data-article-lookup")) return;
  event.preventDefault();
  const input = form.elements.namedItem("articleNumber");
  const message = form.querySelector("[data-article-message]");
  if (!(input instanceof HTMLInputElement) || !message) {
    throw new Error("Das Artikelsuchformular ist unvollständig.");
  }
  const normalizedNumber = input.value.trim().toUpperCase().replace(/[\s-]/g, "");
  const product = products.find((entry) =>
    entry.articleNumber.toUpperCase().replace(/[\s-]/g, "") === normalizedNumber
  );
  if (!product) {
    message.textContent = text().articleSearchNotFound;
    return;
  }
  window.location.assign(`/product/${product.id}#lieferkette`);
});

document.addEventListener("change", (event) => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || !input.closest("[data-quantity-control]")) return;
  const control = input.closest("[data-quantity-control]");
  const quantity = Math.max(1, Math.min(99, Math.trunc(Number(input.value) || 1)));
  input.value = String(quantity);
  if (control.dataset.itemId) setCartQuantity(control.dataset.itemId, quantity);
});

window.addEventListener("scroll", () => {
  document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

window.addEventListener("storage", (event) => {
  if (event.key === "trueorigin-cart-v2" || event.key === "trueorigin-language" || event.key === "trueorigin-theme") {
    language = localStorage.getItem("trueorigin-language") || "de";
    if (language !== "de" && language !== "en") language = "de";
    const savedTheme = localStorage.getItem("trueorigin-theme");
    theme = savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    render();
  }
});

window.addEventListener("cartchange", () => {
  document.querySelector("#site-header").innerHTML = header(language, cartCount(), page, theme);
  if (page === "cart" || page === "checkout") renderPageContent();
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (localStorage.getItem("trueorigin-theme")) return;
  theme = event.matches ? "dark" : "light";
  render();
});

render();
