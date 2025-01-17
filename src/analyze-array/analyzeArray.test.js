const analyzeArray = require("./analyzeArray");

describe("Analyze Array", () => {
  test("return an object with properities 'average', 'min', 'max', 'length' with corresponding values", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
});
