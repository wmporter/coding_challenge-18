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

## Output
```
Object { bar: 'bar' }
undefined
```

## Explanation
`foo1` seems easy to explain. It just returns a regular JavaScript object. 

`foo2` is a little different. It looks wrong. It appears to return an object, but the value 'bar' doesn't have a key, so what is it? Because it doesn't conform to the normal structure of an object, with key/value pairs, JavaScript interprets what's between the curly braces as a code block instead. What that means is that the `return` keyword is executed by itself, which is why undefined is logged. It's possible that the debugger/developer tools will give you a warning about unreachable code as well. It's just letting you know that the code block after the `return` statement will never be executed.