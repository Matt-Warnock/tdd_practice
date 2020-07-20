class Bob {
  constructor() {
    this.regEx = [/^\s*$/g,
                  /^[A-Z\s]+\?$/g,
                  /.\?\s*$/g,
                  /[^a-z]!|^[A-Z\s]+$/g];
    this.responces = ['Fine. Be that way!',
                      'Calm down, I know what I\'m doing!',
                      'Sure.',
                      'Whoa, chill out!'];
  }

  hey(string) {
    for (var i = 0; i < this.regEx.length; i++) {
      if (this.regEx[i].exec(string)) {
        return this.responces[i];
      }
    }
    return 'Whatever.';
  }
}
