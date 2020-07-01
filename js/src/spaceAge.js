class SpaceAge {
  constructor() {
    this.earthYearInSeconds = 31557600;
  }
  age(planet, secondsAge) {
    if (planet === 'mercury') {
      this.earthYearInSeconds *= 0.2408467;
    }
    if (planet === 'venus') {
      this.earthYearInSeconds *= 0.61519726;
    }
    if (planet === 'mars') {
      this.earthYearInSeconds *= 1.8808158;
    }
    return parseFloat((secondsAge / this.earthYearInSeconds).toFixed(2));
  }
}
