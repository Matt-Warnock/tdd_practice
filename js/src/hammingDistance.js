class Hamming {
  compute(strandA, strandB) {
    if (strandA !== strandB) {
      return 1;
    }
    return 0;
  }
}
