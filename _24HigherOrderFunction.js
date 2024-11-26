/*
take another function as argument 
return a function 
*/

function f1(f2){
    f2();
}f1(()=>console.log("this is higher order function"))