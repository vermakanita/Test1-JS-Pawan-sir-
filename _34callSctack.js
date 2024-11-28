/* the call stack is a mechanism to track the function excution in java script . function are added when it called and remove after it excution .

*/


function first(){
    console.log("first");
     second();
}
function second(){
    console.log("second");
}
first();


/*
call stack 
1.first
2.second
excution first second
remove functions from call stack 
*/

