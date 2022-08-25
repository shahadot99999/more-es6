const numbers = [2, 8, 4, 6, 3];

//normall way function getdouble 

function getDoubles(numbers) {

    //function store 
    const output = [];

    //function for variable 
    for (const number of numbers) {

        //function number init
        const doubled = doubleIt(number);

        //function push value
        output.push(doubled);
    }

    //show output result
    return output;
}

function doubleItOld(num) {
    return num * 2;
}

//array function apply 
const doubleIt = num => num * 2;

//function apply and use map. numbers= array then map then doubleIt =value call . 
const makeDouble = numbers.map(doubleIt);

// it also focus reduction funtion command call . it direclty array+value call. 
const makeDoubleDirect = numbers.map(num => num * 2)
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect);
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);
/* 
purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

const result = getDoubles(numbers);
console.log(result);

//print the result.
console.log(makeDouble);
