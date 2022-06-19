var spech = "My name is hasan khan. I am a web developer."
var count = 0;

for(i = 0; i < spech.length; i++) {
    var element = spech[i];

    if(element == " " && spech[i-1] != " ") {
        count++;
    }
}
count++;
console.log(count)