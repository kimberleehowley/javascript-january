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
- Object literal can create new objects, indicated by `{name:value, ...}`
- Functions can be included in objects 
- We can access values in objects using dot `myobject.grace` or bracket `myobject[grace]` notation. 
- Don't store values of undefined in Objects. 
- You can remove vaues with the `delete` operator. 
- Object keys are case sensitive! `object.grace` is not equal to `object.Grace`
- `Object.assign`: copies properties from one object to another 
- `Object.create(prototype)`: takes an existing Object and returns a new Object that inherits from the existing Object
- Prototypes used to store functions 
- `own properties`: live in top-most object
- `inherited properties`: live in the prototype chain 
- `JSON.stringify`: converts an object to a string 
- `Object.create` uses less memory than `Object.assign` 
- `Object.keys` returns properties of an object as an array of strings
- `Object.freeze` freezes an object, making it immutable 
- Since keys in objects _have_ to be strings, use a _WeakMap_ if you need to create something like an object, but that uses objects as the keys 
- WeakMap can be useful for creating sealers and unsealers 

## 9: How strings work 
- `String`: immutable array of 16 bit unsigned integers from 0-65535
- `String.fromCharCode`: makes strings 
- Strings have a length property 
- Using bracket notation returns a new string whose (vs. arrays)
- `String.prototype`: methods that act on strings
- `.slice` and `.concat` are similar to arrays, but `.indexof` takes a string as a parameter
- Similar strings are considered to be the same object by `===`
- Use double quotes when creating strings 
- `\` before double quotes when creating string literals 

## 10: How bottom values work 
- `Bottom values` indicate the end of a recursive data structure, or the absences of values, e.g. null, nill 
- In JS, these are `null` and `undefined` 
- Recommends exclusively using undefined 

## 11: How statements work 
- Declarations: `let`, `function`, `const` 
- Functions should not be declared in if, switch, or while statements 
- Const encourages "greater purity" 
- Assignment statement: repaces reference in a variable, or modifies mutable object or array 
- Four parts of an assignment statement: 1) lvalue (expression that receives the value), 2) Assignment operator, 3) Expression, 4) Semicolon 
- Claims incrementing is not safe; pointer aritmetic is outdated 
- Prefers if to switch statements 

## 12: How functions work 
- The first programs were called routines: list or orders or instructions loaded into a machine along with some data 
- Subroutines were invented to avoid dealing with routines as single lists; they could be collected into libraries 
- Grace Hopper, A-0, first compiler 
- The function operator makes function objects: it takes a parameter list and a body 
- When a function is called, an activation object is created 
- `Closure`: A function object holding reference to the activation object of the outer function 

## 13: How generators work 
- Argues these are unnecessary and should not be used 

## 14: How exceptions work 
- Exception handlers deal with, well, the unexpected 
- `throw "That does not compute.";`
- `try` attaches an exception handler to a block via a `catch` statement 
- A function should not contain more than one try 

## 15: How programs work 
- JavaScript is delievered to execution site in source form 
- An engine at the execution site compiles the JS source code 
- Inline scripts still not best practice 
- Number, Math, Array, and Object are `primordials` made available to every source unit 
- Recommends against global variables 
- Export and import modules solve a lot of scope problems 

## 16: How _this_ works 
- JavaScript implements a `prototypal` model: when a new Object is created, a prototype can be designated that inherits some or all of the new object's contents 
- Objects are just containers of properties; and prototypes are just Objects 
- Methods are functions stored in objects 
- Prototypes used to store methods 
- `this` tells a function in a prototype which Object to work on 
- `this` binding only works on method calls 
- It is also bound dynamically, while other elements bound statically 
- Recommends not using `this`, because confusing (validating)

## 17: How Class Free works 
- Types are not that great, he argues 

## 18: How Tail Calls work 
- _Tail call optimization_ 
- Tail call: the last thing a function does is return the result of calling a function (think of it like _return_ call)
- Returns the immediately _invoked_ function 

## 19: How Purity works 
- Pure functions depend only on inputs and are easier to test
- Recommends not using Object.assign, or any methods that modify objects 
- Not using for, or while and do loops 
- Doesn't recommend defaulting to global variables 

## 20: How Eventual Programming works 
- JavaScript graduates from sequential (one thing at a time) to _concurrent_ programming 
- _Eventual function_: Function that returns immediately, maybe even before the work requested is finished 
- Eventual functions depend on _callback functions_ (once that will be called at a later point, when something happens in the program) and processing loops 
- The Law of Turns: Never wait, never block, finish fast 
- Argues Async Await is outdated; transforms sequential into eventual code 
- Each unit of work should be a separate function 
- _Requestor_: Takes a callback and performs a unit of work that might not be done until a future turn 
- Parseq library manages flow between requestor functions 

## 21: How Date works 
- Calendars are really messed up, based on old notions (Roman, even), never really updated 
- Argues for a different system (But why opine?)
- The `Date` function in JS has a lot of get and set methods, some `to` as well 
- getYear does not work after 1999; use getFullYear
- `new Date` takes a string that represents a date and produces an Object for that date 
- JavaScript numbers will not fail to accmulate until 285426 

## 22: How JSON works 
- JSON solved the problem of needing to exchange data between programs written in different languages 
- Works because most languages have a data structure that associates names with values 
- "JavaScript was bad and followed Java" then, "I did what Date did and decided on parse" (22.5)
- `.parse` takes JSON text and decodes into JS data; its optional reviver function can make transformations 
- `.stringify` takes a _value_ and encodes it into JSON text; optional replacer can make transformations 

## 23: How Testing works 