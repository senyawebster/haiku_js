import { Haiku } from './../js/haiku.js';
import { RandomHaiku } from './../js/random-haiku.js';
const syllable = require('syllable');

describe('haiku', function() {
  let GoodHaiku;
  let BadHaiku;
  let randomHaiku;

  beforeEach(function() {
  GoodHaiku = new Haiku();
  GoodHaiku.line1 = 'Haikus are easy';
  GoodHaiku.line2 = 'But sometimes they don\'t make sense';
  GoodHaiku.line3 = 'Refrigerator';

  BadHaiku = new Haiku();
  BadHaiku.line1 = 'Haikus are super easy';
  BadHaiku.line2 = 'But sometimes they don\'t make sense';
  BadHaiku.line3 = 'Refrigerator';

  randomHaiku = new RandomHaiku();
  });

  it('should count the syllables of a word', function() {
    debugger;
    expect(syllable('unicorn')).toEqual(3);
  });

  it('should return true for actual good haiku', function() {
    expect(GoodHaiku.haikuChecker()).toEqual(true);
  });

  it('should return false for actual bad haiku', function() {
    BadHaiku.haikuChecker();
    expect(BadHaiku.haikuChecker()).toEqual(false);
  });

  it('should return the right syllable count for actual good haiku', function() {
    randomHaiku.generateHaiku()
    alert(`${randomHaiku.line1} ${syllable(randomHaiku.line1)} ${randomHaiku.line2} ${syllable(randomHaiku.line2)} ${randomHaiku.line3} ${syllable(randomHaiku.line3)}`);
    expect(syllable(randomHaiku.line1)).toEqual(5);
    expect(syllable(randomHaiku.line2)).toEqual(7);
    expect(syllable(randomHaiku.line3)).toEqual(5);
  });

});
