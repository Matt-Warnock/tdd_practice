describe('Bob', () => {
  let bob;

  beforeEach(() => {
    bob = new Bob();
  });

  it('replies to stating something', () => {
    const reply = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(reply).toEqual('Whatever.');
  });

  it('replies to shouting', () => {
    const reply = bob.hey('WATCH OUT!');
    expect(reply).toEqual('Whoa, chill out!');
  });

  it('replies to shouting gibberish', () => {
    const reply = bob.hey('FCECDFCAAB');
    expect(reply).toEqual('Whoa, chill out!');
  });

  it('replies to asking a question', () => {
    const reply = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(reply).toEqual('Sure.');
  });

  it('replies to asking a numeric question', () => {
    const reply = bob.hey('You are, what, like 15?');
    expect(reply).toEqual('Sure.');
  });

  it('replies to asking gibberish', () => {
    const reply = bob.hey('fffbbcbeab?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to talking forcefully', () => {
    const reply = bob.hey("Let's go make out behind the gym!");
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to using acronyms in regular speech', () => {
    const reply = bob.hey("It's OK if you don't want to go to the DMV.");
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to forceful question', () => {
    const reply = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(reply).toEqual('Calm down, I know what I\'m doing!');
  });

  xit('replies to shouting numbers', () => {
    const reply = bob.hey('1, 2, 3 GO!');
    expect(reply).toEqual('Whoa, chill out!');
  });

  xit('replies to only numbers', () => {
    const reply = bob.hey('1, 2, 3');
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to question with only numbers', () => {
    const reply = bob.hey('4?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to shouting with special characters', () => {
    const reply = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(reply).toEqual('Whoa, chill out!');
  });

  xit('replies to shouting with no exclamation mark', () => {
    const reply = bob.hey('I HATE YOU');
    expect(reply).toEqual('Whoa, chill out!');
  });

  xit('replies to statement containing question mark', () => {
    const reply = bob.hey('Ending with a ? means a question.');
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to non-letters with question', () => {
    const reply = bob.hey(':) ?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to prattling on', () => {
    const reply = bob.hey('Wait! Hang on. Are you going to be OK?');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to silence', () => {
    const reply = bob.hey('');
    expect(reply).toEqual('Fine. Be that way!');
  });

  xit('replies to prolonged silence', () => {
    const reply = bob.hey('          ');
    expect(reply).toEqual('Fine. Be that way!');
  });

  xit('replies to alternate silence', () => {
    const reply = bob.hey("\t\t\t\t\t\t\t\t\t\t");
    expect(reply).toEqual('Fine. Be that way!');
  });

  xit('replies to multiple line question', () => {
    const reply = bob.hey("\nDoes this cryogenic chamber make me look fat?\nno");
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to starting with whitespace', () => {
    const reply = bob.hey('         hmmmmmmm...');
    expect(reply).toEqual('Whatever.');
  });

  xit('replies to ending with whitespace', () => {
    const reply = bob.hey('Okay if like my  spacebar  quite a bit?   ');
    expect(reply).toEqual('Sure.');
  });

  xit('replies to other whitespace', () => {
    const reply = bob.hey("\n\r \t");
    expect(reply).toEqual('Fine. Be that way!');
  });

  xit('replies to non-question ending with whitespace', () => {
    const reply = bob.hey('This is a statement ending with whitespace      ');
    expect(reply).toEqual('Whatever.');
  });
});
