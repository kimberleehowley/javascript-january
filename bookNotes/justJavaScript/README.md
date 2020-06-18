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