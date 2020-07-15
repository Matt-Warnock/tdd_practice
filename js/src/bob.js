class Bob {
  hey(string) {
    if (/^\s*$/g.exec(string)) {
      return 'Fine. Be that way!';
    }
    if (/[A-Z][^a-z]!|^[A-Z\s]+$/g.exec(string)) {
      return 'Whoa, chill out!';
    }

    if (/.\?\s*$/g.exec(string)) {
      if (/^[A-Z\s]+\?$/g.exec(string)) {
        return 'Calm down, I know what I\'m doing!';
      }

      return 'Sure.';
    }

    return 'Whatever.';
  }
}
