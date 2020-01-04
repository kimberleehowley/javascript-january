# How JavaScript works
_Notes from the book by Douglas Crockford_. 
http://www.crockford.com/javascript/ 

## 1: How names work 
- "We have learned the very hard way that programming should strive to be literate and self-explanatory. Programming is not mathematics. It is a different sort of art." 
- Start and end variable names with letters. _underbars and $dollars have special meanings. 
- In multiword variables, underbar in JS will make transitioning languages easier, e.g. lots_of_words. 
- Only constructor functions start with uppercase in JavaScript. 
- Reserved words: can't be used for anything other than what already used for: https://www.w3schools.com/js/js_reserved.asp 
- So don't use them for variable names! 
- Holdovers from 50's with limited memory: no spaces in variable names; reserved words -- all to save memory 

## 2 How numbers work 
- Single number type: `number` 
- With JavaScript numbers, there's not a risk of overflow 
- Infinity is a value that represents all numbers too large to be represented 
- NaN: not a number 
- Number, with the capital `N`: a function that can create numbers 
- It also has some handy properties, like `.MAX_SAFE_INTEGER` 
- Bitwise operators convert numbers to signed 32 bit ints, then converts them back to JS numbers 
- There are useful methods on Math.object, like `Math.floor` and `Math.trunc`, or .min, .max, and .random 