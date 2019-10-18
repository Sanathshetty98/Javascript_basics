var arr = [1925, 1989, 1978, 2005, 1995];

var age = ageCalc( arr, fn);
console.log( age );
var Above18 = ageCalc( age, ageLimit);
console.log( Above18 );
var HeartRate = ageCalc( age, maxHeartRate);
console.log(HeartRate);
function ageCalc( arr , fn){
    arrFinal = []
    for(var i =0 ; i<arr.length ; i++){
        arrFinal.push(fn(arr[i]));
    }
    return arrFinal;
}
function fn ( ele ){
    return 2019-ele;
}
function ageLimit( ele ){
    return ele>=18;
}
function maxHeartRate( ele ){
    if( ele >=18 && ele<=81){
        return Math.round( 206.9 - (0.67 * ele));
    }
    else return -1;
}
