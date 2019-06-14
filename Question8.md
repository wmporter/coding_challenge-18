## Question 8
```js
const a = {},
    b = {c:'b'},
    c = {b:'c'};

a[b] = 111;
a[c] = 333;

console.log(a[b]);
```

## Output
`333`

## Explanation
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