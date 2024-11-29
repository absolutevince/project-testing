function capitalize(string) {
  const firstCharCode = string.charCodeAt(0);
  if (
    firstCharCode < 65 ||
    (firstCharCode > 90 && firstCharCode < 97) ||
    firstCharCode > 122
  ) {
    return string[0] + string[1].toUpperCase() + string.slice(2);
  }
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;
