const analyzeArray = require("../src/analyzeArray");

it("find average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
  expect(analyzeArray([1, 2, 3, 4, 0])).toEqual({ average: 2, min: 0, max: 4, length: 5 });
});

it("find min", () => {
  expect(analyzeArray([1, 3, 4, 20])).toEqual({ average: 7, min: 1, max: 20, length: 4 });
});

it("find max", () => {
  expect(analyzeArray([1, 32, 4, 2, 4, 2])).toEqual({ average: 7.5, min: 1, max: 32, length: 6 });
});

it("find length", () => {
  expect(analyzeArray([1, 2, 4, 2, 9, 0])).toEqual({ average: 3, min: 0, max: 9, length: 6 });
});
