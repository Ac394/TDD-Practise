import { calculator } from "./calculator";

const calc = new calculator();

test("If the result is correct", () => {
  expect(calc.add(2, 4)).toBe(6);
  expect(calc.subtract(2, 4)).toBe(-2);
  expect(calc.divide(2, 4)).toBe(0.5);
  expect(calc.multiply(2, 4)).toBe(8);
});

test("If there is no input", () => {
  expect(calc.add()).toBe(0);
  expect(calc.subtract()).toBe(0);
  expect(calc.divide()).toBe(0);
  expect(calc.multiply()).toBe(0);
});
