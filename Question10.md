## Question 10
```js
console.log(1 < 2 < 2);
console.log(3 > 2 > 1);
```

## Output
```
true
false
```

## Explanation
The below sequence shows the steps to evaluate the first statement
```
1 < 2 < 2
(1 < 2) < 2
true < 2
1 < 2
true
```
Let's take each step one at a time.

`1 < 2 < 2` to `(1 < 2) < 2`  
When evaluating the original statement, JavaScript uses [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) and [associativity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Associativity) to decide which operators to apply first. If you ever learned about order of operations in Algebra, this may sound familiar to you. When calculating `2 + 3 * 4`, the `*` operation (multiplication) has higher precedence than `+` (addition), so `3 * 4` is calculated first and the operation reduces to `2 + 12`. Different operators similarly have different precedence in JavaScript. 

"But," I can hear you saying, "there are two less than operators here, so don't they have the same precedence?" The answer is yes. In the case of equal precedence, JavaScript uses associativity to decide what order to evaluate the operations. Because `<` (less than) is "left associative", the operations are evaluated left to right, so `1 < 2` gets evaluated first.

`(1 < 2) < 2` to `true < 2`  
This one is easy enough. 1 is less than 2, so the boolean expression `1 < 2` evaluates to `true`.

`true < 2` to `1 < 2` to `true`  
This one seems weird. How do we check if a Boolean value is less than a number? Our old friend [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) to the rescue. The Boolean gets coerced to a number so that comparing it with `<` makes sense. When Booleans are coerced to numbers, `true` becomes `1` and `false` becomes `0`. And since 1 is less than 2, the whole thing ultimately evaluates to `true`.

For the second statement, all the steps are exactly the same and have the same explanations.
```
3 > 2 > 1
(3 > 2) > 1
true > 1
1 > 1
false
```
