var syllable = require('syllable');

function Haiku() {
  this.line1 = '';
  this.line2 = '';
  this.line3 = '';
}

Haiku.prototype.haikuChecker = function() {
  var cleaned1 = this.line1.replace(/[^a-z ]/gi, '');
  var cleaned2 = this.line2.replace(/[^a-z ]/gi, '');
  var cleaned3 = this.line3.replace(/[^a-z ]/gi, '');
  if (syllable(cleaned1.replace(/[ ]/g, '-')) == 5 && syllable(cleaned2.replace(/[ ]/g, '-')) == 7 && syllable(cleaned3.replace(/[ ]/g, '-')) == 5)  {
    return true;
  } else {
    return false;
  }
}


exports.haikuModule = Haiku;
