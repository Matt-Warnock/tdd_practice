class Transcription {
  constructor() {

  }
  
  toRNA(dna) {
    const dnaNucleotides = ['C', 'G', 'T'],
    rnaNucleotides = ['G', 'C', 'A'];
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
