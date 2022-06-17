var marks = [20, 50, 60, 90, 50, 80,60];
var max = [0];

for(var i = 0; i < marks.length; i++) {
   var element = (marks[i]);
   if(element > max) {
    max = element;
   }
}
console.log("Highest value is: ", max);