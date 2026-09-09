// Задания на работу со строками

// 1
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("привет"));


// 2
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("abc"));


// 3
function countVowels(str) {
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello"));


// 4
function truncateText(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }

    return str;
}

console.log(truncateText("Очень длинная строка", 10));


// 5
function removeSpaces(str) {
    return str.replaceAll(" ", "");
}

console.log(removeSpaces("a b c"));



// Задания на работу с массивами

// 1
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

console.log(sumArray([1, 2, 3]));


// 2
function filterEvenNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4]));


// 3
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([5, 2, 10, 3]));


// 4
function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j]);
        }
    }

    return result;
}

console.log(flattenArray([[1, 2], [3, [4]]]));


// 5
function uniqueValues(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(uniqueValues([1, 2, 2, 3, 1]));



// Задания на работу с циклами


// 1
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbers(5);


// 2
function calculateFactorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log(calculateFactorial(5));


// 3
// 3
function generateMultiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 10; j++) {
            if (i === n) {
                console.log(n + " * " + j + " = " + (n * j));
            }
        }
    }
}

generateMultiplicationTable(5);


// 4
function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigits(1234));


// 5
function repeatString(str, count) {
    let result = "";

    for (let i = 0; i < count; i++) {
        result = result + str;
    }

    return result;
}

console.log(repeatString("Hi", 3));