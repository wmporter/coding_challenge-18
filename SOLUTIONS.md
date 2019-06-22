## Question 0
```js
var result = (function(a) {
  return a*a;
}(5.5));
console.log(result); //guess the output
```

## Question 0 Output
`30.25`

## Question 0 Explanation
This is an [Immediately-Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE). It defines a function, calls it immediately, and assigns the result to `result`.

---

## Question 1
```js
const b = [1, 2, 3];
const f = (a, ...b) => a + b;

console.log(f(1));
```
## Question 1 Output
`1`

## Question 1 Explanation
`const f = ...` defines a function where the first argument is assigned to `a`. The argument `b` is defined using the [rest parameter syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), so `b` will contain any additional arguments as an array. 

So what's going on with `const b = ...`? It's defined globally, so the function `f` has access to it, but defining its own `b` in the arguments means it hides the global `b`.

Calling `f(1)` means `a` is 1 and `b` is an empty array `[]`. Since `a` is a number and `b` is an array, JavaScript will [coerce](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) them both to strings in order to apply the `+` operator. The number 1 as a string is "1" and an empty array is "", so the result is "1".

---

## Question 2
```js
let f = (...f) => f;
console.log(f(10));

f = (...f) => f.reduce(f => f);
console.log(f(10));

function ff() {
  return arguments;
}
console.log(ff(10));

f = f => f;
console.log(f(10));
```
## Question 2 Output
```
Array [ 10 ]  
10  
Arguments { 0: 10, ... }  
10
```

## Question 2 Explanation
The first function `f` takes an argument also named `f`. It returns the argument `f`, which is an array containing all the arguments via the rest parameter syntax.

The second function `f` has the same type of argument list. Instead of returning the entire array `f`, it calls reduce on `f`. The callback to reduce just returns each array item in succession, so the return value of the original function call is just the value of the last argument. If we were to call `f(5, 6, 8)` the return value would be 8.

The `ff` function simply returns the arguments object, which is like an array that contains all the function arguments. 

The final function `f` takes a single argument, also confusingly called `f`, and returns it.

---

## Question 3 (as-is)
```js
var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
}())
bar = bar + foo;
console.log(bar);
```

## Question 3 (corrected)
```js
var foo = 10;
bar = 3;
(function () {
  var foo = 2;
  bar = 1;
})()
bar = bar + foo;
console.log(bar);
```

## Question 3 Output
`11`

## Question 3 Explanation
There is a small typo in the original question, so _Question 3 (corrected)_ should be run instead to see the output.

`foo` and `bar` are both defined globally.

When the function is defined and called, it creates its own scope. A new `foo` is defined within the function's local scope. Setting `foo` equal to 2 does not affect the global `foo`. When `bar = 1` is executed, it's referencing the global `bar` because there is no new definition within the function.

---

## Question 4
```js
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})();
```

## Question 4 Output
```
undefined
10
```

## Question 4 Explanation
I can hear you saying this doesn't make any sense. And at first glance, it doesn't. The function logs `x`, then defines a new variable `x` in the local scope, then logs it again. `x` is a global, you say, so why would it be undefined? The answer comes from something Javascript does called [hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting). 

When you declare a variable using the `var` keyword, the declaration gets "hoisted" to the top of either the global scope or the function it's declared in. In this case, `var x = 10` causes the variable `x` to be declared at the beginning of the function. The tricky part is that the assignment stays where it is. Only the declaration gets hoisted. So the function looks more like this:
```js
(function () {
    var x;
    console.log(x);
    x = 10;
    console.log(x);
})()
```
Writing it this way, it's a little easier to see why `x` is undefined in the first log.

---

## Question 5
```js
(function(){
  var a = b = 3;
})();

console.log(typeof a);
console.log(typeof b);
```

## Question 5 Output
```
undefined
number
```

## Question 5 Explanation
This is a good example of something you might not want to do in JavaScript. Inside the function, a new variable `a` is declared within the function's scope. It's set equal to `b`, which is also a new variable, and that is set equal to 3. You might think that this creates two new locally scoped variables, but it doesn't. The `var` keyword only applies to `a`. So the right hand side of the equals is evaluated and `a` gets its value. If we rewrite it, it might be clearer.
```js
(function() {
    var a;
    a = (b = 3);
})();
```
When you assign a variable a value without using `var`, `let`, or `const`, that variable automatically has global scope. That's what's happening with `b`. A global variable `b` is set equal to 3. So when we run `typeof` against `a`, it's undefined because we're checking it in the global scope but its scope is only inside the function. However, `b` is defined globally, so its type is number.

---

## Question 6
```js
function foo1() {
  return {
    bar: 'bar',
  };
}

function foo2() {
  return
  {
    'bar';
  }
}

console.log(foo1());
console.log(foo2());
```

## Question 6 Output
```
Object { bar: 'bar' }
undefined
```

## Question 6 Explanation
`foo1` seems easy to explain. It just returns a regular JavaScript object. 

