var arr = ['john','mark',1990,true,'emily',11.91];
console.log(arr);
for( var i=0;i< arr.length;i++){
    if( typeof arr[i] !== 'string') continue;
    console.log(arr[i]);
}