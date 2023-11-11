let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

let oddNumbers = numbers.filter(number => number % 2 !== 0);
let doubledNumbers = oddNumbers.map(number => number * 2);

console.log("the double odd numbers are", doubledNumbers);