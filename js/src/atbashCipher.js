class AtbashCipher {
  encode(input) {
    let encoded = '';
    let alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
    let cipher = alphabet.slice().reverse();

    let message = input.toLowerCase();

    Array.from(message).forEach(character => {
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
