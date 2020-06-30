
describe('Transcription', () => {
  let transcription;

  beforeEach(() => {
    transcription = new Transcription();
  });

  it('does nothing for an empty RNA sequence', () => {
    expect(transcription.toRNA('')).toEqual('');
  });

  xit('transcribes cytosine to guanine', () => {
    expect(transcription.toRNA('C')).toEqual('G');
  });

  xit('transcribes guanine to cytosine', () => {
    expect(transcription.toRNA('G')).toEqual('C');
  });

  xit('transcribes thymine to adenine', () => {
    expect(transcription.toRNA('T')).toEqual('A');
  });

  xit('transcribes adenine to uracil', () => {
    expect(transcription.toRNA('A')).toEqual('U');
  });

  xit('transcribes all DNA nucleotides to their RNA complements', () => {
    expect(transcription.toRNA('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
});
