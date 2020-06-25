# Just JavaScript 
An [email series](https://justjavascript.com/) from Dan Abramov and Maggie Appleton. 

## 01. Mental Models 
* Some mental models we've developed over the years might stop us from seeing bugs in front of us. 
* We can over-rely on the "fast" vs. "slow" thinking when it comes to code reviews. 

## 02. The JavaScript Universe  
* A value is a thing in the JavaScript universe. So are functions and Objects, BUT an _if_ statement, _variable declaration_ and others are not. 
* _Primitive values_: "Numbers and strings, among other things." Nothing we do in our code can affect them. 
* There are 9 types: undefined, null, booleans, numbers, strings, symbols, and bigints. 
* Primitive values are NOT objects. 
* _Objects and functions_: Unlike primitive values, they can be manipulated from our code. 
* _Expressions_ are questions that JavaScript can answer...with values. 
* You can check a value's type with `typeof`. 
* TIL null lies about its `typeof` value! `typeof` on null returns object, and that's a very old JS bug. 

## 03. Values and Variables 
#### Snippet 0  
```javascript 
// Reaction established as a variable, string stored. 
// A string is a Primitive Value, and, therefore, unlike objects or functions *is immutable* 
let reaction = 'yikes'; 
reaction[0] = '1'; // So, this line creates a new variable reaction[0], set to '1' 
console.log(reaction); // This just prints the original 'yikes' 
```

#### Snippet 1
```javascript
let pet = 'Narwhal'; // Variable pet is established as the string 'Narwhal' 
pet = 'The Kraken'; // Variable is reassigned to the string 'The Kraken' 
console.log(pet) // Should console.log, 'The Kraken' 
``` 
* Primitive values can't change, but _variables_ can! 
* Variables just point to values; they are not values themselves. They are more like "wires". 
* We pass the _current value_ of a variable, not the variable itself, to functions. 

#### Original Snippet
```javascript
let x = 10; // Point variable x to value 10 
let y = x; // Point variable y to value 10, where variable x currently points to 
x = 0; // Point variable x to value 0 instead 
```
* Variables always point at values 

### Notes from exercises 
* Variables don't have types in JavaScript; only values do. 
* The left side of an assignment must always be a "wire". Literals are not wires. 

## 04. Counting the Values (Part 1) 
* JavaScript world for what it is, instead of _how_. 
* "To me, each string is a value." 
* "_The foundation of our model is that our world is full of values._"
* Counting is to distinguish things from one another. 
* Distinguishing values, finding the distinct, helps us understand equality in JavaScript. 
### Value types
* _Undefined_: There is only one value of this type. It represents the concept of an intentionally missing value.  
* _Null_: Only one value of this type, and it pretends to be an Object. 
* _Booleans_: Only two values, true or false. 
#### Script 0 
```javascript
let isSad = true; // point isSad to boolean true
let isHappy = !isSad; // point isHappy to boolean false 
let isFeeling = isSad || isHappy // point isFeeling to true, because one of the values is true 
let isConfusing = isSad && isHappy // point to false, because only one is true 
```
* _Numbers_: Floating point math powers JavaScript. Rounding mistakes accumulate over time! In our universe, "there is exactly one number value for every mathematical number that can be represented with 64-bit floating point math." NaN, not a number 

## 05. Counting the Values (Part 2) 
* _BigInts_: Represent extremely big numbers, and are useful for financial calculations that need precision. There is an infinite number of possible BigInts. 
* _Strings_: Represent texts in JavaScript. Can be written with single quotes, double quotes, and backticks. Strings are _not_ objects, but they have a few built-in properties, like .length and string[index]. But! They are Primitive Values, so cannot be changed. 
#### Snippet 0 
```javascript 
let answer = prompt('Enter your name'); // Prompts for user input 
console.log(answer); // _Summons_ a string the user enters 
```
* In this mental model, we assume, "...all conceivable string values already exist from the beginning — one value for every distinct string." 
* _Symbols_: These are new and a bit tricky; not as important for the model to start. 
* _Objects_: arrays, dates, RegExps, and other non-primitive values. Objects _are_ mutable, hooray! Their properties can be accessed with dot or bracket notation. In our mental model, unlike strings or numbers, where we summon a value that we assume already exists, we can _create_ entirely new Objects. But, we can't necessarily destroy objects ourselves, "JavaScript is a garbage-collected language." 
* _Functions_: Another kind of value. This is an important mindshift. Think about a function that is a console.log loop. If it is a number to be console.log'd, only one value is passed each time, but if it is an Object passed, a new Object value is passed each time. The same goes for Functions! A new Function would be passed each time, and I can think of them like special Objects. 

#### Snippet 1 
```javascript
let countDwarves = function() { return 7; }; // Create a new function 
let dwarves = countDwarves; // Assign the value dwarves to the function 
console.log(dwarves); // The function is what is console.log'd; the function is never called!
```
* A _call expression_, e.g. `countDwarves()`, runs the code inside our function and returns the value. 

## 06. Equality of Values 
* Working in JS can be like having conversations at a masked ball. 

### Kinds of Equality 
#### Same Value Equality: Object.is(a, b)
* `Object.is(a, b)` tells us if a and b are the same value. 
* This is "Same Value Equality" 

#### Strict Equality: a === b 
* Also !== 
* Is almost identical to Same Value Equality. Both signify that the same value is summoned (according to our mental model). 
##### Special Case 0: NaN 
* NaN === NaN is false! 
##### Special Case 1: -0 
* Both 0 === -0 and -0 === 0 are true! 

#### Loose Equality 
* Try to refrain from double equals; always use triple (strict). 
* "Abstract equality" is now regarded as a bad design decision. 

#### Exercise notes 
* Object literals create completely new Objects! 
* In our mental model, there is only one NaN value. 

## 07. Properties 
### Snippet 0 
```javascript
let sherlock = {
  surname: 'Holmes',
  address: { city: 'London' } 
};

let john = {
  surname: 'Watson',
  address: sherlock.address
};

// John makes some changes 
john.surname = 'Lennon';
john.address.city = 'Malibu';

// After those changes, our values are... 
console.log(sherlock.surname); // Holmes
console.log(sherlock.address.city); // Malibu -- because john's address was a property of sherlock, it also changes sherlock!
console.log(john.surname); // Lennon
console.log(john.address.city); // Malibu 
```
* Objects are useful for grouping data together. 
* Unlike variables, _properties belong to a particular object._ In this way, the "wires" of properties start from Objects, not from our code. 
* If we try to read a property that does not yet exist in an Object, JavaScript will respond with "undefined". That does not mean the property exists and is undefined!  
* "An expression like obj.property is calculated in three steps:
1) Figure out which value is on the left.
2) If it’s null or undefined, throw an error.
3) If that property exists, the result is the value its wire points to. If that property doesn’t exist, the result is undefined." 