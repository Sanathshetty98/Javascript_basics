var person = {
    firstName : 'John',
    lastName : 'Smith',
    dob : 1990,
    family : ['Jane','Mark','Bob','Emily'],
    job : 'teacher',
    isMarried : true,
    caclAge : function(dob){
        return 2019 - dob;
    }
};

console.log(person.caclAge(person.dob));