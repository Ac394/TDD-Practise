import reverseString from "./reverseString";

test("If it reverses the string", () => {
  expect(reverseString("eleni")).toBe("inele");
  expect(reverseString("12345678")).toBe("87654321");
});

test("If input is not a string", () => {
  expect(() => reverseString(4)).toThrow();
  expect(() => reverseString(true)).toThrow();
});
