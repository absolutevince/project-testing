const calculator = require("./calculator");

describe("Calculator", () => {
  test("using '+' operator", () => {
    expect(calculator(2, 3, "+")).toEqual(5);
  });
  test("using '-' operator", () => {
    expect(calculator(3, 2, "-")).toEqual(1);
  });
  test("using '-' operator, subtracting high number to a lower number", () => {
    expect(calculator(2, 3, "-")).toEqual(-1);
  });
  test("using '*' operator", () => {
    expect(calculator(2, 3, "*")).toEqual(6);
  });
  test("using '/' operator", () => {
    expect(calculator(3, 3, "/")).toEqual(1);
  });
});
