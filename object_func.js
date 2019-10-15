var person = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['Jane','Mark','Bob','Emily'],
    job : 'teacher',
    isMarried : true,
    caclAge : function(){
        this.age =  2019 - this.birthYear;
    }
};

person.caclAge();
console.log(person);