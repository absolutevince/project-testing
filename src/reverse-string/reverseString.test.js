const reverseString = require("./reverseString");

describe("Reverse String", () => {
  test("reverse", () => {
    expect(reverseString("globe")).toBe("ebolg");
  });
});
