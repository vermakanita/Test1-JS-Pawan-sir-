
// Simple syntax

// let mypromise = new Promise((resolve,reject)=>{
//     let s=false;
//     if(s){
//         console.log("resolve")
//     }
//     else{
//         console.log("reject")
//     }
// });
// mypromise
// .then((massage)=>{
//     console.log(massage);
// })
// .catch((error)=>{
//     console.log(error)
// })



//Using setTimeOut

// let p= new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve ("data loaded"),1000);
//     setTimeout(()=>reject("reject"),1000);
// })

// p.then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.error(error);
// })




//Chaining Promise

// const chain = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve(10),3000);
// })
// // const rchain = new Promise((resolve,reject)=>{
// //     setTimeout(()=> reject("NaN"),3000);
// // })

// .then((m)=>{
//     console.log(m);
//     return m*2
// })
// .then((m)=>{
//     console.log(m);
//     return m*2;
// })
// .then((m)=>{
//     console.log(m)
//     return m*2;
// })
// .then((m)=>{
//     console.log("all done")
// })
// .catch((error)=>{
//     console.error(error);
// })











// // finally ()
// const final1 = new Promise((resolve,rejetc)=>{ 
// setTimeout(()=> resolve("resolve"),3000);
// })

// final1.then((s)=>{
//     console.log(s);

// })
// .catch((error)=>{
//     console.error(error);
// })
// .finally(()=>{
//     console.log("finali method")
// })







// let p1= Promise.resolve(5);
// let p2=  Promise.resolve(10);
// let p3= Promise.resolve(15);

// Promise.all([p1,p2,p3])
// .then((m)=>{
//     console.log(m);
// })
// .catch((error)=>{
//     console.error(error);
// }
// )





//all.Setteld()



// let p1= Promise.resolve(5);
// let p2=  Promise.reject("Nan");
// let p3= Promise.resolve(15);

// Promise.allSettled([p1,p2,p3])
// .then((m)=>{
//     console.log(m);
// })






//race()
let p1= Promise.resolve(5);
// let p2=  Promise.reject("Nan");
let p3= Promise.resolve(15);

Promise.race([p1,p3])
.then((m)=>{
    console.log(m);
})
 