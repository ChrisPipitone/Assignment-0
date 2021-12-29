const { truncateThreshold } = require("chai/lib/chai/config");

function isPalindrome(word) {
  // Insert code here;
  let j = word.length -1 ;
  for( let i = 0; i < j/2; i++)
  {
    let x = word[i];
    let y = word[j-i];

    if(x != y)
    {
      return false;
    }    
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;