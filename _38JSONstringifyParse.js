/*
JSONstringify():- convert js object to JSON string 
JSONparse():-convert JSON string to js object;
*/


let obj = {
    name:"kanita",
    age:22,
    collage:{
        name:"jit",
        age:1947
    }
};


let string=JSON.stringify(obj);
console.log(string);
let jsparse=JSON.parse(string);
console.log(jsparse.collage.age);