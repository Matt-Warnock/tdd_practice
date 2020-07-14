class Hamming {
  compute(strandA, strandB) {
    let hammingDistance = 0;

    Array.from(strandA).forEach((dna, i) => {
      if (dna !== strandB[i]) {
        hammingDistance += 1;
      }

    });
    return hammingDistance;
  }
}
