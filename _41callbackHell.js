// callback : a situation where multiple nested callback make the code hard to read and maintain

// Avoid it 
// 1. promises
// 2. async /await



// callback hall
// setTimeout(()=>{
//     console.log("step 1");
// },1000);

// setTimeout(()=>{
//     console.log("step 2");

// },1000);
// setTimeout(()=>{
//     console.log("step 3");
// },1000);

// setTimeout(()=>{
//     console.log("step 4");
//     console.log("inside done")
//     },1000);
//     console.log("done")
// },3000);
// },5000);
// },7000);




//solution with async and await
 async function step(){
    await new Promise((resolve)=>setTimeout(resolve,1000));
    console.log ("step 1");
    await new Promise((resolve)=>setTimeout(resolve,1000));
    console.log("step 2");
    await new Promise((resolve)=>setTimeout(resolve,1000));
    console.log("step 3");
     new Promise((resolve)=>setTimeout(resolve,500));

}step();