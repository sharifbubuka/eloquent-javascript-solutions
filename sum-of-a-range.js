var array = [], start, end;

var range = (start, end) => {
   for (let value = start; value <= end; value++){
      array.push(value);
   }
   console.info("The array is " + array);
   return array;
}
var sum = array => {
   var sum = 0;
   for (let number of array){
      sum += number;
   }
   console.info("The sum is " + sum);
   return sum;
}
function summer 
console.log(sum(range(1,10)));