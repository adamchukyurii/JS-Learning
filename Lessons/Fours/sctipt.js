// () => {
//    for(let i = 1; i < 6; i++){
//       console.log(i);
//    }
// };

// function GetValues () {
//    for(let i = 1; i < 6; i++){
//       console.log(i);
//    }
// };
// GetValues();

// function GetString() {
//    console.log(arguments);
// } 

// GetString(4, 5, Math.PI);

// const GetSum = (a, b, c) => {
//    return a+b+c;
// };

// console.log(GetSum(2, 5, 3));

// const GetString = (str) => {
//    const ReverseString = (str) => {
//       return str.split("").reverse().join("");
//    }
//    return ReverseString(str);
// };

// console.log(GetString("abcde"));

// const ShowError = (str) => {
//    return alert("Erorr " + str + " occurred!");
// };

// ShowError(prompt("What is your problem ?"));

// function GetNumber() {
//    console.log(arguments);
// }

// GetNumber(5, 6, 7, 8, 9);

// factorial = 1;

// for(i = 1; i <= 5; i++){
//    console.log((factorial *= 1));
// }

function factorial(n){
   if (n == 1) return 1;
   return n * factorial(n - 1);
}

console.log(factorial(170));