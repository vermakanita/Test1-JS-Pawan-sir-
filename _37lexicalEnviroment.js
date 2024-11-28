/*
lexical environment:-lexical enviroment is a structure which is holds the variable whuch is difined in the specific scope , along with a reference to its parent environment
*/
function outer(){
    let x=10;
    function inner(){
        console.log(x);

    }
    return inner();
} outer();