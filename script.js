function rot13(str) {
  // Create a string of all uppercase letters.
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Create a new string to hold the decoded text.
  let decoded = "";

  // Loop through each character in the input string.
  for (let i = 0; i < str.length; i++) {
    // Check if the character is a letter.
    if (alphabet.includes(str[i])) {
      // Get the index of the character in the alphabet.
      let index = alphabet.indexOf(str[i]);

      // Shift the index by 13 places.
      index = (index + 13) % 26;

      // Get the character at the shifted index.
      decoded += alphabet[index];
    } else {
      // The character is not a letter, so just append it to the decoded string.
      decoded += str[i];
    }
  }

  // Return the decoded string.
  return decoded;
}
