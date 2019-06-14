## Question 7
```js
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log(9007199254740993 === 9007199254740992);
```

## Output
```
0.30000000000000004
false
true
```

## Explanation
Welcome to the wonderful world of floating point representation. Without getting too deep in the weeds, the short explanation is that sometimes when JavaScript does math with floating point numbers, the result is an estimate that is as close as it knows how to get instead of an exact number.

Since we know that 0.1 + 0.2 is equal to 0.3, it's easy to expect JavaScript to also know that. So it seems obvious that we should check for equality. But as you can see from the first output, it's not exactly 0.3 so the equality check is false.

The third value evaluating to true is also related to floating point representation. In JavaScript, all numbers are floating point internally. There is a range of numbers considered "safe" and 9007199254740993 is outside that range. It's a bad idea to expect numbers outside the safe range to behave correctly.