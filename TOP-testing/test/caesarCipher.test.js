const caesarCipher = require("../src/caesarCipher");

it("test wrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

it("test case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

it("test space and non-alphabetical characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
