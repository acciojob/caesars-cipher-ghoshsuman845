function rot13(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) {  // only operate on uppercase letters
      c = ((c - 65 + 13) % 26) + 65;  // shift by 13 places
    }
    result += String.fromCharCode(c);
  }
  return result;
}
