class Bob {
  hey(string) {
    if (/[A-Z][^a-z]!|^[A-Z\s]+$/g.exec(string)) {
      return 'Whoa, chill out!';
    }

    if (/.\?$/g.exec(string)) {
      if (/^[A-Z\s]+\?$/g.exec(string)) {
        return 'Calm down, I know what I\'m doing!';
      }

      return 'Sure.';
    }

    return 'Whatever.';
  }
}
