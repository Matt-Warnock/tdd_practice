class Transcription {
  constructor() {

  }
  toRNA(dna) {
    if (dna === 'C') {
      dna = 'G';
    }
    
    return dna;
  }
}
