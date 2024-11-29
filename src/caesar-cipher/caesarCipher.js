function caesarCipher(string, steps) {
  let encrypted = "";
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    const shiftedCharCode = charCode + steps;
    if (charCode < 65 || (charCode < 97 && charCode > 90) || charCode > 122) {
      encrypted += string[i];
    } else {
      if (
        (shiftedCharCode > 90 && shiftedCharCode < 97) ||
        shiftedCharCode > 122
      ) {
        encrypted += String.fromCharCode(shiftedCharCode - 26);
      } else {
        encrypted += String.fromCharCode(shiftedCharCode);
      }
    }
  }

  return encrypted;
}

module.exports = caesarCipher;
