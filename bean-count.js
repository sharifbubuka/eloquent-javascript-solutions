var character = '';
undefined
var size;
undefined
var charCount;
undefined
var string = "";
undefined
function countChars(string, character){
    size = string.length;
    for(var counter = 0; counter < size; count++){
        var charCount = 0;
        if(string.charAt[counter] == character.toUpperCase())
            charCount += 1;
    }
    return charCount;
}
undefined
console.log("The number of Bs in BuBashaticBuBuka is " + countChars("BuBashaticBuBuka", 'b'));
VM2160:3 Uncaught ReferenceError: count is not defined
    at countChars (<anonymous>:3:47)
    at <anonymous>:1:58
countChars @ VM2160:3
(anonymous) @ VM2428:1
