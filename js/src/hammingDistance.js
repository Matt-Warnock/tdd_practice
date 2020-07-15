class Hamming {
  compute(strandA, strandB) {
    this._validateStrands(strandA, strandB);

    let hammingDistance = 0;

      Array.from(strandA).forEach((dna, i) => {
        if (dna !== strandB[i]) {
          hammingDistance += 1;
        }
      });
      return hammingDistance;
    }

    _validateStrands(strandA, strandB) {
      if (strandA.length !== strandB.length) {
          if (strandA.length === 0) {
            throw new Error('left strand must not be empty');
          }

          if (strandB.length === 0) {
            throw new Error('right strand must not be empty');
          }

        throw new Error('left and right strands must be of equal length');
      }
    }
  }
