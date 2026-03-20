export function calculateDiscount(price, type) {
  if (price <= 0) return "Помилка ціни";
  if (type === "VIP") return price * 0.8; // Знижка 20%
  if (type === "CHILD") return price * 0.5; // Знижка 50%
  return price; // Без знижки
}