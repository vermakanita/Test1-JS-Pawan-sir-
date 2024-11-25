/* 
error callback function called when a error occurs during the asynchronous operation 
ensure error are handle properly
*/

function f1(callback,errorcallback){
    let s=true;
    if(s){
        callback("done")
    }
    else{
        errorcallback("not")
    }
}
f1((data)=>
console.log(data),
(error)=>console.log(error));