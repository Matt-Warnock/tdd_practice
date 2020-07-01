class SpaceAge {
  constructor() {
    this.earthYearInSeconds = 31557600;
  }
  age(planet, secondsAge) {
    if (planet === 'mercury') {
      this.earthYearInSeconds *= 0.2408467;
    }
    return parseFloat((secondsAge / this.earthYearInSeconds).toFixed(2));
  }
}
