const TaskInput = document.querySelector("#TaskInput");
const TaskList = document.querySelector('#TaskList');
console.log('hello world')

const ValidateTask = (input) => {
   input.value = '';
};

const GeneratedInput = (value) => {
   if (value.length > 2) {
      return `
      <li>${value}
         <input onclick='DeleteItem(this.parentNode)' value='Delete' type='button'>
      </li>`;
   }
}

const DeleteItem = (item) => {
   item.remove();
};

const AddTask = (event) => {
   event.preventDefault();
   if (TaskInput.value.length > 2) {
      TaskList.innerHTML += GeneratedInput(TaskInput.value);
   }
   ValidateTask(TaskInput);
};

const ColorInput = document.querySelector('#ColorInput');
console.log(ColorInput.value);

document.body.style.background = ColorInput.value;

for (let i = 0; i < ColorInput.value.length; i++) {
   
}

ColorInput.addEventListener("input" , (event) => {
   const bgColor = event.target.value;
   document.body.style.backgroundColor = bgColor;
});

const DateInput = document.querySelector('#DateInput');

const DateList = document.querySelector('#DateList');

DateList.style.display = 'none';

DateInput.addEventListener("input", (event) => {
   const date = event.target.value;
   const formatingDate = date.split('-');
   DateList.style.display = 'block';

   for (let i = 0; i < DateList.childNodes.length; i++) {
      let DateNodes = DateList.childNodes[i];
      if (DateList.childNodes[i] === 'LI') {
         let id = DateNodes.id;
         console.log(id);
         switch(id) {
            case 'Year':
               DateNodes.textContent = `Year: ${formatingDate[0]}`;
               break;
            case 'Month':
               DateNodes.textContent = `Month: ${formatingDate[1]}`;
               break;
            case 'Day':
               DateNodes.textContent = `Day: ${formatingDate[2]}`;
               break;
         }
      }
   }
}) 

// const data = [
//    {
//       name: 'Kiril',
//       surname: 'Ivancov',
//    },
//    {
//       name: 'Stepan',
//       surname: 'Bandera',
//    },
// ];

// console.log(data);

// // console.log(JSON.stringify(data));
// localStorage.setItem('userData', JSON.stringify(data));

const data = JSON.parse(localStorage.getItem('userData'));
console.log(data);