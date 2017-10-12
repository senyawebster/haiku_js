const syllable = require('syllable');

export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  haikuChecker() {
    let cleaned1 = this.line1.replace(/[^a-z ]/gi, '');
    let cleaned2 = this.line2.replace(/[^a-z ]/gi, '');
    let cleaned3 = this.line3.replace(/[^a-z ]/gi, '');
    if (syllable(cleaned1.replace(/[ ]/g, '-')) == 5 && syllable(cleaned2.replace(/[ ]/g, '-')) == 7 && syllable(cleaned3.replace(/[ ]/g, '-')) == 5)  {
      return true;
    } else {
      return false;
    }
  }
}
