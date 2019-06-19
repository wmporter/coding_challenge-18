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
Each for loop executes in succession, calling setTimeout a total of 10 times. 