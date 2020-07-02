class Transcription {

  toRNA(dna) {
    const dna_to_rna = {
      C: 'G',
      G: 'C',
      T: 'A',
      A: 'U'
    };
    
    let rna = '';

    Array.from(dna).forEach(nucleotide => {
      if (dna_to_rna[nucleotide] === undefined) {
        rna += '?';
        return;
      }

      rna += dna_to_rna[nucleotide];
    });

    return rna;
  }
}
