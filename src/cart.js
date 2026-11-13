import { productById } from "./catalog.js";

const CART_KEY = "trueorigin-cart-v2";

function readCart() {
  const raw = localStorage.getItem(CART_KEY);
  if (!raw) return [];
  let items;
  try {
    items = JSON.parse(raw);
  } catch (error) {
    throw new Error("Der gespeicherte Warenkorb ist beschädigt. Bitte lösche die Website-Daten und versuche es erneut.", { cause: error });
  }
  if (!Array.isArray(items)) {
    throw new Error("Der gespeicherte Warenkorb hat ein ungültiges Format.");
  }
  return items.filter((item) =>
    item && typeof item.id === "string" && productById(item.id) &&
    Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99
  );
}

function writeCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("cartchange"));
}

export function getCart() {
  return readCart();
}

export function cartCount() {
  return readCart().reduce((total, item) => total + item.quantity, 0);
}

export function addToCart(id, quantity) {
  if (!productById(id)) throw new Error(`Unbekanntes Produkt: ${id}`);
  const amount = Math.max(1, Math.min(99, Math.trunc(Number(quantity) || 1)));
  const items = readCart();
  const existing = items.find((item) => item.id === id);
  if (existing) existing.quantity = Math.min(99, existing.quantity + amount);
  else items.push({ id, quantity: amount });
  writeCart(items);
}

export function setCartQuantity(id, quantity) {
  const amount = Math.trunc(Number(quantity));
  if (!productById(id) || !Number.isFinite(amount)) throw new Error("Ungültiges Produkt oder ungültige Menge.");
  const items = readCart();
  if (amount < 1) {
    writeCart(items.filter((item) => item.id !== id));
    return;
  }
  const item = items.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity = Math.min(99, amount);
  writeCart(items);
}

export function removeFromCart(id) {
  writeCart(readCart().filter((item) => item.id !== id));
}

export function clearCart() {
  writeCart([]);
}
