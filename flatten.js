function flatten(arr){ //function called flatten, takes an array as argument
    return arr.reduce((acc,curr) => acc.concat(curr), []); //puts arrays in large array
}
undefined
let arrays = [[1,2,3],[4,5],[6,7,8,9],[10]];
undefined
console.log(flatten(arrays));

