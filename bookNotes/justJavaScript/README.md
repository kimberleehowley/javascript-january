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