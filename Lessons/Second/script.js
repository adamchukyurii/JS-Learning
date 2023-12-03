const num1 = 28;
const num2 = 63;

if(num1 === num2) {
   console.log("Not equal");
} else {
   console.error("Equeal"); // its error
   console.warn("Verify your numbers"); // its warning
   // throw new Error("Error"); // generating errors by yourself - stoping 
// creating new object - throw 
}

// const GetFirstNumber = +prompt("Your first number");
// const GetSecondNumber = +prompt("Your second number");

// if (!isNaN(GetFirstNumber) && !isNaN(GetSecondNumber)){
//    alert(GetFirstNumber / GetSecondNumber);
// } else {
//    console.error("Not a number");
// }

// let parity;

// const get_number = +prompt("Enter your number");

// if (get_number % 2 === 0) {
//    parity = "Even"
// } else {
//    parity = "Odd";
// }

// console.log(parity);

// const sum = +prompt("Enter your sum");
// const rounded_sum = Math.round(sum);
// let bx;

// // if (rounded_sum % 2 === 0){
// //    bx = rounded_sum;
// // } else{
// //    if ( sum < rounded_sum){
// //       bx = rounded_sum - 1;
// //    } else bx = rounded_sum + 1;
// // }

// console.log(bx);

// console.log((+prompt("Enter a number") % 2 === 0 ? "even" : "odd"));

// const protocol = prompt("get protocol:").toUpperCase();
// let desctription
// // if (protocol === "HTTP"){
// //    desctription = "Hyper Transfer Protocol"
// // } else if (protocol === "HTTPS"){
// //    desctription = "Secure Huper Protocol"
// // } else if (protocol === "FTP"){
// //    desctription = "File Transfer Protocol";
// // } else desctription = "Usupported protocol";

// // alert(desctription);

// switch (protocol){
//    case 'HTTP':
//       desctription = "Hyper Transfer Protocol";
//       break;
//    case 'HTTPS':
//       desctription = "Secure Huper Protocol";
//       break;
//    case 'FTP':
//       desctription = "File Transfer Protocol";
//       break;
//    default:
//       desctription = "Usupported protocol";
// }

// alert(desctription);

// const start_value = +prompt("Input number: ");
// const value1 = +prompt("Input value 1");
// const value2 = +prompt("Input value 2");
// const value3 = +prompt("Input value 3");
// const value4 = +prompt("Input value 4");
// const value5 = +prompt("Input value 5");

// let str = "";
// switch(start_value){
//    case value1:
//       str += ` ${value1}`;
//    case value2:
//       str += ` ${value2}`;
//    case value3:
//       str += ` ${value3}`;
//    case value4:
//       str += ` ${value4}`;
//    default:
//       str += " End";
// }

// alert(str);

// const start_value = +prompt("Your number will be:");
// let result;
// let space = " ";
// if (start_value <= 5){
//    switch(start_value){
//       case 1:
//          space += 1 + ", ";
//       case 2:
//          space += 2 + ", ";
//       case 3:
//          space += 3 + ", ";
//       case 4:
//          space += 4 + ", ";
//       default:
//          space += 5 + ", ";
//    }
// } else if (start_value > 5){
//    switch(start_value){
//       case 6:
//          space += 6 + ", ";
//       case 7:
//          space += 7 + ", ";
//       case 8:
//          space += 8 + ", ";
//       case 9:
//          space += 9 + ", ";
//       default:
//          space += 10 + ", ";
//    }
// }

// alert(space);

// const input_string = prompt("Please enter your password: ");

// if (input_string === "Step" || input_string === "Web" || input_string === "JavaScript") {
//    alert("You are Welcome!");
// } else {
//    alert("You will not pass!")
// }

const input_num = +prompt("Enter your number");

if (input_num >= 0 && input_num <= 100){
   alert("Your number is " + input_num + " and ints in diapozon");
} else {
   alert("Your number is " + input_num + " and ints not in diapozon");
}

const first_num = +prompt("Your first number will be: ");
const second_num = +prompt("Your second number will be: ");

if (first_num != NaN && second_num != NaN){
   if (first_num == second_num){
      alert(`${first_num}=${second_num}`);
   } else if (first_num < second_num){
      alert(`${first_num}<${second_num}`);
   } else{
      alert(`${first_num}>${second_num}`);
   }
}