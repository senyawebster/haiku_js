var Haiku = require('./../js/haiku.js').haikuModule;
var syllable = require('syllable');

describe('haiku', function() {
  var reusableGoodHaiku;
  var reusableBadHaiku;

  beforeEach(function() {
  reusableGoodHaiku = new Haiku();
  reusableGoodHaiku.line1 = 'Haikus are easy';
  reusableGoodHaiku.line2 = 'But sometimes they don\'t make sense';
  reusableGoodHaiku.line3 = 'Refrigerator';

  reusableBadHaiku = new Haiku();
  reusableBadHaiku.line1 = 'Haikus are super easy';
  reusableBadHaiku.line2 = 'But sometimes they don\'t make sense';
  reusableBadHaiku.line3 = 'Refrigerator';
  });

  it('should count the syllables of a word', function() {
    expect(syllable('unicorn')).toEqual(3);
  });

  it('should return true for actual good haiku', function() {
    expect(reusableGoodHaiku.haikuChecker()).toEqual(true);
  });

  it('should return false for actual bad haiku', function() {
    expect(reusableBadHaiku.haikuChecker()).toEqual(false);
  });

});
