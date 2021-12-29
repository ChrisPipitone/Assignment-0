function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  const myset = new Set();
  for(let i = 0; i < args.length; i++)
  {
    for(let elem of args[i])
    {
      myset.add(elem);
    }
  }
  return myset;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;