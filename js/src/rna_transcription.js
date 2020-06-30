class Transcription {
  constructor() {

  }
  toRNA(dna) {
    if (dna === 'C') {
      dna = 'G';
      return dna;
    }
    if (dna === 'G') {
      dna = 'C';
    }
    if (dna === 'T') {
      dna = 'A';
    }
    return dna;
  }
}
