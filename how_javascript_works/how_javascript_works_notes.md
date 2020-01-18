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

## 2: How numbers work 
- Single number type: `number` 
- With JavaScript numbers, there's not a risk of overflow 
- Infinity is a value that represents all numbers too large to be represented 
- NaN: not a number 
- Number, with the capital `N`: a function that can create numbers 
- It also has some handy properties, like `.MAX_SAFE_INTEGER` 
- Bitwise operators convert numbers to signed 32 bit ints, then converts them back to JS numbers 
- There are useful methods on Math.object, like `Math.floor` and `Math.trunc`, or .min, .max, and .random 
- Work as much as possible in the Safe Integer range 

## 3: How big integers work 
- Crockford presents a library for getting around JavaScript's single integer type limitation 
- A useful reference if I ever need to work with numbers over 64 bits 

## 4: How big floating point works
- Three numbers determine a floating point system:
- `value = _coefficient_ * (_basis_ ** _exponent)`

## 5: How big rationals work 
- _Rational number_: number that can be expressed as the ratio of two integers.
- Provides an additional library to import, potentially useful for reference. 

## 6: How booleans work 
- Return true or false
- Avoid mixing types when comparing with booleans! 
- False-y values: false, null, undefined, "" (empty string), 0, NaN 
- Everything else: truth-y 
- Boolishness! Values acting like they are true, but not strictly true, or the same goes with false. 
- De Morgan Laws:
!(p && q) === !p || !q
!(p || q) === !p && !q 

## 7: How arrays work 
- Array: contiguous section of memory, divided into equal chunks, each associated with and accessed by integer
- JSON treats arrays and objects differently even though JS treats the same 
- Use .isArray, not typeof, to check array types (typeof returns Object)
- Stack methods: pop(), removes and returns last element; push(), appends new element; shift(), returns zeroth element instead of last ; unshift(), new element at front 
- Shift() and unshift() are slower than pop(), push()
- Shift + push = queue-like behavior 
- Iterative array methods: .every, .some, .find, .findIndex, .filter, .map 
- Sorting array methods: use sort, but pass in a comparison function 
- .concat(): concatenates two arrays 
- .join(): takes an array of trings and separator string, makes one big string 
- .reverse();
- .slice(): makes copy of an orray, or copy of a part of an array 

## 8: How Objects work 
- Everything is an object!  
- Object is JavaScript's primary data structure: a container of properties, each with a _name_ and _value_. 
