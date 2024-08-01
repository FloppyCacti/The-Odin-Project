function caesarCipher(string, num) {
  if (typeof num !== "number") return "Key has to be number";
  if (num == 0) return string;
  let result = "";

  for (let char of string) {
    let charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      charCode = char.charCodeAt(0) - 65;
      result += String.fromCharCode(((charCode + num) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = char.charCodeAt(0) - 97;
      result += String.fromCharCode(((charCode + num) % 26) + 97);
    } else {
      result += char;
    }
  }

  return result;
}

module.exports = caesarCipher;
