function reverseString(string) {
  if (string.trim().length <= 1) return string.trim();
  return string.trim().split("").reverse().join("");
}

module.exports = reverseString;
