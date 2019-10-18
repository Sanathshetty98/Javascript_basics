// var Person = function(name, birthYear, job){
//     this.name=name;
//     this.birthYear = birthYear;
//     this.job = job;
//     }
//   Person.prototype.age = function(){
//       console.log( 2019 - this.birthYear);
//   }
//   var john = new Person('John' , 1995, 'Teaching');
//   var jane = new Person('Jane' , 1989, 'Designer');
//   var mark = new Person('Mark' , 1965, 'Retired');
//   john.age();
//   jane.age();
//   mark.age();

var personProto = {
    age : function(){
        console.log( 2019 - this.birthYear);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.birthYear = 1990;
john.job = 'Teaching';

var jane = Object.create(personProto, {
    name : {value: 'Jane'},
    birthYear : {value: 1995},
    job : {value: 'Designer' }
});