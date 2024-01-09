function task1() {
   const userInput = prompt("Enter you sentence here");
   let letterCount = userInput.match(/[A-Za-z]/g || []).length;
   let digitCount = userInput.match(/\d/g || []).length
   let otherCharacterCount = userInput.length - letterCount - digitCount;
   console.log(`You have typed ${letterCount} letters, ${digitCount} digits and ${otherCharacterCount} other characters`);
}

// task1();

function task2() {
   const userInput = prompt("Enter your number in english please and with space like this 'thirty five', thankyou");
   let splittedInput = userInput.split(' ');
   let result = 0;
   let currentNum = 0;

   const wordsNumbers = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90,
    };

    for (let word of splittedInput) {
      if (wordsNumbers.hasOwnProperty(word)) {
         currentNum += wordsNumbers[word];
      } else {
         currentNum = 0;
      }
    }
    result += currentNum;
    console.log(result);
}

// task2();

function task3() {
   let userInput = prompt('Enter here your sentence: ');
   let UpperInput = userInput.toUpperCase();
   let LowerInput = userInput.toLowerCase;
   let result = '';
   
   for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === UpperInput[i]){
         result += LowerInput[i];
      } else if (userInput[i] === LowerInput[i]) {
         result += UpperInput[i];
      } else if (userInput[i] === ' ') {
         result += '_';
      }
   }
   console.log(result);
}

// task3();

function task4() {
   const userInput = prompt('Enter here your css styles: ');
   let styles = userInput.split("-");

   let lastWord = styles[1].charAt(0).toUpperCase() + styles[1].slice(1);
   console.log(styles[0] + lastWord);
}

// task4();

function task5() {
   const userInput = prompt('Enter here your sentence: ');
   let splited = userInput.split(' ');
   let result = '';

   splited.map((item) => {
      if (item.length > 2) {
         item = item.charAt(0);
         result += item;
      }
   });

  console.log(result.toUpperCase());
}

// task5();

function task6() {
   let flag = true;
   let result = '';
   do {
      const userInput = prompt("Enter here your sentence: ");
      if (userInput !== null) {
         result += userInput;
         flag = confirm('Do you want to continue?');
      } else {
         alert("You havent etered sentence")
         flag = false;
      }
   } while(flag);

   console.log(result);
}

// task6();

function task7() {
   let result = 0;
   let flag = true;

   while(flag) {
      const userInput = prompt("Enter here your problem with spaces: ");
      let equation = userInput.split(' ');

      switch(equation[1]) {
         case '+':
            result += +equation[0] + +equation[2];
            break;
         case '-':
            result += +equation[0] - +equation[2];
            break;
         case '*':
            result += +equation[0] * +equation[2];
            break;
         case '/':
            result += +equation[0] / +equation[2];
            break;
         default:  
      }
      console.log(`Result of ${equation[0]} ${equation[1]} ${equation[2]} is ${result}`);
      result = 0;
      flag = confirm("Do you want to continue?");
   }
}

// task7();

function task8() {
   const url = prompt("Enter here your url to explaining: ");
   let urlSplitted = url.split('/');
   let protocol = urlSplitted[0];
   let domen = urlSplitted[2];
   let urlNew = urlSplitted.filter((item) => item !== "");
   let path = '';
   for (let i = 0; i < urlSplitted.length; i++) {
      if (urlSplitted[i].match(/https?|ftp/) || urlSplitted[i].match(/\b(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+)\b/g)){
         continue;
      } else {
         if (path === "") {
            path += urlSplitted[i];
         } else path += '/' + urlSplitted[i];
         
      }
   }
   console.log(`Protocol - ${protocol}, domen - ${domen}, path - ${path}`);
}

// task8();

function task9() {
   const userInput = prompt("Enter here your sentence: ");
   const separator = prompt("Enter separator: ");
   let result = [];
   let midresult = '';
   for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === separator) {
         result.push(midresult);
         midresult = '';
         continue;
      } else {
         midresult += userInput[i];
      }
   }
   result.push(midresult);
   console.log(result);
}

// task9();

function task10() {
   const userInput = prompt("Enter here your print: ");

   let trimmedInput = userInput.match(/"([^"]*?")/g);

   let components = trimmedInput.map((item) => {
      return item.replace(/"/g, '');
   });

   let [template, ...values] = components;
   
   for (let i = 0; i < values.length; i++) {
      template = template.replace("%" + (i + 1), values[i]);
   }
   alert(template);
}
task10();