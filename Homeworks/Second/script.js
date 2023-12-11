//! 1

// const UserAge = +prompt("What is your age sir ?");
// if (UserAge >= 0 && UserAge < 12) {
//    alert("You are a kid, do you wana play ?");
// } else if (UserAge >= 12 && UserAge <= 18) {
//    alert("You are a teenagare, wana have some drink ?")
// } else if (UserAge > 18 && UserAge <= 60) {
//    alert("You are a mature person, do you wana talk about how hard it is ?") 
// } else {
//    alert("You are pensioner, you have seen alot of shit and now you can rest in peace.")
// }

//! 2

// const UserDigit = +prompt("Enter your digit");

// switch(UserDigit){
//    case 0:
//       alert(")");
//       break;
//    case 1:
//       alert("!");
//       break;
//    case 2:
//       alert("@");
//       break;
//    case 3:
//       alert("#");
//       break;
//    case 4:
//       alert("$");
//       break;
//    case 5:
//       alert("%");
//       break;
//    case 6:
//       alert("^");
//       break;
//    case 7:
//       alert("&");
//       break;
//    case 8:
//       alert("*");
//       break;
//    case 9:
//       alert("(");
//       break;
//    default:
//       alert("Are you stupid or what, I said digit");   
// }

//! 3

// let UserString = prompt("Enter your number: ");
// const UserStringSplit = UserString.split("", 2);
// const UserNum = StringtoNumber(UserStringSplit);

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

// for (i of UserNum){
//    if ((i === UserNum[1] || i === UserNum[2]) || (i === UserNum[1] && i === UserNum[2])){
//       alert("Match");
//       break;
//    } else {
//       alert("No Matches");
//       break;
//    }
// }


//! 4

// const year = +prompt("Which year wold you chose?");

// alert((year % 4 == 0 && year % 100 != 0) ? "Its intercelary year" : "It is not intercelary year");

// ! 5 not finished
const FiveDigitNum = prompt("Eneter your number: ");
  
alert(isPalindrome(FiveDigitNum));

function isPalindrome (num){
   let NumArray = num.split("").reverse();
   let NewNumArray = [];
   for(let i = 0; i < NumArray.length(); i++){
      NewNumArray.push(i);
   }
   if (num.split("").join() == NewNumArray.join()) {
      return "It is a palindrome";
   } 
   return "It is not a palindrome";
}

//! 6

// const USD = +prompt("Enter your USD: ");
// const WhichCurrency = prompt("To wich currency you need to convert ?");
// alert(WhichCurrency);
// switch (WhichCurrency){
//    case 'EUR':
//       alert(USD * 0.93);
//       break;
//    case 'UAN':
//       alert(USD * 36.66);
//       break;
//    case 'AZN':
//       alert(USD * 1.70);
//       break;
//    default:
//       alert("We dont have this currency");
// }

//! 7
// const AllCheck = +prompt("Whats the price of all yor products?");

// if (AllCheck >= 200 && AllCheck <= 300){
//    alert("You should pay " + (AllCheck/100 * 3 - AllCheck));
// } else if (AllCheck > 300 && AllCheck <= 500){
//    alert("You should pay " + (AllCheck/100 * 5 - AllCheck));
// } else if (AllCheck > 500){
//    alert("You should pay " + (AllCheck/100 * 7 - AllCheck));
// } else {
//    alert("You shold pay " + AllCheck);
// }

//! 8

// const CirlcleLenth = +prompt("Lenth of circle is: ");
// const Perimeter = +prompt("Perimeter of square: ");

// if (CirlcleLenth <= Perimeter){
//    alert("Match");
// } else {
//    alert("Not Matching");
// }


