const syllable = require('syllable');

export class RandomHaiku {
  constructor() {
    this.line1 = '';
    this.line2 = '';
    this.line3 = '';
  }


  generateHaiku() {
    const nouns1 = ['ball', 'sword', 'stick', 'pit', 'board', 'pipe', 'pube', 'fart', 'fire', 'mouth', 'sock', 'knee', 'toy', 'bike', 'car', 'train', 'husk', 'shirt', 'skirt', 'pants'];
    const nouns2 = ['zephyr', 'echo', 'winner', 'stoner', 'saphire', 'kumquat', 'tuba', 'gibon', 'zebra', 'turkey', 'lone pipe', 'surfboard', 'wagon', 'all food', 'bathroom', 'short desk', 'wet fir', 'tissues', 'bottle', 'hammock'];
    const nouns3 = ['architect', 'archbishop', 'corridor', 'syphilis', 'bonobo', 'detective', 'disorder', 'dinosaur', 'dracula', 'hamburger', 'limp sausage', 'scary book', 'plastic leaf', 'emoji', 'poo tuba', 'tame aardvark', 'slow cheetah', 'small blowhard', 'long inchworm', 'decent snail'];
    const nouns4 = ['diarrhea', 'competitor', 'delegation', 'executive', 'vegetable', 'practitioner', 'radiation', 'politician', 'sanctuary', 'oregano', 'hairy saphire', 'silly kumquat', 'oblong tuba', 'plain syphilis', 'small dracula', 'bad gorilla', 'cavernous hut', 'mysterious tent', 'aligator', 'bad banana'];

    const beforeNoun1 = ['plump', 'wet', 'red', 'stark', 'clean', 'deep', 'bright', 'wide', 'rough', 'warm', 'cold', 'clear', 'tight', 'loose', 'hot', 'cool', 'thick', 'mean', 'rude', 'nice'];
    const beforeNoun2 = ['little', 'lonely', 'super', 'heavy', 'double', 'quiet', 'morose', 'obtuse', 'concave', 'acute', 'a plump', 'the wet', 'my red', 'her stark', 'his clean', 'a deep', 'our bright', 'my wide', 'your rough', 'the warm'];
    const beforeNoun3 = ['literal', 'chocolate', 'important', 'dangerous', 'masculine', 'feminine', 'amazing', 'musical', 'withering', 'personal', 'the little', 'her lonely', 'his super', 'a heavy', 'the double', 'a quiet', 'your morose', 'an obtuse', 'my concave', 'their acute'];
    const beforeNoun4 = ['meticulous', 'independent', 'rambunctious', 'invincible', 'expressionless', 'spectacular', 'emotionless', 'cantankerous', 'aggravated', 'assailable', 'the literal', 'a chocolate', 'an important', 'our dangerous', 'your masculine', 'my feminine', 'an amazing', 'her musical', 'a withering', 'his personal'];


    const afterNoun1 = ['sings', 'laughs', 'golfs', 'smiles', 'coughs', 'falls', 'sins', 'paints', 'tweets', 'bombs', 'hails', 'farts', 'snoots', 'boops', 'bops', 'flees', 'flies', 'jumps', 'skips', 'dives'];
    const afterNoun2 = ['waffles', 'shivers', 'worries', 'binges', 'parties', 'abides', 'rockets', 'reasons', 'hustles', 'tickles', 'sings well', 'laughs dumb', 'won\'t golf', 'smiles mean', 'coughs loud', 'falls hard', 'sins much', 'paints fish', 'retweets', 'cheese bombs'];
    const afterNoun3 = ['captivates', 'conoodles', 'salivates', 'flagellates', 'misconstrues', 'bifurcates', 'pollinates', 'barricades', 'masquerades', 'catapults', 'waffles fast', 'shivers brrrrr', 'has worries', 'binges hard', 'parties soft', 'won\'t abide', 'shoots rockets', 'gives reasons', 'hustles teeth', 'hates tickles'];
    const afterNoun4 = ['irradiates', 'quadruplicates', 'gesticulates', 'remunerates', 'disembodies', 'decertifies', 'overcharges', 'exemplifies', 'misestimates', 'reconnoitres', 'captivates worms', 'conoodles geese', 'salivates also', 'flagellates sand', 'misconstrues facts', 'bifurcates meat', 'pollinates butts', 'barricades souls', 'tickles monkeys', 'catapults hearts'];

    let x = Math.floor(Math.random() * 4) + 1;

    function randNum() {
      return Math.floor(Math.random() * 20);
    }
    if (x == 1) {
      this.line1 = `${beforeNoun2[randNum()]} ${nouns3[randNum()]}`;
      this.line2 = `${beforeNoun1[randNum()]} ${nouns2[randNum()]} ${afterNoun4[randNum()]}`;
      this.line3 = `${beforeNoun4[randNum()]} ${nouns1[randNum()]}`;
    }
    if (x == 2) {
      this.line1 = `${beforeNoun2[randNum()]} ${nouns1[randNum()]} ${afterNoun2[randNum()]}`;
      this.line2 = `${beforeNoun4[randNum()]} ${nouns3[randNum()]}`;
      this.line3 = `${beforeNoun1[randNum()]} ${nouns4[randNum()]}`;
    }
    if (x == 3) {
      this.line1 = `${beforeNoun1[randNum()]} ${nouns2[randNum()]} ${afterNoun2[randNum()]}`;
      this.line2 = `${nouns4[randNum()]} ${afterNoun3[randNum()]}`;
      this.line3 = `${beforeNoun3[randNum()]} ${nouns1[randNum()]} ${afterNoun1[randNum()]}`;
    }
    if (x == 4) {
      this.line1 = `${beforeNoun4[randNum()]} ${nouns1[randNum()]}`;
      this.line2 = `${beforeNoun3[randNum()]} ${nouns3[randNum()]} ${afterNoun1[randNum()]}`;
      this.line3 = `${beforeNoun1[randNum()]} ${nouns4[randNum()]}`;
    }
  }
}
