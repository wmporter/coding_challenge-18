## Question 5
```js
(function(){
  var a = b = 3;
})();

console.log(typeof a);
console.log(typeof b);
```

## Output
```
undefined
number
```

## Explanation
This is a good example of something you might not want to do in JavaScript. Inside the function, a new variable `a` is declared within the function's scope. It's set equal to `b`, which is also a new variable, and that is set equal to 3. You might think that this creates two new locally scoped variables, but it doesn't. The `var` keyword only applies to `a`. So the right hand side of the equals is evaluated and `a` gets its value. If we rewrite it, it might be clearer.
```js
(function() {
    var a;
    a = (b = 3);
})();
```
When you assign a variable a value without using `var`, `let`, or `const`, that variable automatically has global scope. That's what's happening with `b`. A global variable `b` is set equal to 3. So when we run `typeof` against `a`, it's undefined because we're checking it in the global scope but its scope is only inside the function. However, `b` is defined globally, so its type is number.