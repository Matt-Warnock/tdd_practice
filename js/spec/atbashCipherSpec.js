describe('Atbash Cipher', () => {
  let cipher;

  beforeEach(() => {
    cipher = new AtbashCipher();
  });

  describe('#encode', () => {
    it('encodes yes', () => {
      expect(cipher.encode('yes')).toEqual('bvh');
    });

    it('encodes no', () => {
      expect(cipher.encode('no')).toEqual('ml');
    });

    it('encodes OMG', () => {
      expect(cipher.encode('OMG')).toEqual('lnt');
    });

    it('encodes spaces', () => {
      expect(cipher.encode('O M G')).toEqual('lnt');
    });

    it('encodes mindblowingly', () => {
      expect(cipher.encode('mindblowingly')).toEqual('nrmwy oldrm tob');
    });

    it('encodes numbers', () => {
      expect(cipher.encode('Testing,1 2 3, testing.')).toEqual('gvhgr mt123 gvhgr mt');
    });

    it('encodes deep thought', () => {
      expect(cipher.encode('Truth is fiction.')).toEqual('gifgs rhurx grlm');
    });

    it('encodes all the letters', () => {
      const messageToEncode = 'The quick brown fox jumps over the lazy dog.';
      const encodedMessage = 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt';
      expect(cipher.encode(messageToEncode)).toEqual(encodedMessage);
    });
  });

  describe('#decode', () => {
    it('decodes exercism', () => {
      expect(cipher.decode('vcvix rhn')).toEqual('exercism');
    });

    it('decodes a sentence', () => {
      const messageToDecode = 'zmlyh gzxov rhlug vmzhg vkkrm thglm v';
      const decodedMessage = 'anobstacleisoftenasteppingstone';
      expect(cipher.decode(messageToDecode)).toEqual(decodedMessage);
    });

    it('decodes numbers', () => {
      expect(cipher.decode('gvhgr mt123 gvhgr mt')).toEqual('testing123testing');
    });

    it('decodes all the letters', () => {
      const messageToDecode = 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt';
      const decodedMessage = 'thequickbrownfoxjumpsoverthelazydog';
      expect(cipher.decode(messageToDecode)).toEqual(decodedMessage);
    });

    it('decodes with too many spaces', () => {
      expect(cipher.decode('vc vix    r hn')).toEqual('exercism');
    });

    it('decodes with no spaces', () => {
      const messageToDecode = 'zmlyhgzxovrhlugvmzhgvkkrmthglmv';
      const decodedMessage = 'anobstacleisoftenasteppingstone';
      expect(cipher.decode(messageToDecode)).toEqual(decodedMessage);
    });
  });
});
