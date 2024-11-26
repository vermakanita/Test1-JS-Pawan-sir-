/*
function expression : function assing to a veriable

not hoisted , no name 

function statement : standalon declaration 
name
hoisted
*/

function statement1(){
    console.log("statement")
}statement1();

let expression1 = function (){
console.log("expression")
}()