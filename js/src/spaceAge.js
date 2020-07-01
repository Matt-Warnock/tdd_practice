class SpaceAge {
  constructor() {
    this.earthYearInSeconds = 31557600;
  }
  age(planet, secondsAge) {
    return parseFloat((secondsAge / this.earthYearInSeconds).toFixed(2));
  }
}
