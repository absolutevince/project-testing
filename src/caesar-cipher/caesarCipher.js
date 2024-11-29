function caesarCipher(string, steps) {
  let cipheredString = "";
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    const shiftedCharCode = charCode + steps;
    if (charCode === 32) {
      cipheredString += " ";
    } else {
      if (
        (shiftedCharCode > 90 && shiftedCharCode < 97) ||
        shiftedCharCode > 122
      ) {
        cipheredString += String.fromCharCode(shiftedCharCode - 26);
      } else {
        cipheredString += String.fromCharCode(shiftedCharCode);
      }
    }
  }

  return cipheredString;
}

module.exports = caesarCipher;
