class Car {
   constructor(producer, model, avarageSpeed) {
      this.producer = producer;
      this.model = model;
      this.avarageSpeed = avarageSpeed;
   }

   print() {
      const data = `This is car made by ${this.producer}, ${this.model} model, with ${this.avarageSpeed} avarage speed`;
      console.log(data);
   }

   timeToArrive(distance) {
      let time = distance / this.avarageSpeed;
      let stops = 0;
      for (let i = 0; i <= time; i++) {
         if (i % 4 === 0) {
            stops++;
         }
      }
      time += stops;
      return `You will need ${time} hours with stops`;
   }
};

const Porshe = new Car('Porsche', '911', 200);
// Porshe.print();
// console.log(Porshe.timeToArrive(2000));

class Fraction {
   constructor(numerator, denominator) {
      this.numerator = numerator;
      this.denominator = denominator;
      this.simplify();
   }

   simplify() {
      const gcd = this.gcd(this.numerator, this.denominator);
      this.numerator /= gcd;
      this.denominator /= gcd;
   }

   gcd(a, b) {
      return b == 0 ? a : this.gcd(b, a % b);
   }

   add(otherFraction) {
      const newNumenator = this.numerator * otherFraction.denominator + this.denominator * otherFraction.numerator;
      const newDenominator = this.denominator * otherFraction.denominator;

      return new Fraction(newNumenator, newDenominator);
   }

   substract(otherFraction) {
      const newNumenator = this.numerator * otherFraction.denominator - this.denominator * otherFraction.numerator;
      const newDenominator = this.denominator * otherFraction.denominator;

      return new Fraction(newNumenator, newDenominator);
   }

   multiply(otherFraction) {
      const newNumenator = this.numerator * otherFraction.numerator;
      const newDenominator = this.denominator * otherFraction.denominator;
      this.simplify();

      return new Fraction(newNumenator, newDenominator);
   }

   divide(otherFraction) {
      const newNumenator = this.numerator * otherFraction.denominator;
      const newDenominator = this.denominator * otherFraction.numerator ;
      this.simplify();

      return new Fraction(newNumenator, newDenominator);
   }
};

class Time {
   constructor(hours, minutes, seconds) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.timeInSeconds = this.hours * 3600 + minutes * 60 + this.seconds;
   }

   print() {
      const data = `${this.hours}:${this.minutes}:${this.seconds}`;
      console.log(data);
   }

   chageBySeconds(userSeconds) {
      const newSeconds = this.timeInSeconds + userSeconds;

      return this.timeToNormal(newSeconds);
   }

   changeByMinutes(userMinutes) {
      const newSeconds = userMinutes * 60 + this.timeInSeconds;

      return this.timeToNormal(newSeconds);
   }

   changeByHours(userHours) {
      const newSeconds = userHours * 3600 + this.timeInSeconds;

      return this.timeToNormal(newSeconds);
   }

   timeToNormal(inseconds) {
      const hours = Math.floor(this.seconds / 3600);
      const minutes = Math.floor((this.seconds % 3600) / 60);
      const newSeconds = this.seconds % 60; 

      return new Time(hours, minutes, newSeconds);
   }
}