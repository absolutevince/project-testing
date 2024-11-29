function calculator(n, m, operator) {
  switch (operator) {
    case "+":
      return n + m;
    case "-":
      return n - m;
    case "*":
      return n * m;
    case "/":
      return n / m;
  }
}

module.exports = calculator;
