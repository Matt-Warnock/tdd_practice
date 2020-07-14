describe('Hamming', () => {
  let hamming;

  beforeEach(() => {
    hamming = new Hamming();
  });

  it('computes empty strands', () => {
    expect(hamming.compute('', '')).toEqual(0);
  });

  it('computes single letter identical strands', () => {
    expect(hamming.compute('A', 'A')).toEqual(0);
  });

  it('computes single letter different strands', () => {
    expect(hamming.compute('G', 'T')).toEqual(1);
  });

  it('computes long identical strands', () => {
    expect(hamming.compute('GGACTGAAATCTG', 'GGACTGAAATCTG')).toEqual(0);
  });

  it('computes long different strands', () => {
    expect(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  it('disallows when first strand is longer', () => {
    expect(() => hamming.compute('AATG', 'AAA')).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });

  it('disallows when second strand is longer', () => {
    expect(() => hamming.compute('ATA', 'AGTG')).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });

  xit('disallows when left strand is empty', () => {
    expect(() => hamming.compute('', 'G')).toThrow(
      new Error('left strand must not be empty'),
    );
  });

  xit('disallows when right strand is empty', () => {
    expect(() => hamming.compute('G', '')).toThrow(
      new Error('right strand must not be empty'),
    );
  });
});
