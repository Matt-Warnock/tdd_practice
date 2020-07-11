class AtbashCipher {
  encode(input) {
    let encoded = '';
    const alphabet = Array.from('abcdefghijklmnopqrstuvwxyz'),
          cipher = alphabet.slice().reverse();

    Array.from(input.toLowerCase()).forEach(character => {
      if (/\d/.exec(character)) {
        encoded += character;
        return;
      }
      alphabet.forEach((letter, index) => {
        if (character === letter) {
          encoded += cipher[index];
        }
      });
    });
    return encoded.replace(/[\da-z].{4}/g, match => match + ' ').trim();
  }
}
