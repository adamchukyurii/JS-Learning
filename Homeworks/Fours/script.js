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
   for (let i = 0; i <= 2; i++){
      if (+inputSplitted[0] == 1){
         
      }
   }
}