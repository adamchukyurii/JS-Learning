// 1
function task1(){
   const user_input1 = +prompt("What is your start ?");
   const user_input2 = +prompt("What is your end ?");
   let sum = 0;

   for (let i = user_input1; i <= user_input2; i++) {
      sum += i;
   }
   alert(`Your sum is ${sum}`);
}

// task1();
// 2 

function task2(){
   const a = Math.abs(+prompt("Your first number will be: "));
   const b = Math.abs(+prompt("Your second number will be: "));
   let i = 0;
   let max_divisor = 1;
   while(i <= a && i <= b) {
      if (a % i === 0 && b % i === 0){
         max_divisor = i
      }
      i++;
   }
   alert(`Max divisor of ${a} and ${b} is ${max_divisor}`);
}

// task2();

// 3

function task3(){
   const n = +prompt("Your number will be: ");
   let i = 0;
   let allDivisors = []

   if (n < 0) i = n;

   while(i <= Math.abs(n)) {
      if (n % i === 0) {
         allDivisors.push(i);
      } 
      i++;
   }

   alert(allDivisors);
}

// task3();

// 4

function task4(){
   const user_number = prompt("Please enter your number: ").split("");
   const lengthArray = user_number.length;
   let cnt = 0;
   while(cnt < lengthArray){
      if (lengthArray == 1){
         alert("There is only one number")
      } else cnt++;
   }
   alert(`The amount of numbers is ${cnt}`);
}

// task4();
// 5

function task5(){
   const user_string = prompt("Enter 10 numbers with space: ");
   let user_string_to_arr = user_string.split(" ");
   let user_numbers = [];
   for (i of user_string_to_arr){
      user_numbers.push(+i);
   }
   let cnt_positive = 0;
   let cnt_nagative = 0;
   let cnt_zero = 0;

   for (let i = 0; i < user_numbers.length; i++){
      if (user_numbers[i] < 0){
         cnt_nagative++;
      } else if (user_numbers[i] > 0){
         cnt_positive++;
      } else cnt_zero++;
   }
   alert(`You have entered ${cnt_positive} positive numbers, ${cnt_nagative} negative numbers, ${cnt_zero} zeros`);

   alert(`Positive numbers ${cnt_positive}, Negative numbers ${cnt_nagative}, ${cnt_zero} zeros`);
}

// task5();
// 6
function task6(){
   let flag = true;

   do{
      const first = +prompt("Your first number is: ");
      const second = +prompt("Your second number is: ");
      const operator = prompt("What you wand to do ?");
      switch(operator){
         case '+':
            alert(first + second);
            break;
         case '-':
            alert(first - second);
            break;
         case '*':
            alert(first * second);
            break;
         case '/':
            alert(first / second);
            break;
         case '%':
            alert(first % second);
            break;
         default:
            alert("You have missunderstand me, type a action symbol of math");
            break;
      } 
      flag = confirm("Do you want to continue");
   } while (flag == true);
}

// task6();

// 7
function task7(){
   let inputArray = prompt("Enter your number: ");
   let splitedArray = inputArray.split("");
   const shift = +prompt("Lenth of shift would be: ");
   const firstPare = splitedArray.slice(0, shift).join("");
   const secondPare = splitedArray.slice(shift, splitedArray.length).join("");
   alert(`Your new number wold be ${(secondPare + firstPare)}`);
}

// task7();
// 8
function task8(){
   const daysWeek = ["Monday", "Tuesday", "Wednasday", "Thursday", "Friday", "Saturday", "Sanday"];
   let flag = true;
   let i = 0;
   do{
      flag = confirm(`Its ${daysWeek[i]} do you want to continue ?`);
      if (i == 6){
         i = 0;
      } else i++;
   }while(flag);
}

// 9
function task9(){
   for (let i = 2; i <= 10; i++){
      for (let j = 1; j <= 9; j++){
         console.log(`${i} * ${j} = ${i*j}`);
      }
   }
}
// task9();

// 10
function task10(){
   const userNumber = +prompt("Enter your number in diapozon 0-100");
   let low = 0;
   let high = 99;

   while (low <= high){
      let mid = Math.round((low + high) / 2);
      let guess = mid;
      const agree = prompt(`Is ${guess} your number ? If its beeger than type ">" If its smaller type "<" or if it your number type "="`);
      if (agree == '='){
         alert(`Your number is ${mid}`);
         return mid;
      } else if (agree == '<'){
         high = mid - 1;
      } else low = mid + 1;
   }
   return 0;
};

// task10();