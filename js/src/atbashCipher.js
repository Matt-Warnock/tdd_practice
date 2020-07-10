class AtbashCipher {
  encode(input) {
    let encoded = '';
    let alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
    let cipher = alphabet.slice().reverse();

    let message = input.toLowerCase();

    Array.from(message).forEach(character => {
      alphabet.forEach((letter, index) => {
        if (character === letter) {
          encoded += cipher[index];
        }
      });
    });
    return encoded;
  }
}
