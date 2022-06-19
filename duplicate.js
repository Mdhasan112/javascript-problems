var Name = [50, 7, 7, 8, 9, 9, 5, 50]
var uniqueName = [];

for(i = 0; i < Name.length; i++) {
    var element = Name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName)