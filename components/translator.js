const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

const american = Object.keys(americanToBritishSpelling);
const british = Object.values(americanToBritishSpelling);
const onlyFromAmerican = Object.keys(americanOnly);
const onlyToBritish = Object.values(americanOnly);
const onlyFromBritish = Object.keys(britishOnly);
const onlyToAmerican = Object.values(britishOnly);
const americanTitles = Object.keys(americanToBritishTitles);
const britishTitles = Object.values(americanToBritishTitles);

class Translator {

  replacer (str, words, replaced)  {
    words.forEach((word, i) => {
      const regex = new RegExp(`(?<=^|[.'"\\s])${word}(?=[.'"\\s]|$)`, 'gi')
      str = str.replace(regex, `<span class="highlight">${replaced[i]}</span>`)
    });
    return str;
  }
  
  replacerTitle (str, words, replaced) {
    words.forEach((word, i ) => {
      const regex = new RegExp(`(?<=^|[.'"\\s])${word}(?=[.'"\\s]|$)`, 'gi')
      replaced[i] = replaced[i].replace(replaced[i][0], replaced[i][0].toUpperCase())
      str = str.replace(regex, `<span class="highlight">${replaced[i]}</span>`)
    });
    return str;
  }
  
  replacerClock (str, sym, replaced) {
    const regex = new RegExp(`(\\d{1,2})${sym}(\\d{1,2})`, 'g');
    return str.replace(regex, `<span class="highlight">$1${replaced}$2</span>`);
  }
  
  translate(str, locale) {
    let newStr = str;
    if(locale === 'american-to-british') {
      newStr = this.replacer(newStr, american, british);
      newStr = this.replacer(newStr, onlyFromAmerican, onlyToBritish);
      newStr = this.replacerTitle(newStr, americanTitles, britishTitles);
      newStr = this.replacerClock(newStr, ':', '.');
    } else if(locale === 'british-to-american') {
      newStr = this.replacer(newStr, british, american);
      newStr = this.replacer(newStr, onlyFromBritish, onlyToAmerican);
      newStr = this.replacerTitle(newStr, britishTitles, americanTitles);
      newStr = this.replacerClock(newStr, '.', ':');
    }
    return newStr !== str ? newStr : "Everything looks good to me!";
  }
}

module.exports = Translator;
