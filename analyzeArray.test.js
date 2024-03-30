import analyzeArray from "./analyzeArray";

test("If it returns a correct object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("If input is not a valid", () => {
  expect(() => analyzeArray(["a", 1])).toThrow();
  expect(() => analyzeArray(["a"])).toThrow();
  expect(() => analyzeArray(true)).toThrow();
});
