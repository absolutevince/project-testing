function analyzeArray(array) {
  return {
    average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
    min: array.reduce((acc, curr) => (acc < curr ? acc : curr)),
    max: array.reduce((acc, curr) => (acc > curr ? acc : curr)),
    length: array.length,
  };
}

module.exports = analyzeArray;
