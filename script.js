const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = [];
  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    if (lookup.hasOwnProperty(char)) {
      decodedArr.push(lookup[char]);
    } else {
      decodedArr.push(char);
    }
  }
  return decodedArr.join('');
}

// You can test the function with your example:
console.log(rot13("SERR YBIR? NPPVBWBO"));