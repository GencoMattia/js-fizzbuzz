for (let i = 1; i <= 100; i++) {
    const squareContainer = document.querySelector ("div#element-container");
    let spanEl = document.createElement("span");

    if (i % 3 === 0 && i % 5 !== 0) {
        console.log ("Fizz");
        squareContainer.append (spanEl);
        spanEl.append("Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log ("Buzz");
        squareContainer.append (spanEl);
        spanEl.append("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0 ) {
        console.log ("FizzBuzz")
        squareContainer.append (spanEl);
        spanEl.append("FizzBuzz");
    } else {
        console.log (i)
        squareContainer.append (spanEl);
        spanEl.append(i);
    }
}


