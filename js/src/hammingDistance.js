class Hamming {
  compute(strandA, strandB) {
    if (strandA.length === 0 && strandB.length > 0) {
      throw new Error('left strand must not be empty');
    }
    if (strandB.length === 0 && strandA.length > 0) {
      throw new Error('right strand must not be empty');
    }
    if (strandA.length !== strandB.length) {
      throw new Error('left and right strands must be of equal length');
    }
    let hammingDistance = 0;

    Array.from(strandA).forEach((dna, i) => {
      if (dna !== strandB[i]) {
        hammingDistance += 1;
      }

    });
    return hammingDistance;
  }
}
