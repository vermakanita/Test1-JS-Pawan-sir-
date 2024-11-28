/*
scope chaining :- it allow to accesing the variable from parent scope if they are not fount in the current scope 
*/ 



let a=10;
function add(){
    let b=5;
    function sum(){
        console.log(a+b)
    }return sum();
}add();
