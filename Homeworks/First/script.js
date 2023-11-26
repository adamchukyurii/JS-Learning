// Asking Name
alert(prompt("Whats yor name sir ?"));
// Age 
const current_year = 2023;
alert("You are " + +(current_year - +prompt("Whats your birth year")) + " now");
// Perimetr
alert("The perimetr of the square is -> " + +(4 * +prompt("One side of square is ->")));
// Square of circle
alert("The square of the circle is -> " + +(Math.PI * +(prompt("What the radius of circle -> ")**2)));
// Navigator
let destination = +prompt("What a distance of your jorney?");
let prefered_time = +prompt("How much time should take your jorney?");
alert("The speed you should aquire is ->" + (destination/prefered_time) + " km/h");
// Converter
const one_euro = 0.91;
alert("Your dolars in euros ->" + one_euro * +(prompt("How many dolars you need to convet ?")));
// Counting mgb
const size_of_file = 820;
alert((+prompt("Capacity of your USB flash ->")*1000)/size_of_file + "files will get in");
// SladkoJezka
const wallet_money = +prompt("What is your budget ?");
const cost_of_choclate = +prompt("What is the cost of choclate ?")
alert("The amount of choclate is - >" + wallet_money/cost_of_choclate + " and the change is" + wallet_money%cost_of_choclate);
// Mathematics
let num = +prompt("What is your number ?");
let new_num = [num%10, (num/10)%100, num/100]
// alert(`${new_num[0]}${new_num[1]}${new_num[2]}`);
alert(`${Math.floor(num%10)}${Math.floor((num/10)%10)}${Math.floor(num/100)}`);
// even or no
let value = +prompt("Your number would be ->");
alert((value%2 === 0) && "Even" || "Odd");