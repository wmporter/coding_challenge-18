## Question 4
```js
var x = 5;

(function () {
    console.log(x);
    var x = 10;
    console.log(x); 
})();
```

## Output
```
undefined
10
```

## Explanation
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