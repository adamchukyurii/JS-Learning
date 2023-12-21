function NumToString(num, round) {
   if (round === 1) {
      switch(num) {
         case 2:
            return 'Two';
         case 3:
            return 'Three';
         case 4:
            return 'Four';
         case 5:
            return 'Five';
         case 6:
            return 'Six';
         case 7:
            return 'Seven';
         case 8:
            return 'Eight';
         case 9:
            return 'Nine';
      }
   }

   if (round === 10) {
      switch(num) {
         case 2:
            return 'Twenty';
         case 3:
            return 'Thirdty';
         case 4:
            return 'Fourty';
         case 5:
            return 'Fivety';
         case 6:
            return 'Sixty';
         case 7:
            return 'Seventy';
         case 8:
            return 'Eighty';
         case 9:
            return 'Ninety';
      }
   }

   return 'Error';
}






function task1(){
   let userInput = prompt("Enter your string here: ");
   let splittedUserInput = userInput.split("");
   let reNumber = /\d/;
   let cntNum = 0;
   let reChar = /[A-Za-z]/;
   let cntChar = 0;
   let cntOtehr = 0;

   for (i of splittedUserInput){
      if (reNumber.test(i)){
         cntNum++;
      } else if (reChar.test(i)) {
         cntChar++;
      } else {
         cntOtehr++;
      }
   }
   alert(`This string contains ${cntNum} numbers, ${cntChar} letters and ${cntOtehr} other characters`);
};

// task1();

