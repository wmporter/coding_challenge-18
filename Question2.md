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
## Output
```
Array [ 10 ]  
10  
Arguments { 0: 10, ... }  
10
```

## Explanation
The first function `f` takes an argument also named `f`. It returns the argument `f`, which is an array containing all the arguments via the rest parameter syntax.

The second function `f` has the same type of argument list. Instead of returning the entire array `f`, it calls reduce on `f`. The callback to reduce just returns each array item in succession, so the return value of the original function call is just the value of the last argument. If we were to call `f(5, 6, 8)` the return value would be 8.

The `ff` function simply returns the arguments object, which is like an array that contains all the function arguments. 

The final function `f` takes a single argument, also confusingly called `f`, and returns it.
