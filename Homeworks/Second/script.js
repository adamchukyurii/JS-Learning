//! 1

function task1(){
   const UserAge = +prompt("What is your age sir ?");
   if (UserAge >= 0 && UserAge < 12) {
      alert("You are a kid, do you wana play ?");
   } else if (UserAge >= 12 && UserAge <= 18) {
      alert("You are a teenagare, wana have some drink ?")
   } else if (UserAge > 18 && UserAge <= 60) {
      alert("You are a mature person, do you wana talk about how hard it is ?") 
   } else {
      alert("You are pensioner, you have seen alot of shit and now you can rest in peace.")
   }
}

// task1();

//! 2

function task2(){
   const UserDigit = +prompt("Enter your digit");

   switch(UserDigit){
      case 0:
         alert(")");
         break;
      case 1:
         alert("!");
         break;
      case 2:
         alert("@");
         break;
      case 3:
         alert("#");
         break;
      case 4:
         alert("$");
         break;
      case 5:
         alert("%");
         break;
      case 6:
         alert("^");
         break;
      case 7:
         alert("&");
         break;
      case 8:
         alert("*");
         break;
      case 9:
         alert("(");
         break;
      default:
         alert("Are you stupid or what, I said digit");   
   }
}

// task2();

//! 3

function task3(){
   let UserString = prompt("Enter your number: ");
   const UserStringSplit = UserString.split("", 2);
   const UserNum = StringtoNumber(UserStringSplit);

   function StringtoNumber (string){
      let num_array = [];
      for (i = 0; i <= 3; i++){
         if (+string[i] !== isNaN){
            num_array.push(+string[i]);
         } else{
            return 1;
         }
      }
      return num_array;
   }

   for (i of UserNum){
      if ((i === UserNum[1] || i === UserNum[2]) || (i === UserNum[1] && i === UserNum[2])){
         alert("Match");
         break;
      } else {
         alert("No Matches");
         break;
      }
   }
}

// task3();

//! 4

function task4(){
   const year = +prompt("Which year wold you chose?");

   alert((year % 4 == 0 && year % 100 != 0) ? "Its intercelary year" : "It is not intercelary year");
}

// task4();

// 5 

// function task5(){
//    const FiveDigitNum = prompt("Eneter your number: ");
//    let splitedNumber = FiveDigitNum.split("");
//    console.log(splitedNumber);
//    let reversedNumber = splitedNumber.reverse().join("");
//    console.log(reversedNumber);
//    if (FiveDigitNum == +reversedNumber) {
//       alert("It is a palindrome");
//    } else alert("It is not a palindrome");
// }

// task5();

//! 6

function task6(){
   const USD = +prompt("Enter your USD: ");
   const WhichCurrency = prompt("To wich currency you need to convert ?");
   alert(WhichCurrency);
   switch (WhichCurrency){
      case 'EUR':
         alert(USD * 0.93);
         break;
      case 'UAN':
         alert(USD * 36.66);
         break;
      case 'AZN':
         alert(USD * 1.70);
         break;
      default:
         alert("We dont have this currency");
   }
}

// task6();
//! 7
function task7(){
   const AllCheck = +prompt("Whats the price of all yor products?");

   if (AllCheck >= 200 && AllCheck <= 300){
      alert("You should pay " + (AllCheck/100 * 3 - AllCheck));
   } else if (AllCheck > 300 && AllCheck <= 500){
      alert("You should pay " + (AllCheck/100 * 5 - AllCheck));
   } else if (AllCheck > 500){
      alert("You should pay " + (AllCheck/100 * 7 - AllCheck));
   } else {
      alert("You shold pay " + AllCheck);
   }
}

// task7();

//! 8

function task8(){
   const CirlcleLenth = +prompt("Lenth of circle is: ");
   const Perimeter = +prompt("Perimeter of square: ");

   if (CirlcleLenth <= Perimeter){
      alert("Match");
   } else {
      alert("Not Matching");
   }
}
// task8();
//9 

// function task9(){
//    const firstQuestion = +prompt("What will be 1 + 1? Is it 5, or 3, or maybe 2");
//    const secondQuestion = +prompt("Date when Christopher Columb has discovered America ? Is it 1556, or 1492, or maybe 1789");
//    const lastQuestion = prompt("What is my favorite film/saga? Is it StarWars, or Avangers, or maybe Twilight");
//    let cnt = 0;
//    if (firstQuestion === 2){
//       cnt++;
//    } 
//    if (secondQuestion === 1492){
//       cnt++;
//    }
//    if (lastQuestion == 'StarWars'){
//       cnt++;
//    }
//    alert(`Youve gessed ${cnt} of 3`);
// }

// task9();

// 10

function task10(){
   const date = prompt("Enter current date in format 'day/month/year': ");
   let splited = date.split("/");
   let day = +splited[0];
   let month = +splited[1];
   let year = +splited[2];
   console.log(`${day}, ${month}, ${year}`);
   flag = true;

   while(flag){
      if (year % 4 == 0 && year % 100 != 0){
         if (month == 2 && day < 28){
            day++;
         } else {
            if (month < 12){
               console.log(`${day}, ${month}, ${year}`);
               if (day < 31){
                  console.log(`${day}, ${month}, ${year}`);
                  day++;
               }else {
                  month++
                  day = 1;
               }
            }else {
               year++;
               day = 1;
               month = 1;
            }
         }
      }
      flag = confirm(`Next day is ${day}/${month}/${year}`);
   }
}
// task10();