// Cycles
// 1
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 2
// const mass = ["IT", 34, "html", 77];
// console.log(mass[2]);

// for (let i = 0; i < mass.length; i++) {
//     console.log(mass[i]);
// }

// 3
// const mass = [
//    {
//       name: "Serhii",
//       surname: "Ivanov",
//       age: 33,
//       work: "IT Manager",
//    },
//    {
//       name: "Kirill",
//       surname: "Fedorov",
//       age: 20,
//       work: "Recruter",
//    },
//    {
//       name: "Fedor",
//       surname: "Stepanov",
//       age: 37,
//       work: "General",
//    },
// ];

// for (let i = 0; i < mass.length; i++){
//    const {name, surname, age, work} = mass[i];
//    console.log(name, surname, age, work);
// }

// mass.map(({name, surname, age, work}) => {
//    console.log(name, surname, age, work);
// });

// const mass = [1, 5, 7, [1, 4, 6, 7], 9, 2, "ds"];

// mass.map((value, index, oldmass) => {
//    console.log(value);
// });
// 5
// let i = 0;
// while (i <= 10){
//    console.log(i);
//    i++;
// }

// let monthlyPayment = +prompt("Input montly payment");
// let creditAmount = +prompt("Input credit amount");
// let creditRate = +prompt("Input credit rate");
// let month = 0;

// if (!isNaN(monthlyPayment + creditAmount + creditRate)) {
//    while( creditAmount > 0){
//       creditAmount *= creditRate;
//       creditAmount -= monthlyPayment;
//       month++;
//    }
//    console.log(month);
// }

// 7

// let num1 = Math.floor(Math.random() * 10);
// let num2;
// do {
//    num2 = Math.floor(Math.random() * 10);
// } while(num1 == num2){
//    console.log(`${num2}, ${num1}`);
// }


// for (i = 1, j = 10; i != j; i++, j--) {
//    console.log(i, j);
// }

// let fund = +prompt("Credit sum: ");
// let month = +prompt("Credit term (month): ");
// let creditRate = +prompt("Credit Rate:");

// creditBody = fund + (creditRate * fund * month);
// monthlyPayment = creditBody / month;

// for (i = 1; i <= month; i++) {
//    console.log(`Month: ${i}, Payment: ${monthlyPayment}`);
// }

// const obj = {
//    name: 'Vlad',
//    surname: 'Kholod',
//    age: 34,
//    itlevel: 'JebanyJune',
//    itSpecialization: "All in one",
//    additionalSpecialization: ['Pizdet', 'Boltat', 'Chuy penat'],
// };

// for (key in obj){
//    console.log(`${key} - ${obj[key]}`);
// }

const mass = [1, 2, 54, 93, 77, 888, 91, 4];

// for (i of mass){
//    console.log(i);
// }

// for (i in mass) {
//    console.log(mass[i]);
// }

// for (i of mass){
//    if (i === 77){
//       continue;
//    } else if (i === 91){
//       break;
//    } else {
//       console.log(i);
//    }
// }

// loopI: for (i = 0; i < 5; i++){
//    loopJ: for (j = 0; j < 5; j++){
//       console.log(i, j);
//       if (j == 3) break loopI;
//    }
// }
console.log("First");

const amountNumber = +prompt("Input your amount of number: ");

for (let i = 2; i <= amountNumber; i++){
   if (i % 2 !== 0){
      continue;
   } else{
      console.log(i);
   }
}

console.log("Second");

for (let i = amountNumber; i >= 0; i--){
   if (i % 2 !== 1){
      continue
   } else console.log(i);
}

console.log("Third");

for (let i = 1; i <= amountNumber; i++){
   if (amountNumber % i !== 0 || amountNumber === i){
      continue;
   } else console.log(i);
}

console.log("Fours");
let cnt = 0;

// while(cnt < 10){
//    let num = Math.floor(Math.random * 100);
//    if (num <= 20){
//       if (num % 4 === 0){
//          continue;
//       } else console.log(num);
//       cnt++;
//    }
// }

let count = 0;

while(count< 10){
   let num = Math.floor(Math.random() * 20)
   if (num % 4 !== 0){
      console.log(num);
      count++
   } 
}