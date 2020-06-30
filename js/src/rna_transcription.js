class Transcription {
  constructor() {

  }

  toRNA(dna) {
    const dnaNucleotides = ['C', 'G', 'T', 'A'],
    rnaNucleotides = ['G', 'C', 'A', 'U'];
    let rna = '';

    let stringArray = Array.from(dna);

    stringArray.forEach(string => {
      dnaNucleotides.forEach((nuc, index) => {
        if (string === nuc) {
          rna += rnaNucleotides[index];
        }
      });
    });

    return rna;
  }
}
