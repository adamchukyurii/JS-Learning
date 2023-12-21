function task1(num1, num2) {
   if (num1 > num2) {
      return 1;
   } else if (num1 < num2) {
      return -1;
   } else {
      return 0;
   }
}

task1(1, 2);

function task2(n) {
   if (n === 0 || n === 1) {
      return 1;
   } else {
      return n * task2(n-1);
   }
}

console.log(task2(5));

function task3(firstdigit, seconddigit, thirddigit) {
   return `${firstdigit}${seconddigit}${thirddigit}`; 
}


function task4(a, b) {
   if (arguments.length === 1) {
      return a * a;
   }
   return a * b;
}

function task5(num) {
   let res = 0;
   for (let i = 0; i < num; i++){
      if (num % i == 0) {
         res += i;
      }
   }
   return res === num;
}


function task6(start, end) {
   for (let i = start; i <= end; i++) {
      if (task5(i)) {
         console.log(i);
      }
   }
}

function task7(hours, minutes, seconds) {
   if (minutes === undefined) {
      minutes = '00';
   } else if (seconds === undefined) {
      seconds = '00';
   }

   return `${hours}:${minutes}:${seconds}`;
}

function task8(hours, minutes, seconds) {
   return hours * 3600 + minutes * 60 + seconds;
}

function task9(seconds) {
   const hours = Math.floor(seconds / 3600);
   const minutes = Math.floor((seconds % 3600) / 60);
   const newSeconds = seconds % 60;



   return [hours, minutes, newSeconds];
}

function task10(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
   let odds = task8(hours1, minutes1, seconds1) - task8(hours2, minutes2, seconds2);
   const time = task9(odds);
   return task7(time[0], time[1], time[2]);
}