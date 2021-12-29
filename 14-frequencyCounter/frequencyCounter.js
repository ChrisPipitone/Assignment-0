function frequencyCounter(word) {
  // Insert code here;
  var freq = {};
  for ( let i = 0; i < word.length; i++) {
      let character = word.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
    }
  return freq;
}
//console.log(frequencyCounter("apple"));

// Do not edit this line;
module.exports = frequencyCounter;