//TODO:
// DATATYPES
//1) Primitive(call by value): number , string , boolean , null , undefined , Symbol , BigInt.

// Non Primitive(or reference type)
// Arrays , Objects, Functions
// arrays -> []
// objects => {name:"Umang" , age:18}

let myFunc = function(){
    console.log("my var");
}
myFunc();

//typeof - type janane ke liye

// TODO:

// Stack (Primitive)
// Heap (Non Primitive)

// Stack
let myYoutubeName = "explorewithumang"
let anothername = myYoutubeName //copy di gayi hai, original value ka ref pass nhn kia gya
anothername = "umang.explores"
// console.log(myYoutubeName , anothername);

// Heap
let userOne = {
    name:"Umang",
    age: 18
}
let userTwo = userOne;// ref pass kia gaya , and aab userOne , usetTwo dono dono ek hi object ko point krte hain 
userTwo.name = "Hitesh Sir"; 
console.log(userOne.name); 






