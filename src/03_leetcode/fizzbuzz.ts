function fizzBuzz(n: number): string[] {
    let result: string[] = [];

    for (let index = 1; index <= n; index++) {
        if (isDivisible(index, 3)) {
            result.push("Fizz");
        } else if (isDivisible(index, 5)) {
            result.push("Buzz");
        } else if (isDivisible(index, 3) && isDivisible(index, 5)) {
            result.push("FizzBuzz");
        } else {
            result.push(String(index));
        }
    }

    return result;
}

function isDivisible(n: number, n2: number): boolean {
    return n % n2 === 0;
}

console.log('fizz buzz-->', fizzBuzz(5));