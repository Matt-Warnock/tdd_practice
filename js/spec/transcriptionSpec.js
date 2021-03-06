
describe('Transcription', () => {
  let transcription;

  beforeEach(() => {
    transcription = new Transcription();
  });

  it('does nothing for an empty RNA sequence', () => {
    expect(transcription.toRNA('')).toEqual('');
  });

  it('transcribes cytosine to guanine', () => {
    expect(transcription.toRNA('C')).toEqual('G');
  });

  it('transcribes guanine to cytosine', () => {
    expect(transcription.toRNA('G')).toEqual('C');
  });

  it('transcribes thymine to adenine', () => {
    expect(transcription.toRNA('T')).toEqual('A');
  });

  it('transcribes adenine to uracil', () => {
    expect(transcription.toRNA('A')).toEqual('U');
  });

  it('transcribes all DNA nucleotides to their RNA complements', () => {
    expect(transcription.toRNA('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });

  it('returns error to any non-RNA data inputed', () => {
    expect(transcription.toRNA('ACXTGGTCTVAA')).toEqual('UG?ACCAGA?UU');
  });
});
