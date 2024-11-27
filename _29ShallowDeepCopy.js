/*
shellow copy : it create a new object of array but take only refrences of the nested object or array 
not actual values;
if you change the nested obj array it change the original array but if you change the value of array and obj it cant be effect on original array 
only nested can change the values;
*/



/*
Deep Copy:- create fresh copy whole data
*/


// non primitive nested obj h to hi change hoga original
// let original={name:"kanita",age:23,address:{city:"indore"}};
// let copy ={...original};
// copy.address.city="ujjain";  //original effect couse nested
// copy.name="verma"  // original not changed couse of not nested 
// console.log(copy);
// console.log(original);




//primitive datatype nested array nhi h  y to nhi huaa change
// let original=[1,2,3];
// let copy ={...original};
// copy[1]=10;
// console.log(copy);
// console.log(original);





// DEEP COPY 
let original={name:"kanita",age:23,address:{city:"indore"}};
let copy =JSON.parse(JSON.stringify(original));
copy.address.city="ujjain";
console.log(copy);
console.log(original);


