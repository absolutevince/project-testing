const capitalize = require("./capitalize");

describe("Capitalize", () => {
  test("capitalize the first char", () => {
    expect(capitalize("boring")).toBe("Boring");
  });

  test("ignore punctuations", () => {
    expect(capitalize("!yest")).toBe("!Yest");
  });
});
