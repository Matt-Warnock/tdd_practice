class Hamming {
  compute(strandA, strandB) {
    let hammingDistance = 0;
    const conditions = [strandA.length === 0 && strandB.length > 0,
                        strandB.length === 0 && strandA.length > 0,
                        strandA.length !== strandB.length],
          errorMessages = ['left strand must not be empty',
                           'right strand must not be empty', 
                           'left and right strands must be of equal length'];

    for (var i = 0; i < conditions.length; i++) {
      if (conditions[i]) {
        throw new Error(errorMessages[i]);
      }
    }

    Array.from(strandA).forEach((dna, i) => {
      if (dna !== strandB[i]) {
        hammingDistance += 1;
      }
    });

    return hammingDistance;
  }
}
