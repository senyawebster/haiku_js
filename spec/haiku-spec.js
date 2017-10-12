var Haiku = require('./../js/haiku.js').haikuModule;
var RandomHaiku = require('./../js/random-haiku.js').randomHaikuModule;
var syllable = require('syllable');

describe('haiku', function() {
  var reusableGoodHaiku;
  var reusableBadHaiku;
  var randomHaiku;

  beforeEach(function() {
  reusableGoodHaiku = new Haiku();
  reusableGoodHaiku.line1 = 'Haikus are easy';
  reusableGoodHaiku.line2 = 'But sometimes they don\'t make sense';
  reusableGoodHaiku.line3 = 'Refrigerator';

  reusableBadHaiku = new Haiku();
  reusableBadHaiku.line1 = 'Haikus are super easy';
  reusableBadHaiku.line2 = 'But sometimes they don\'t make sense';
  reusableBadHaiku.line3 = 'Refrigerator';

  randomHaiku = new RandomHaiku();
  });

  it('should count the syllables of a word', function() {
    expect(syllable('unicorn')).toEqual(3);
  });

  it('should return true for actual good haiku', function() {
    expect(reusableGoodHaiku.haikuChecker()).toEqual(true);
  });

  it('should return false for actual bad haiku', function() {
    reusableBadHaiku.haikuChecker();
    expect(reusableBadHaiku.haikuChecker()).toEqual(false);
  });

  it('should return the right syllable count for actual good haiku', function() {
    randomHaiku.generateHaiku()
    expect(syllable(randomHaiku.line1)).toEqual(5);
    expect(syllable(randomHaiku.line2)).toEqual(7);
    expect(syllable(randomHaiku.line3)).toEqual(5);
  });

});
