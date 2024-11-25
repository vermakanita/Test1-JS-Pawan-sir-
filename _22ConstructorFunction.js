/*
it used to create obj and invoke using new key word 
*/

function person(name,age){
    this.name=name;
    this.age=age;

}
let obj = new person("kanita",22);
console.log(obj.age)

