function foo() {
    for (var i = 0; i < 5; i++) {
        let m = i;
        setTimeout(function() { console.log('var',m); }, i * 1000 );
    }
      
    for (let i = 0; i < 5; i++) {
        setTimeout(function() { console.log('let', i); }, i * 1000 );
    }
}
foo();