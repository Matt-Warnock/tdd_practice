class Bob {
  hey(string) {
    if (/[A-Z]{2,}[^a-z]!|^[A-Z]+$/g.exec(string)) {
      return 'Whoa, chill out!';
    }

    if (/\?$/g.exec(string)) {
      return 'Sure.';
    }

    return 'Whatever.';
  }
}
