import capitalize from "./capitalize";

test("If it capitalizes the first letter", () => {
  expect(capitalize("eleni")).toBe("Eleni");
});

test("If it's already capitalized", () => {
  expect(capitalize("Eleni")).toBe("Eleni");
});

test("If first char is not a letter", () => {
  expect(capitalize("!eleni")).toBe("!eleni");
  expect(capitalize("4eleni")).toBe("4eleni");
});

test("If input is not a string", () => {
  expect(() => capitalize(4)).toThrow();
  expect(() => capitalize(true)).toThrow();
});
