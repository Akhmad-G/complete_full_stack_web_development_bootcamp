function fibonacciGenerator(n) {
    let sequence = [0, 1];

    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return sequence;
    } else {
        for (let i = 2; i < n; i++) {
            let nextNumber = (sequence.length - 2) + (sequence.length - 1);
            sequence.push(nextNumber);
        }
        return sequence;
    }
}

console.log(fibonacciGenerator(Number(prompt("How long a Fibonacci sequence do you need?"))));
