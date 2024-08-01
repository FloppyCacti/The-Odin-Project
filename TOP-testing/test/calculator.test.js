const calculator = require("../src/calculator");

it("add", () => {
  expect(calculator.add(1, 4)).toBe(5);
  expect(calculator.add(1, -1)).toBe(0);
});

it("subtract", () => {
  expect(calculator.subtract(1, -1)).toBe(2);
});

it("multiply", () => {
  expect(calculator.multiply(10, -1)).toBe(-10);
  expect(calculator.multiply(0, -1)).toBe(-0);
});

it("divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.divide(-10, 2)).toBe(-5);
  expect(calculator.divide(10, 0)).toBe("Division by zero is not allowed.");
});