function task2(){
   let userInput = prompt("Enter your number here: ");
   let inputSplitted = userInput.split("");
   let result = '';
   for (let i = 0; i < 2; i++){
      if (+inputSplitted[0] === 1){
         switch (+inputSplitted[1]){
            case 0:
               result += 'Ten'
               alert('Ten');
            case 1:
               result += "Eleven"; 
               alert("Eleven");
               break;
            case 2:
               result += "Tvelwe";
               alert("Tvelwe");
               break;
            case 3:
               result += "Thirteen";
               alert("Thirteen");
               break;
            case 4:
               result += "Fourteen";
               alert("Fourteen");
               break;
            case 5:
               result += "Fiveteen";
               alert("Fiveteen");
               break;
            case 6:
               result += "Sexiteen"; 
               alert("Sexiteen");
               break;
            case 7:
               result += "Seventeen";
               alert("Seventeen");
               break;
            case 8:
               result += "Ethteen";
               alert("Ethteen");
               break;
            case 9:
               result += "Nineteen";
               alert("Nineteen");
               break;
         }
         return result;
      }
      if (+inputSplitted[0] === 2) {
         switch (+inputSplitted[1]){
            case 1:
               result = NumToString(2, 10) + NumToString(1, 1);
               break;
            case 2:
               result = NumToString(2, 10) + NumToString(2, 1);
               break;
            case 3:
               result = NumToString(2, 10) + NumToString(3, 1);
               break;
            case 4:
               result = NumToString(2, 10) + NumToString(4, 1);
               break;
            case 5:
               result = NumToString(2, 10) + NumToString(5, 1);
               break;
            case 6:
               result = NumToString(2, 10) + NumToString(6, 1);
               break;
            case 7:
               result = NumToString(2, 10) + NumToString(7, 1);
               break;
            case 8:
               result = NumToString(2, 10) + NumToString(8, 1);
               break;
            case 9:
               result = NumToString(2, 10) + NumToString(9, 1);
               break;
         }
         alert(result);
         return result;
      }
      if (+inputSplitted[0] === 3) {
         switch (+inputSplitted[1]){
            case 1:
               result = NumToString(3, 10) + NumToString(1, 1);
               break;
            case 2:
               result = NumToString(3, 10) + NumToString(2, 1);
               break;
            case 3:
               result = NumToString(3, 10) + NumToString(3, 1);
               break;
            case 4:
               result = NumToString(3, 10) + NumToString(4, 1);
               break;
            case 5:
               result = NumToString(3, 10) + NumToString(5, 1);
               break;
            case 6:
               result = NumToString(3, 10) + NumToString(6, 1);
               break;
            case 7:
               result = NumToString(3, 10) + NumToString(7, 1);
               break;
            case 8:
               result = NumToString(3, 10) + NumToString(8, 1);
               break;
            case 9:
               result = NumToString(3, 10) + NumToString(9, 1);
               break;
         }
         alert(result);
         return result;
      }
      if (+inputSplitted[0] === 4) {
         switch (+inputSplitted[1]){
            case 1:
               result = NumToString(4, 10) + NumToString(1, 1);
               break;
            case 2:
               result = NumToString(4, 10) + NumToString(2, 1);
               break;
            case 3:
               result = NumToString(4, 10) + NumToString(3, 1);
               break;
            case 4:
               result = NumToString(4, 10) + NumToString(4, 1);
               break;
            case 5:
               result = NumToString(4, 10) + NumToString(5, 1);
               break;
            case 6:
               result = NumToString(4, 10) + NumToString(6, 1);
               break;
            case 7:
               result = NumToString(4, 10) + NumToString(7, 1);
               break;
            case 8:
               result = NumToString(4, 10) + NumToString(8, 1);
               break;
            case 9:
               result = NumToString(4, 10) + NumToString(9, 1);
               break;
         }
         alert(result);
         return result;
      }
      if (+inputSplitted[0] === 5) {
         switch (+inputSplitted[1]){
            case 1:
               result = NumToString(5, 10) + NumToString(1, 1);
               break;
            case 2:
               result = NumToString(5, 10) + NumToString(2, 1);
               break;
            case 3:
               result = NumToString(5, 10) + NumToString(3, 1);
               break;
            case 4:
               result = NumToString(5, 10) + NumToString(4, 1);
               break;
            case 5:
               result = NumToString(5, 10) + NumToString(5, 1);
               break;
            case 6:
               result = NumToString(5, 10) + NumToString(6, 1);
               break;
            case 7:
               result = NumToString(5, 10) + NumToString(7, 1);
               break;
            case 8:
               result = NumToString(5, 10) + NumToString(8, 1);
               break;
            case 9:
               result = NumToString(5, 10) + NumToString(9, 1);
               break;
         }
         alert(result);
         return result;
      }
      if (+inputSplitted[0] === 6) {
         switch (+inputSplitted[1]){
            case 1:
               result = NumToString(6, 10) + NumToString(1, 1);
               break;
            case 2:
               result = NumToString(6, 10) + NumToString(2, 1);
               break;
            case 3:
               result = NumToString(6, 10) + NumToString(3, 1);
               break;
            case 4:
               result = NumToString(6, 10) + NumToString(4, 1);
               break;
            case 5:
               result = NumToString(6, 10) + NumToString(5, 1);
               break;
            case 6:
               result = NumToString(6, 10) + NumToString(6, 1);
               break;
            case 7:
               result = NumToString(6, 10) + NumToString(7, 1);
               break;
            case 8:
               result = NumToString(6, 10) + NumToString(8, 1);
               break;
            case 9:
               result = NumToString(6, 10) + NumToString(9, 1);
               break;
         }
         alert(result);
         return result;
      }
      if (+inputSplitted[0] === 7) {
         switch (+inputSplitted[1]){
            case 1:
               result = NumToString(7, 10) + NumToString(1, 1);
               break;
            case 2:
               result = NumToString(7, 10) + NumToString(2, 1);
               break;
            case 3:
               result = NumToString(7, 10) + NumToString(3, 1);
               break;
            case 4:
               result = NumToString(7, 10) + NumToString(4, 1);
               break;
            case 5:
               result = NumToString(7, 10) + NumToString(5, 1);
               break;
            case 6:
               result = NumToString(7, 10) + NumToString(6, 1);
               break;
            case 7:
               result = NumToString(7, 10) + NumToString(7, 1);
               break;
            case 8:
               result = NumToString(7, 10) + NumToString(8, 1);
               break;
            case 9:
               result = NumToString(7, 10) + NumToString(9, 1);
               break;
         }
         alert(result);
         return result;
      }
      if (+inputSplitted[0] === 8) {
         switch (+inputSplitted[1]){
            case 1:
               result = NumToString(8, 10) + NumToString(1, 1);
               break;
            case 2:
               result = NumToString(8, 10) + NumToString(2, 1);
               break;
            case 3:
               result = NumToString(8, 10) + NumToString(3, 1);
               break;
            case 4:
               result = NumToString(8, 10) + NumToString(4, 1);
               break;
            case 5:
               result = NumToString(8, 10) + NumToString(5, 1);
               break;
            case 6:
               result = NumToString(8, 10) + NumToString(6, 1);
               break;
            case 7:
               result = NumToString(8, 10) + NumToString(7, 1);
               break;
            case 8:
               result = NumToString(8, 10) + NumToString(8, 1);
               break;
            case 9:
               result = NumToString(8, 10) + NumToString(9, 1);
               break;
         }
         alert(result);
         return result;
      }
      if (+inputSplitted[0] === 9) {
         switch (+inputSplitted[1]){
            case 1:
               result = NumToString(9, 10) + NumToString(1, 1);
               break;
            case 2:
               result = NumToString(9, 10) + NumToString(2, 1);
               break;
            case 3:
               result = NumToString(9, 10) + NumToString(3, 1);
               break;
            case 4:
               result = NumToString(9, 10) + NumToString(4, 1);
               break;
            case 5:
               result = NumToString(9, 10) + NumToString(5, 1);
               break;
            case 6:
               result = NumToString(9, 10) + NumToString(6, 1);
               break;
            case 7:
               result = NumToString(9, 10) + NumToString(7, 1);
               break;
            case 8:
               result = NumToString(9, 10) + NumToString(8, 1);
               break;
            case 9:
               result = NumToString(9, 10) + NumToString(9, 1);
               break;
         }
         alert(result);
         return result;
      }
   }
}

