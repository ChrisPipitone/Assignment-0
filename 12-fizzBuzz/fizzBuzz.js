function fizzBuzz(start, end) {
  // Insert code here;
  let arr = [];
  for(var i = start; i <= end; i++)
  {
    if( i % 3 == 0 && i % 5 == 0 )
    {
      arr.push("FizzBuzz"); //multi of 3 and 5 
    }
    else if(i % 3 == 0)
    {
      arr.push("Fizz"); //multi of only 3
    }
    else if(i % 5 == 0 )
    {
      arr.push("Buzz"); //multi of only 5 
    }
      else
        arr.push(i); //mulit of neither
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;