class SpaceAge {
  constructor() {
    this.earthYearInSeconds = 31557600;
    this.planetOrbitalPeriods = {
      earth: 1,
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132
    };
  }

  age(planet, secondsAge) {
    let planetYearInSeconds = this.earthYearInSeconds * this.planetOrbitalPeriods[planet];
    return parseFloat((secondsAge / planetYearInSeconds).toFixed(2));
  }
}
