// a function passed as argument to another function and excute later 
function f1(f2){
    let name="ken";
    f2(name)
}
f1((name)=>
console.log(`hello,${name}`))