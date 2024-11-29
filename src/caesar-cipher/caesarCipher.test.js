const caesarCipher = require("./caesarCipher");

describe("Caesar's Cipher", () => {
  test("5 steps", () => {
    expect(caesarCipher("decipher this", 5)).toBe("ijhnumjw ymnx");
  });

  test("inclue capital letter", () => {
    expect(caesarCipher("Rocket Science", 5)).toBe("Wthpjy Xhnjshj");
  });
  test("another capital letter", () => {
    expect(caesarCipher("wOrLd BuildIng", 5)).toBe("bTwQi GznqiNsl");
  });
  test("rotating back to the beginning of the alphabet when steps reach beyong letter 'z'/'Z'", () => {
    expect(caesarCipher("excalibur", 5)).toBe("jchfqngzw");
  });
});
