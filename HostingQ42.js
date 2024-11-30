// console.log(a);
// let a=10;

// //
// greet();
// function greet(){
//     console.log("hello");
// }






//Var Hoisting
// console.log(a);
// var a=10;
// console.log(a) 


//let : explicity agr let a likhenge  after that print so it undefined but in hoisting it goto the TDZ before the insisilization 



// //let a;  //top declaration
// console.log(a); // TDZ me gya before inisilaization
// let a=10;  // TDZ se bahar aagya couse insitilation 
// console.log(a) // print 





// function Expression are not hoisted 
// x();
// var x= f1=>{
//  console.log("Fun expression")
// }
// // x();



// function expression with var keyword 
console.log(myFunc); // Output: undefined
var myFunc = function () {
  console.log("Hello!");
};
 myFunc(); // Output: Hello!



//class expression
// console.log(new r(4,3).area());

// const r=class{
//     constructor(h,w){
//         this.h=h;
//         this.w=w;
//     }
//     area(){
//         return this.h* this.w;
//     };
// }
//     // console.log(new r(4,3).area());

