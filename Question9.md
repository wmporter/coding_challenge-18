## Question 9
```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}

for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000 );
}
```

## Output
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

## Explanation
The first loop logs the `i` defined using `var` which gets hoisted to the global scope. A loop that only iterates 5 times executes so quickly that by the time any of the setTimeout callbacks are called, the value of `i` is equal to 5. 

The second loop logs the `i` defined using `let`. Because `let` variables are local to the scope in which they're defined and , the anonymous function used as a callback
Each for loop executes in succession, calling setTimeout a total of 10 times. 