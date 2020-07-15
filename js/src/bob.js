class Bob {
  hey(string) {
    if (/^\s*$/g.exec(string)) {
      return 'Fine. Be that way!';
    }

    if (/^[A-Z\s]+\?$/g.exec(string)) {
      return 'Calm down, I know what I\'m doing!';
    }

    if (/.\?\s*$/g.exec(string)) {

      return 'Sure.';
    }

    if (/[A-Z][^a-z]!|^[A-Z\s]+$/g.exec(string)) {
      return 'Whoa, chill out!';
    }

    return 'Whatever.';
  }
}
