class Bob {
  hey(string) {
    if (/!|[A-Z]{2,}/g.exec(string)) {
      return 'Whoa, chill out!';
    }
    return 'Whatever.';
  }
}
