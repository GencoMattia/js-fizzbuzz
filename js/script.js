for (let i = 1; i <= 100; i++) {
    const squareContainer = document.querySelector ("div#element-container");
    let spanEl = document.createElement("div");

    if (i % 3 === 0 && i % 5 !== 0) {
        console.log ("Fizz");
        squareContainer.append (spanEl);
        spanEl.append("Fizz");
        spanEl.classList.add("three-Style", "bg-success", "col-1", "border", "border-black", "m-2");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log ("Buzz");
        squareContainer.append (spanEl);
        spanEl.append("Buzz");
        spanEl.classList.add("five-Style", "bg-warning", "col-1", "border", "border-black", "m-2");
    } else if (i % 3 === 0 && i % 5 === 0 ) {
        console.log ("FizzBuzz")
        squareContainer.append (spanEl);
        spanEl.append("FizzBuzz");
        spanEl.classList.add("five-Style", "bg-primary", "text-white", "col-1", "border", "border-black", "m-2");
    } else {
        console.log (i)
        squareContainer.append (spanEl);
        spanEl.append(i);
        spanEl.classList.add("no-Style", "col-1", "border", "border-black", "m-2");
    }
}


