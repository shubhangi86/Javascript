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

//Objects
var days= {
    'monday' : 'Monday',
    'tuesday' : 'Tuesday',
    'wednesday' : 'Wednesday',
    'thursday' : 'Thursday',
    'friday' : 'Friday',
    'saturday' : 'Saturday',
    'sunday' : 'Sunday'
}

//Method 1
let daysKeys= Object.keys(days);
daysKeys.forEach((keys)=>console.log(keys));

let daysValues= Object.values(days);
daysValues.forEach((values)=> console.log(values))

//Method 2--- some examples mentioned hasOwnProperty method with if condition?
//Printing keys
for(const key in days){
    console.log(key);
}

//printing values
for(const value in days){
    console.log(days[value]);
}

//Printing length
let daysLength= Object.keys(days).length;
console.log(daysLength);

//Replace key value
days['monday'] = 'Somvar';
for(const value in days){
    console.log(days[value]);
}


