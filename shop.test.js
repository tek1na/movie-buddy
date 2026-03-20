import { expect, test } from 'vitest'
import { calculateDiscount } from './shop'

test('Знижка для VIP клієнта', () => {
  expect(calculateDiscount(100, "VIP")).toBe(80)
})

test('Знижка для дітей', () => {
  expect(calculateDiscount(100, "CHILD")).toBe(50)
})

test('Ціна без знижки', () => {
  expect(calculateDiscount(100, "REGULAR")).toBe(100)
})

test('Перевірка помилки при відємній ціні', () => {
  expect(calculateDiscount(-10, "VIP")).toBe("Помилка ціни")
})