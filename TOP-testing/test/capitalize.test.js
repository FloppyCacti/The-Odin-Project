const capitalizeFirstLetter = require("../src/capitalize")

it("Capitalized", () => {
  expect(capitalizeFirstLetter('test')).toBe('Test')
})

it("Empty String", () =>{
  expect(capitalizeFirstLetter('')).toBe('')
})