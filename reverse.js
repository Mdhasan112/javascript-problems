var reverse = "";

function reverSpech(talk) {
    for(i = 0; i < spech.length; i++ ) {
        var element = spech[i];
        reverse = element + reverse;
    }
    return reverse;
}
var spech = "hello what is your name?";
var hk = reverSpech(spech);
console.log(hk);