// const GetObjectData = (name, surname, age, specializations) => {
//    return {
//       Name: name,
//       Surname: surname,
//       Age: age,
//       Specializations: specializations,
//    };
// };

// console.log(GetObjectData('Jotaro', 'Kudjo', 19, ['Stand User', 'teenager', 'smoker']));
// console.log(GetObjectData('Kakoin', 'Noriaki', 19, ['Friend of Jotaro', 'teenager', 'notsmoker']));

// let group1 = ['daniels', 'johnson', 'overton', 'stufford', 'tempelton'],
// group2 = ['greenwood', 'liner', 'takerman'];

// let students = group1.splice(2, 2);
// console.log(students);
// group2 = group2.concat(students);
// console.log(group1, group2);

// let person = {
//    firstname: 'Diana',
//    lastname: 'Fenton',
//    birthday: '07/22/1996',
//    showinfo: function(){
//       console.log(`Student name : ${this.firstname} ${this.lastname}`);
//    },
//    showAge: function(){
//       const deltaTime = Date.now() - Date.parse(this.birthday);
//       const pesonAge = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
//       console.log(`${this.firstname} ${this.lastname} is ${pesonAge} year old.`);
//    },
// };

// person.showAge();

// function Student(firstname, lastname, birthday){
//    this.firstname = firstname;
//    this.lastname = lastname;
//    this.birthday = birthday;
//    this.showInfo = function(){
//       console.log(`Student name : ${this.firstname} ${this.lastname}`);
//    };
//    this.showAge = function(){
//       const deltaTime = Date.now() - Date.parse(this.birthday);
//       const pesonAge = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
//       console.log(`${this.firstname} ${this.lastname} is ${pesonAge} year old.`);
//    };
// };

// let studentObject = new Student(
//    prompt("Enter your name"),
//    prompt("Enter your surname"),
//    prompt("Enter your birthday in format (01/01/2023)")
// );

// console.log(studentObject);
// studentObject.showInfo();
// studentObject.showAge();


// function Hotel(name, country, rooms, bookedRooms){
//    this.name = name;
//    this.country = country;
//    this.rooms = rooms;
//    this.bookedRooms = bookedRooms;
//    this.avaialabelRooms = function(){
//       return this.rooms - this.bookedRooms;
//    };
//    this.avaialabelPercent = function(){
//       return `${Math.floor((this.avaialabelRooms() / this.rooms) * 100)}%`;
//    };
// };

// let aniqueRomanPlace = new Hotel('Antique Roman Place', 'Turkey', 270, 130);
// console.log(aniqueRomanPlace);
// console.log(aniqueRomanPlace.avaialabelRooms());
// console.log(aniqueRomanPlace.avaialabelPercent());

// class Human {
//    constructor(firsName, lastName, birthday) {
//       this.firsName = firsName;
//       this.lastName = lastName;
//       this.birthday = birthday;
//    }

//    showIfo() {
//       console.log(`${this.firsName} ${this.lastName}`);
//    }
   
//    showAge() {
//       const deltaTime = Date.now() - Date.parse(this.birthday);
//       const pesonAge = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
//       console.log(`${this.firstname} ${this.lastname} is ${pesonAge} year old.`);
//    }
// }

// const Jhon = new Human('Jhon', 'Smith', '09/17/2023');

// Jhon.showAge();
// Jhon.showIfo();

// class Rectangle {
//    constructor(width, height){
//       this.width = width;
//       this.height = height;
//    }

//    squre() {
//       return this.width * this.height;
//    }

//    perimeter() {
//       return 2 * ( this.width + this.height );
//    }

//    print(){
//       console.log(`Square - ${this.squre()}, Perimeter - ${this.perimeter()}`);
//    }
// }

// let rect1 = new Rectangle(20, 30);
// rect1.print();
// let rect2 = new Rectangle(78, 92);
// rect2.print();


// incapsulation
class Human {
   #id
   constructor(firsName, lastName, birthday) {
      this.firsName = firsName;
      this.lastName = lastName;
      this.birthday = birthday;
      this.#id = Math.floor(Math.random() * 10e6);
   }

   get id(){
      return this.#id;
   }

   set id(value){
      this.#id = value;
   }

   print(){
      console.log(`${this.firsName} ${this.lastName} ${this.birthday} ${this.#id}`);
   }
}

const John = new Human('John', 'Smith', '09/17/2023');
John.lastName = 'Week';
John.print();

// inheritance - nasledstvo

class Teacher extends Human {
   constructor(firsName, lastName, birthday, subjects = []){
      super(firsName, lastName, birthday);
      this.subjects = subjects;
   }

   showSubjects(){
      console.log(this.firsName + ` ` + this.lastName + ` can teach you ` + this.subjects);
   }
}

const Onizuka = new Teacher('Onizuka', 'Greate', '09/12/1991', ['life lessons', 'football', 'riding', 'bad words']);
Onizuka.showSubjects();


//polimorfizm
class ITMentor extends Teacher {
   constructor(firsName, lastName, birthday, subjects = [], level) {
      super(firsName, lastName, birthday, subjects);
      this.level = level;
   }

   showSubjects(){
      console.log(`With ${this.firsName} ${this.lastName} you can get such IT skills: ${this.subjects.join(', ')}`);
      document.write(`
      <p>With ${this.firsName} ${this.lastName}<p>
       you can get such skills: 
         <ol>
            ${this.subjects.map((item ) => {
               `<li>${item}</li>`.join('')})}
         </ol>
         `)
   }

   showLewel(){
      console.log(`${this.firsName} ${this.lastName} has level ${this.level}`);
   }
}

const Andrew = new ITMentor('Andrew', 'Tate', '07/22/1896', ['succes', 'being the men', 'pafos'], 'Senior');
Andrew.showSubjects();
