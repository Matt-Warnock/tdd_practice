class AtbashCipher {
  constructor() {
    this.alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
    this.cipher = this.alphabet.slice().reverse();
  }

  encode(input) {
    let encoded = this.translate(input, this.alphabet, this.cipher);
    return encoded.replace(/[\da-z].{4}/g, match => match + ' ').trim();
  }

  decode(input) {
    return this.translate(input, this.cipher, this.alphabet);
  }

  translate(text, alphaFrom, alphaTo) {
    let translated = '';

    Array.from(text.toLowerCase()).forEach(character => {
      if (/\d/.exec(character)) {
        translated += character;
        return;
      }
      alphaFrom.forEach((letter, index) => {
        if (character === letter) {
          translated += alphaTo[index];
        }
      });
    });
    return translated;
  }
}
