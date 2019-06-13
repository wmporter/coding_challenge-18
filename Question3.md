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

## Output
`11`

## Explanation
`foo` and `bar` are both defined globally.

When the function is defined and called, it creates its own scope. A new `foo` is defined within the function's local scope. Setting `foo` equal to 2 does not affect the global `foo`. When `bar = 1` is executed, it's referencing the global `bar` because there is no new definition within the function.
