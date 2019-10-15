var mark = {
    name : 'Mark',
    weight : 60,
    height : 1.5,
    calc_bmi : function(){
        this.bmi = (this.weight/(this.height^2)).toFixed(2)
    }
};

var john = {
    name : 'John',
    weight : 50,
    height : 1.6,
    calc_bmi : function(){
        this.bmi = (this.weight/(this.height^2)).toFixed(2)
    }
};

mark.calc_bmi();
john.calc_bmi();
console.log(mark.bmi);
console.log(john.bmi);
if( mark.bmi>john.bmi){
    console.log( mark.name + "'s BMI is greater");
}
else{
    console.log( john.name + "'s BMI is greater");
}