'use strict';

const fileReader = require('../lib/file-reader');

describe('file-reader.test.js', () => {
  test('All text found', (done) => {
    fileReader.readFile(['kafka.txt', 'panagram.txt', 'werther.txt'], (error, data) => {
      expect(error).toBeNull();
      expect(data).toEqual(['One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.', 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.', ' wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.']);
      done();
    });
  });

  test('Each file received must be valid file', done => {
    fileReader.readFile(['garbage', 'panagram.txt', 'werther.txt'], (error) => {
      expect(error).not.toBeNull();
      done();
    });
  });

  test('Each file received must be valid file', done => {
    fileReader.readFile(['kafka.txt', 'garbage', 'werther.txt'], (error) => {
      expect(error).not.toBeNull();
      done();
    });
  });

  test('Each file received must be valid file', done => {
    fileReader.readFile(['kafka.txt', 'panagram.txt', 'garbage'], (error) => {
      expect(error).not.toBeNull();
      done();
    });
  });
});