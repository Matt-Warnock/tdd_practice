class Transcription {
  constructor() {

  }

  toRNA(dna) {
    const dnaNucleotides = ['C', 'G', 'T', 'A'],
    rnaNucleotides = ['G', 'C', 'A', 'U'];
    let rna = '';

    dnaNucleotides.forEach((nuc, index) => {
      if (dna === nuc) {
        console.log(rnaNucleotides[index]);
        rna = rnaNucleotides[index];
      }
    });

    return rna;
  }
}
