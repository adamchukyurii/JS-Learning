console.log("Hello World!!");

const msg = document.getElementById("msg");
msg.innerHTML = "javascript enabled. all right";

// boolean

let value_true = true;
let value_false = false;

let array = [];

let obj = {
   name: "Fedor",
   surname: "Fedorov",
}

let value; // == let value = null;

let value2 = undefined;

let notanumber = NaN;

let num = 5;

let str = "strign";

let infinityvalue = Infinity;
let infinitypositive = Infinity++;
let infinitynegative = Infinity--;

let symbol = Symbol;

// ==   without type
// ===  with type
// !variable
// a != b
// a !== b

// if (2 + 3 === 5){
//    console.log("2 + 3 = 5");
// } else {
//    console.log("fucking bullshit");
// } 

// let valueA = 15;
// let valueB = 36;
// alert(valueA + valueB);

// const userInfo = prompt("who are you?");
// alert("You are " + userInfo);

// 2 + '2' = '22' js think that in two sides is string.

alert(prompt("who is this?"));

const result = confirm("Do you agree? P.S: cannot chose not!");
if (!result){
   alert("You are fucking bull shit i will finf you and fuck wiht dildo");
   result = confirm("Do you agree? P.S: cannot chose not!");
} else{
   alert("good boy");
}

// console.log(`${Name} ${surname}`);
// const variable = +prompt("some text"); in variable will be number.