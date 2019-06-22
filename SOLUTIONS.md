## Q0
```js
var result = (function(a) {
  return a*a;
}(5.5));
console.log(result); //guess the output
```

## Q0 Output
`30.25`

## Q0 Explanation
This is an [Immediately-Invoked Function Expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE). It defines a function, calls it immediately, and assigns the result to `result`.

## Q1
```js
const b = [1, 2, 3];
const f = (a, ...b) => a + b;

console.log(f(1));
```
---
## Q1 Output
`1`

## Q1 Explanation
`const f = ...` defines a function where the first argument is assigned to `a`. The argument `b` is defined using the [rest parameter syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), so `b` will contain any additional arguments as an array. 

So what's going on with `const b = ...`? It's defined globally, so the function `f` has access to it, but defining its own `b` in the arguments means it hides the global `b`.

Calling `f(1)` means `a` is 1 and `b` is an empty array `[]`. Since `a` is a number and `b` is an array, JavaScript will [coerce](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) them both to strings in order to apply the `+` operator. The number 1 as a string is "1" and an empty array is "", so the result is "1".
