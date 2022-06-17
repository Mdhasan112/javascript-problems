var business = 300;
var minister = 400;
var sochib = 350;

// var mx = Math.max(business, minister, sochib);
// console.log(max);

// or

if(business > minister) {
    if(business > sochib) {
        console.log("business is bigge")
    }
    else{
        console.log("sochib is bigger")
    }
}
else{
    if(minister > sochib) {
        console.log("minister is bigger")
    }
    else{
        console.log("sochib is bigger")
    }
}
