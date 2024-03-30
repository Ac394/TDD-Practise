import caesarCipher from "./caesarCipher";

test("If it ciphers", () => {
  expect(caesarCipher("ABCabc", 1)).toBe("BCDbcd");
  expect(caesarCipher("abcd", 4)).toBe("efgh");
  expect(caesarCipher("abcd45", -4)).toBe("wxyz45");
});

test("If A and Z loops", () => {
  expect(caesarCipher("ABCDEFGZ", 1)).toBe("BCDEFGHA");
  expect(caesarCipher("Zz", 1)).toBe("Aa");
  expect(caesarCipher("Aa", -1)).toBe("Zz");
});

test("If it works with punctuation", () => {
  expect(caesarCipher("ABCDEFG!", 1)).toBe("BCDEFGH!");
});

test("If input is not valid", () => {
  expect(() => caesarCipher(4)).toThrow();
  expect(() => caesarCipher(true)).toThrow();
});
