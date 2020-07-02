describe('Space Age', () => {
  let spaceage;

  beforeEach(() => {
    spaceage = new SpaceAge();
  });

  it('calculates age on Earth', () => {
    expect(spaceage.age('earth', 1000000000)).toEqual(31.69);
  });

  it('calculates age on Mercury', () => {
    expect(spaceage.age('mercury', 2134835688)).toEqual(280.88);
  });

  it('calculates age on Venus', () => {
    expect(spaceage.age('venus', 189839836)).toEqual(9.78);
  });

  it('calculates age on Mars', () => {
    expect(spaceage.age('mars', 2129871239)).toEqual(35.88);
  });

  it('calculates age on Jupiter', () => {
    expect(spaceage.age('jupiter', 901876382)).toEqual(2.41);
  });

  it('calculates age on Saturn', () => {
    expect(spaceage.age('saturn', 2000000000)).toEqual(2.15);
  });

  it('calculates age on Uranus', () => {
    expect(spaceage.age('uranus', 1210123456)).toEqual(0.46);
  });

  it('calculates age on Neptune', () => {
    expect(spaceage.age('neptune', 1821023456)).toEqual(0.35);
  });

  it('returns no number when an unrecognized planet is entered', () => {
    expect(spaceage.age('pluto', 1821023456)).toEqual(NaN);
  });
});
