class Bob {
  hey(string) {
    if (/[A-Z]+[^a-z]!|^[A-Z]+$/g.exec(string)) {
      return 'Whoa, chill out!';
    }

    if (/[a-z0-9]\?$/g.exec(string)) {
      return 'Sure.';
    }
    if (/[A-Z]{2,}\?$/g.exec(string)) {
      return 'Calm down, I know what I\'m doing!';
    }

    return 'Whatever.';
  }
}
