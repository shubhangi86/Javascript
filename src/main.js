console.log('Hello World');

function printNumbersWithForLoop(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
}

function printNumbersWithWhileLoop(number) {
    let i = 1;
    while (i <= number) {
        console.log(i);
        i++;
    }
}

//Calls a function on each element
function printNumbersWithForEachLoop(arr) {
    arr.forEach((num) => {
        console.log(num);
    });
}

printNumbersWithForLoop(10);
printNumbersWithWhileLoop(10);
printNumbersWithForEachLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