`foo2` is a little different. It looks wrong. It appears to return an object, but the value 'bar' doesn't have a key, so what is it? Because it doesn't conform to the normal structure of an object, with key/value pairs, JavaScript interprets what's between the curly braces as a code block instead. What that means is that the `return` keyword is executed by itself, which is why undefined is logged. It's possible that the debugger/developer tools will give you a warning about unreachable code as well. It's just letting you know that the code block after the `return` statement will never be executed.

---

## Question 7
```js
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(9007199254740993 === 9007199254740992);
```

## Question 7 Output
```
0.30000000000000004
false
true
```

## Question 7 Explanation
Welcome to the wonderful world of floating point representation. Without getting too deep in the weeds, the short explanation is that sometimes when JavaScript does math with floating point numbers, the result is an estimate that is as close as it knows how to get instead of an exact number.

Since we know that 0.1 + 0.2 is equal to 0.3, it's easy to expect JavaScript to also know that. So it seems obvious that we should check for equality. But as you can see from the first output, it's not exactly 0.3 so the equality check is false.

The third value evaluating to true is also related to floating point representation. In JavaScript, all numbers are floating point internally. There is a range of numbers considered "safe" and 9007199254740993 is outside that range. It's a bad idea to expect numbers outside the safe range to behave correctly.

---

## Question 8
```js
const a = {},
    b = {c:'b'},
    c = {b:'c'};

a[b] = 111;
a[c] = 333;

console.log(a[b]);
```

## Question 8 Output
`333`

## Question 8 Explanation
Key names in JavaScript must be strings (let's ignore Symbols for now) so when an object is used as a key, its string representation is used instead. The default string representation for an object comes from calling its toString() method. Unless we define our own toString method on an object, toString() returns "[object Object]" for object literals.

What this means is that 
```js
a[b] = 111;
a[c] = 333;
```
is identical to  
```js
a["[object Object]"] = 111;
a["[object Object]"] = 333;
```

---

## Question 9 (as-is)
```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}

for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
```

## Question 9 (corrected)
```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}

for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```

## Question 9 Output
```
5
0
5
1
5
2
5
3
5
4
```

## Question 9 Explanation
Another minor typo in the original question 9. It was missing a closing brace for the second for loop, so _Question 9 (corrected)_ has the working syntax.

This output seems really confusing at first glance. What if we annotate it a little bit so we can have a better idea of what's going on? We'll call the first loop the 'var loop' and the second one the 'let loop'. Change the callbacks in each loop to `console.log(i, 'var loop')` and `console.log(i, 'let loop')`, and the output becomes:
```
5 var loop
0 let loop
5 var loop
1 let loop
5 var loop
2 let loop
5 var loop
3 let loop
5 var loop
4 let loop
```
The first loop logs the `i` defined using `var` which gets [hoisted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) to the global scope. A loop that only iterates 5 times executes so quickly that by the time any of the setTimeout callbacks are called, the value of `i` is equal to 5. 

The second loop logs the `i` defined using `let`. We define a callback function inside the for loop's scope, which creates a [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) that contains the `i` variable. This is different than the "var loop" because using `let` makes it so the value of `i` when the function is _defined_ will be the same when it's _called_ (we say that the closure "binds" the variable). The for loop continues to execute, but each `i` value is "saved" for each callback function we define. 

In both loops, the value `i * 1000` passed to setTimeout is evaluated immediately, so the amount of time they wait, in seconds, is 0, 1, 2, etc.

---

## Question 10
```js
console.log(1 < 2 < 2);
console.log(3 > 2 > 1);
```

## Question 10 Output
```
true
false
```

## Question 10 Explanation
The below sequence shows the steps to evaluate the first statement
```
1 < 2 < 2
(1 < 2) < 2
true < 2
1 < 2
true
```
Let's take each step one at a time.

`1 < 2 < 2` to `(1 < 2) < 2`  
When evaluating the original statement, JavaScript uses [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) and [associativity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Associativity) to decide which operators to apply first. If you ever learned about order of operations in Algebra, this may sound familiar to you. When calculating `2 + 3 * 4`, the `*` operation (multiplication) has higher precedence than `+` (addition), so `3 * 4` is calculated first and the operation reduces to `2 + 12`. Different operators similarly have different precedence in JavaScript. 

"But," I can hear you saying, "there are two less than operators here, so don't they have the same precedence?" The answer is yes. In the case of equal precedence, JavaScript uses associativity to decide what order to evaluate the operations. Because `<` (less than) is "left associative", the operations are evaluated left to right, so `1 < 2` gets evaluated first.

`(1 < 2) < 2` to `true < 2`  
This one is easy enough. 1 is less than 2, so the boolean expression `1 < 2` evaluates to `true`.

`true < 2` to `1 < 2` to `true`  
This one seems weird. How do we check if a Boolean value is less than a number? Our old friend [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) to the rescue. The Boolean gets coerced to a number so that comparing it with `<` makes sense. When Booleans are coerced to numbers, `true` becomes `1` and `false` becomes `0`. And since 1 is less than 2, the whole thing ultimately evaluates to `true`.

For the second statement, all the steps are exactly the same and have the same explanations.
```js
3 > 2 > 1
(3 > 2) > 1
true > 1
1 > 1
false
```
