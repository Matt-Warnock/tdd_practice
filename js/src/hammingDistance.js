class Hamming {
  compute(strandA, strandB) {
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
