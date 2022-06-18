var num = [10, 30, 50, 5, 59, 60];
var sum = 0;

for(var i = 0; i < num.length; i++) {
    var element = num[i];

    sum = sum + element;

    
}
console.log(sum)



function arraySum(num) {
    var sum = 0;

for(var i = 0; i < num.length; i++) {
    var element = num[i];

    sum = sum + element;

    
}
    return sum;

}
var num = [10, 30, 50, 5, 59, 60];
var result = arraySum(num);
console.log(result);

var total = arraySum([40, 70, 67, 59,80]);
console.log(total);
