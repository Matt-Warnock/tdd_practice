class AtbashCipher {
  constructor() {
    this.alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
    this.cipher = this.alphabet.slice().reverse();
  }

  encode(input) {
    let encoded = '';

    Array.from(input.toLowerCase()).forEach(character => {
      if (/\d/.exec(character)) {
        encoded += character;
        return;
      }
      this.alphabet.forEach((letter, index) => {
        if (character === letter) {
          encoded += this.cipher[index];
        }
      });
    });
    return encoded.replace(/[\da-z].{4}/g, match => match + ' ').trim();
  }

  decode(input) {
    let decoded = '';

    Array.from(input).forEach(character => {
      this.cipher.forEach((letter, index) => {
        if (character === letter) {
          decoded += this.alphabet[index];
        }
      });
    });
    return decoded;
  }
}
