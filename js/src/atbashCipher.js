class AtbashCipher {
  constructor() {
    const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz'),
          cipher = alphabet.slice().reverse();

    this.converstionTable = {};
    alphabet.map((letter, i) => this.converstionTable[letter] = cipher[i]);
  }

  encode(input) {
    let encoded = this.translate(input);
    return encoded.replace(/\w{5}/g, match => match + ' ').trim();
  }

  decode(input) {
    return this.translate(input);
  }

  translate(text) {
    let translated = '';

    Array.from(text.toLowerCase()).forEach(character => {
      if (/\d/.exec(character)) {
        translated += character;
        return;
      }

      if (/[a-z]/.exec(character)) {
        translated += this.converstionTable[character];
      }
    });

    return translated;
  }
}
