var mark = {
    name : 'Mark',
    weight : 60,
    height : 1.5,
    calc_bmi : function(){
        return this.weight/(this.height^2)
    }
};

var john = {
    name : 'John',
    weight : 50,
    height : 1.6,
    calc_bmi : function(){
        return this.weight/(this.height^2)
    }
};


console.log(mark.calc_bmi());
console.log(john.calc_bmi().toFixed(2));
if( mark.calc_bmi>john.calc_bmi){
    console.log("Mark's BMI is greater");
}
else{
    console.log("John's BMI is greater");
}