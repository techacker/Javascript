// Learning JavaScript Data Structures
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end, step) {
    let arr = [];
  	if (step == "") {
      let incr = 1;
    } else {
      let incr = step;
    };
  
    for (let i = start; i < end; i+incr) {
        arr.push(i);
    };
    return arr;
}

function sum(arr) {
    let total = 0;
    for (var item in arr) {
        total += item;
    }
    return total;
}

console.log(range(1,10,2));
console.log(sum(range(1,10,2)));