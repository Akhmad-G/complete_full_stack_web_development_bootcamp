function whosPaying(names) {
    let payerNumber = Math.floor(Math.random() * names.length); // Math.floor(Math.random(names.length) * 10)
    // The value of ".length" is already 1 greater than the numbers of "array", so there is no need to add +1.
    return names[payerNumber] + " is going to buy lunch today!"
}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);
