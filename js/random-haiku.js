var syllable = require('syllable');

var RandomHaiku = function() {
  this.line1 = '';
  this.line2 = '';
  this.line3 = '';
}

var nouns1 = ['ball', 'sword', 'stick', 'pit', 'board', 'pipe', 'pube', 'fart', 'fire', 'mouth'];
var nouns2 = ['zephyr', 'echo', 'winner', 'stoner', 'saphire', 'kumquat', 'eon', 'gibon', 'zebra', 'turkey'];
var nouns3 = ['architect', 'archbishop', 'corridor', 'syphilis', 'bonobo', 'detective', 'disorder', 'dinosaur', 'dracula', 'hamburger'];
var nouns4 = ['diarrhea', 'competitor', 'delegation', 'executive', 'vegetable', 'practicioner', 'radiation', 'politician', 'sanctuary', 'oregano'];

var adVerbs1 = ['plump', 'least', 'quite', 'stark', 'clean', 'deep', 'bright', 'wide', 'rough', 'warm'];
var adVerbs2 = ['little', 'lonely', 'super', 'heavy', 'double', 'quiet', 'extra', 'surely', 'hourly', 'forthwith'];
var adVerbs3 = ['orally', 'forever', 'powerful', 'angrily', 'nevermore', 'tidily', 'haphazard', 'akimbo', 'asunder', 'eagerly'];
var adVerbs4 = ['anticlockwise', 'defenseless', 'effortlessly', 'casually', 'queasily', 'disregarding', 'piteously', 'forcefully', 'amorously', 'salaciously'];

var verbs1 = ['snitch', 'tip', 'green', 'out', 'duck', 'film', 'rain', 'paint', 'fly', 'bomb'];
var verbs2 = ['dirty', 'revenge', 'purple', 'open', 'party', 'private', 'silent', 'abase', 'hustle', 'tickle'];
var verbs3 = ['abolish', 'maneuver', 'discipline', 'understand', 'compliment', 'consumate', 'suffocate', 'advertise', 'hydroplane', 'bespatter'];
var verbs4 = ['absquatulate', 'prognosticate', 'emasculate', 'decapitate', 'elucidate', 'expectorate', 'capitulate', 'militarize', 'aromatise', 'luxuriate'];


RandomHaiku.prototype.generateHaiku = function() {
  var x = Math.floor(Math.random() * 4) + 1;

  var randNum = function() {
    return Math.floor(Math.random() * 10);
  }

  if (x == 1) {
    this.line1 = verbs2[randNum()] + ' ' + nouns3[randNum()];
    this.line2 = adVerbs4[randNum()] + ' ' + verbs1[randNum()] + ' ' + nouns2[randNum()];
    this.line3 = adVerbs4[randNum()] + ' ' + nouns1[randNum()];
    alert(this.line1 + ' / ' + this.line2 + ' / ' + this.line3);
    alert(x);
  }
  if (x == 2) {
    this.line1 = adVerbs2[randNum()] + ' ' + verbs2[randNum()] + ' ' + nouns1[randNum()];
    this.line2 = verbs4[randNum()] + ' ' + nouns3[randNum()];
    this.line3 = verbs1[randNum()] + ' ' + nouns4[randNum()];
    alert(this.line1 + ' / ' + this.line2 + ' / ' + this.line3);
    alert(x);
  }
  if (x == 3) {
    this.line1 = adVerbs2[randNum()] + ' ' + verbs1[randNum()] + ' ' + nouns2[randNum()];
    this.line2 = adVerbs3[randNum()] + ' ' + nouns4[randNum()];
    this.line3 = verbs3[randNum()] + ' ' + adVerbs1[randNum()] + ' ' + nouns1[randNum()];
    alert(this.line1 + ' / ' + this.line2 + ' / ' + this.line3);
    alert(x);
  }
  if (x == 4) {
    this.line1 = verbs4[randNum()] + ' ' + nouns1[randNum()];
    this.line2 = adVerbs1[randNum()] + ' ' + verbs3[randNum()] + ' ' + nouns3[randNum()];
    this.line3 = adVerbs1[randNum()] + ' ' + nouns4[randNum()];
    alert(this.line1 + ' / ' + this.line2 + ' / ' + this.line3);
    alert(x);
  }
}

exports.randomHaikuModule = RandomHaiku;
