const person={
    name:"xyz",
    age:30,
}
const newPerson={...person,city:"MAU",name:"HARRY"};
console.log(person);
newPerson.age=35;
console.log(person);
console.log(newPerson);
const emp=["xyz",35,100001.50];
const newEmp=[...emp];
console.log(newEmp);