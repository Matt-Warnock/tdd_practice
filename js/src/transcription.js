class Transcription {

  toRNA(dna) {
    const dna_to_rna = {C: 'G', G: 'C', T: 'A', A: 'U'};
    let rna = '';

    Array.from(dna).forEach(nucleotide => {
          rna += dna_to_rna[nucleotide];
      });

    return rna;
  }
}