// task2();

function task3(){
   let userInput = prompt("Enter your sentece: ");
   let userInputSplitted = userInput.split('');
   let userInputLower = userInput.toLowerCase().split('');
   let userInputUpper = userInput.toUpperCase().split('');
   let userInputNum = /\d/;
   let result = '';

   for (let i = 0; i < userInputSplitted.length; i++) {
      if (userInputNum.test(userInputSplitted[i])){
         result += '_'; 
      } else {
         if (userInputSplitted[i] === userInputLower[i]) {
            result += userInputSplitted[i].toUpperCase();
         } else if (userInputSplitted[i] === userInputUpper[i]) {
            result += userInputSplitted[i].toLowerCase();
         }
      }
   }
   alert(result);
   return result;
}

// task3();

function task4() {
   let userInput = prompt("Enter your css-style preferences: ");
   let userInputSplitted = userInput.split("-");
   let userInputSecondWord = userInputSplitted[1].split('');
   userInputSecondWord[0] = userInputSecondWord[0].toUpperCase(); 
   let userInputSecondWordString = userInputSecondWord.join('');
   alert(userInputSplitted[0] + userInputSecondWordString);
   return userInputSplitted[0] + userInputSecondWordString;

}

// task4();

function task5() {
   let userInput = prompt("Enter your words: ");
   let userInputSplitted = userInput.split(" ");
   let firstLetter = userInputSplitted[0].split('')[0].toUpperCase();
   let result = '';
   for (let i = 0; i < userInputSplitted.length; i++) {
      result += userInputSplitted[i].split('')[0].toUpperCase();
   }
   alert(result);
}

// task5();

function task6() {
   let flag = true;
   let arrOfStrings = [];

   while(flag) {
      let userInput = prompt("Enter your sentence here: ");
      arrOfStrings.push(userInput);
      arrOfStrings.push('\n');
      flag = confirm(`Your previos sentence is "${userInput}", do you wana continue ?`)
   }
   alert(arrOfStrings.join(''));
}

// task6();

function task7() {
   let result = 0;
   let flag = true;
  
   while(flag){
      let userInput = prompt("Enter sample here in format 'num action num': ");
      let userInputSplitted = userInput.split(" ");
      
      switch(userInputSplitted[1]){
         case '+':
            result = +userInputSplitted[0] + +userInputSplitted[2];
            break;
         case '-':
            result = +userInputSplitted[0] - +userInputSplitted[2];
            break;
         case '*':
            result = +userInputSplitted[0] * +userInputSplitted[2];
            break;
         case '/':
            result = +userInputSplitted[0] / +userInputSplitted[2];
            break;
      }
      flag = confirm(`The result is ${result}. Do you wana continue ?`);
   }
}

// task7();
// slice
function task8(){
   let userInput = prompt("Enter here your URL: ");
   let userInputSplitted = userInput.split("/");
   let URL = [];
   let resutl = '';

   for (let i of userInputSplitted){
      if (i !== '') {
         URL.push(i);
      }
   }

   let path = URL.splice(2).join('/');
   let protocol = URL[0];
   let domen = URL[1];
   
   alert(`Protocol: ${protocol}, domen: ${domen}, path: ${path}`);
   return `Protocol: ${protocol}, domen: ${domen}, path: ${path}`;
}

// task8();

function task9(){
   let userInput = prompt("Enter your sentence here: ");
   let separator = prompt("Enter separator here: ");
   let result = [];
   let midreslt = '';

   for (let i = 0; i <= userInput.length; i++) {
      if (userInput[i] === separator) {
         result.push(midreslt);
         midreslt = '';
         continue;
      } else if (i === userInput.length){
         result.push(midreslt);
      } else {
         midreslt += userInput[i];
      }
      console.log(i);
   }   
   alert(result);
   return result;
}

// task9();

function task10(){
   let userInput = prompt("What do you want to print: ");
   let rebracketing1 = userInput.split("(");
   let rebracketing2 = rebracketing1[1].split(')');
   let splitted = rebracketing2[0].split(',');
   let pattern = /\w*\s*\%\d\w*\s*/
   for (let i = 0; i < splitted[0].length; i++) {
      if (pattern.test(splitted[0])){

      } else 
   }
}

task10();