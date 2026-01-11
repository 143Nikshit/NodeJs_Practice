// Normal Function
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // Output: 5

// Anonymous Function
var add = function(a,b){
    return a + b;
}
console.log(add(5, 7)); // Output: 12

// Anonymous Function with callback function
function complexExp(add)
{
    console.warn(add(10, 20));  
}
complexExp(function(a, b){
    return a + b;
});
complexExp(add);
// Output: 30