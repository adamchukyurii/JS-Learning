const Slider = document.querySelector("#Slider");
const Handle = document.querySelector("#Handle");
const Output = document.querySelector("#Output");


const updateValue = () => {
   const selectedValue = Math.round((Handle.offsetLeft / (Slider.offsetWidth - Handle.offsetWidth)) * 100);
   Output.textContent = `${selectedValue}`;
}

Handle.addEventListener('mousedown', (event) => {
   event.preventDefault();
   Handle.style.cursor = 'grabbing';
   const startX = event.clientX;
   const startLeft = Handle.offsetLeft;
   

   const handleMouseMove = (event) => {
      const deltaX = event.clientX - startX;
      let newLeft = startLeft + deltaX;
      
      if (newLeft < 0) {
         newLeft = 0;
      } else if (newLeft > Slider.offsetWidth - Handle.offsetWidth) {
         newLeft = Slider.offsetWidth - Handle.offsetWidth;
      }
      Handle.style.left = `${newLeft}px`;
      updateValue();
   }

   const handleMouseUp = () => {
      Handle.style.cursor = 'grab';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
   }

   document.addEventListener('mousemove', handleMouseMove);
   document.addEventListener('mouseup', handleMouseUp);
});

updateValue()

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const allSlides = slides.length;

const updateSlider = () => {
   const newPosition = -currentIndex * 300 + 'px';
   document.querySelector(".slider").style.transform = 'translateX(' + newPosition + ')';

   slides.forEach((slide) => {
      slide.style = 'visibility:hidden;';
   })

   slides[currentIndex].style = 'visibility: visibile;';
} 


updateSlider();

const changeSlide = (direction) => {
   currentIndex += direction;

   if (currentIndex < 0) {
       currentIndex = allSlides - 1;
   } else if (currentIndex >= allSlides) {
      currentIndex = 0;
   }
   updateSlider();
}

let currentSpoiler = 0;
const spoilers = document.querySelectorAll(".spoiler");
const allSpoilers = spoilers.length;
const spoilerInfo = document.querySelectorAll(".spoiler_info");

const updateSpoiler = () => {
   for (let i = 0; i < allSpoilers; ++i) {
      if (spoilerInfo[i].style.display === 'block') {
         spoilerInfo[i].style.display = 'none';
      }
   }
}

const openSpoiler = (index) => {
   updateSpoiler();
   if (spoilerInfo[index - 1].style.display === 'block') {
      spoilerInfo[index-1].style.display = 'none';
   } else {
      currentSpoiler = spoilerInfo[index-1];
      currentSpoiler.style.display = 'block';
   }
}

const newsContainer = document.querySelector("#News_Container");
let isLoading = false;
const loadImg = document.createElement("img");
const content = [`
<div class="new">
   <h2>What is lorem ipsum</h2>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam debitis inventore, voluptatibus animi totam accusantium laudantium sunt molestiae consequatur atque, dolorem mollitia rem odit libero, sit maiores laboriosam laborum nihil distinctio beatae a vitae impedit dolor maxime. Repellendus illum perferendis aliquam quia ea porro iste recusandae id ullam laborum labore velit, vel nisi mollitia! Nisi, quisquam perspiciatis? Obcaecati doloribus beatae saepe a?</p>
</div>`, `
<div class="new">
   <h2>What is lorem ipsum</h2>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam debitis inventore, voluptatibus animi totam accusantium laudantium sunt molestiae consequatur atque, dolorem mollitia rem odit libero, sit maiores laboriosam laborum nihil distinctio beatae a vitae impedit dolor maxime. Repellendus illum perferendis aliquam quia ea porro iste recusandae id ullam laborum labore velit, vel nisi mollitia! Nisi, quisquam perspiciatis? Obcaecati doloribus beatae saepe a?</p>
</div>`, `
<div class="new">
   <h2>What is lorem ipsum</h2>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam debitis inventore, voluptatibus animi totam accusantium laudantium sunt molestiae consequatur atque, dolorem mollitia rem odit libero, sit maiores laboriosam laborum nihil distinctio beatae a vitae impedit dolor maxime. Repellendus illum perferendis aliquam quia ea porro iste recusandae id ullam laborum labore velit, vel nisi mollitia! Nisi, quisquam perspiciatis? Obcaecati doloribus beatae saepe a?</p>
</div>`, `
<div class="new">
   <h2>What is lorem ipsum</h2>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam debitis inventore, voluptatibus animi totam accusantium laudantium sunt molestiae consequatur atque, dolorem mollitia rem odit libero, sit maiores laboriosam laborum nihil distinctio beatae a vitae impedit dolor maxime. Repellendus illum perferendis aliquam quia ea porro iste recusandae id ullam laborum labore velit, vel nisi mollitia! Nisi, quisquam perspiciatis? Obcaecati doloribus beatae saepe a?</p>
</div>`, `
<div class="new">
   <h2>What is lorem ipsum</h2>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam debitis inventore, voluptatibus animi totam accusantium laudantium sunt molestiae consequatur atque, dolorem mollitia rem odit libero, sit maiores laboriosam laborum nihil distinctio beatae a vitae impedit dolor maxime. Repellendus illum perferendis aliquam quia ea porro iste recusandae id ullam laborum labore velit, vel nisi mollitia! Nisi, quisquam perspiciatis? Obcaecati doloribus beatae saepe a?</p>
</div>`, `
<div class="new">
   <h2>What is lorem ipsum</h2>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam debitis inventore, voluptatibus animi totam accusantium laudantium sunt molestiae consequatur atque, dolorem mollitia rem odit libero, sit maiores laboriosam laborum nihil distinctio beatae a vitae impedit dolor maxime. Repellendus illum perferendis aliquam quia ea porro iste recusandae id ullam laborum labore velit, vel nisi mollitia! Nisi, quisquam perspiciatis? Obcaecati doloribus beatae saepe a?</p>
</div>`];

const loadNew = () => {
   isLoading = true;
   const loadImg = document.createElement("img");
   loadImg.className = 'loading';
   loadImg.src = './icons8-loading-circle.gif';
   newsContainer.appendChild(loadImg);
   setTimeout(() => {
      const newContent = content[Math.floor(Math.random() * 6)];
      newsContainer.removeChild(loadImg);
      newsContainer.innerHTML += newContent;
      isLoading = false;
   }, 1000);
}

newsContainer.addEventListener('scroll', () => {
   if (!isLoading && newsContainer.scrollTop + newsContainer.clientHeight >= newsContainer.scrollHeight) {
      loadNew();
   }
})

// loadNew();

const GenrateCalendar = (event) => {
   event.preventDefault();
   const CalendarContainer = document.querySelector("#calendar");
   const calendar = document.querySelector("#calendar tbody");
   calendar.innerHTML = '';
   const monthInput = document.querySelector("#monthInput").value;
   const yearInput = document.querySelector("#yearInput").value;

   if (monthInput > 12) {
      alert("Enter valid month");
   } 

   const neddedDate = new Date(yearInput, monthInput-1);
   const firstDayOfMonths = new Date(neddedDate.getFullYear(), neddedDate.getMonth(), 1);
   const lastDayOfMonths = new Date(neddedDate.getFullYear(), neddedDate.getMonth() + 1, 0);
   let dateCnt = 1;

   for (let i = 0; i < 5; i++) {
      const row = document.createElement('tr');

      for (let j = 0; j < 7; j++) {
         const cell = document.createElement('td');

         if (i === 0 && j < firstDayOfMonths.getDay() - 1 || dateCnt > lastDayOfMonths.getDate()) {
            cell.textContent = '';
         } else {
            cell.textContent = dateCnt;
            dateCnt++;
         }
         row.appendChild(cell);
      }
      calendar.appendChild(row);
   }
   CalendarContainer.style.display = "block";
}


const links = document.querySelectorAll(".link");
const re = /https/i;

const new_links = Array.from(links);

for (let i = 0; i < links.length; i++) {
   if (re.test(links[i].textContent)) {
      links[i].style = 'color: blue; text-decoration: underline; cursor: pointer; width: fit-content;';
   } else {
      links[i].style = 'color: blue; cursor: pointer; width: fit-content;'
   }
}

new_links.map(function(item){
   item.addEventListener('mouseenter', function(){
      this.style.color = '#1376d3';
   });
   item.addEventListener('mouseleave', function(){
      this.style.color = 'blue';
   });
});


const booksList = document.querySelector("#books");
let books = document.querySelectorAll(".book");
let lastClickedIndex = -1;

const booksArray = Array.from(books);

const updateSelectedBook = () => {
   for (let i = 0; i < booksArray.length; i++) {
      const computedStyle = getComputedStyle(booksArray[i]);
      if (computedStyle.backgroundColor === 'rgb(255, 169, 132)') {
         booksArray[i].style.background = 'transparent';
      }
   }
}

booksArray.map((item, index) => {
   item.addEventListener('click', function(event){
      if (event.ctrlKey) {
         this.style = 'background:rgb(255, 169, 132);';
      } else if (event.shiftKey) {
         if (lastClickedIndex !== -1) {
            const start = Math.min(lastClickedIndex, index);
            const end = Math.max(lastClickedIndex, index);

            for (let j = start; j <= end; j++) {
               booksArray[j].style.background = 'rgb(255, 169, 132)';
            } 
         } else {
            this.style.background = 'rgb(255, 169, 132)';
         }
      } else if (event.altKey) {
         this.style.background = 'transparent';
      } else {
         updateSelectedBook();
         this.style = 'background: rgb(255, 169, 132)';
      }

      lastClickedIndex = index;
   })
})

const text = document.querySelector("#textForEditing");
let editText = document.createElement("textarea");
const editingBlock = document.querySelector("#Editing_Block");

document.addEventListener('keydown', function(event){
   if (event.ctrlKey && event.key === 'e') {
      event.preventDefault();
      let textForEditing = text.textContent;
      text.style.display = 'none';
      editText.setAttribute('rows', '10');
      editText.setAttribute('cols', '60');
      editText.value = textForEditing;
      editText.style.width = 'max-content';
      editText.style.height = 'max-content';

      editingBlock.appendChild(editText);

   }

   if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      let editedText = editText.value;
      text.innerHTML = editedText;
      editText.remove();
      text.style.display = 'block';
      text.style = 'white-space: wrap;'
   }
});

const table = document.querySelector("#sortingBy");

const infoCells = Array.from(document.querySelectorAll(".infoCells"));

let peoples = [];
let people = [];
let start = 0;
let end = 4;

for (let i = 0; i < 4; i++) {
   for (let j = start; j < end && j < infoCells.length; j++) {
      people.push(infoCells[j].textContent)
   }
   peoples.push(people);
   start = end;
   end += 4;
   people = [];
}

const sorting = (index) => {
   let sortingBy = [];
      let newPeoples = [];
      for (let i = 0; i < peoples.length; i++) {
         sortingBy.push(peoples[i][index]);
      }
      sortingBy.sort();
      for (let i = 0; i < peoples.length; i++) {
         for (let j = 0; j < peoples.length; j++) {
            if (sortingBy[i] === peoples[j][index]) {
               newPeoples.push(peoples[j]);
            }
         }
      }
   return newPeoples;
}

const updateTable = () => {
   for (let i = 0; i < infoCells.length; i++) {
      infoCells[i].innerHTML = '';
   }
}

const generatingTable = (table) => {
   let start = 0;
      let end = 4;
      updateTable();
      for (let i = 0; i < peoples.length; i++) {
         for (let j = start; j < end && j < infoCells.length; j++) {
            infoCells[j].innerHTML = table[i][j - start];
         }
         start = end;
         end += 4;
      }
}


const SortBy = (filtr) => {
   let newTable;
   if (filtr === 'firstname') {
      newTable = sorting(0);
      generatingTable(newTable);
   } else if (filtr === 'lastname') {
      newTable = sorting(1);
      generatingTable(newTable);
   } else if (filtr === 'age') {
      newTable = sorting(2);
      generatingTable(newTable);
   } else if (filtr === 'company') {
      newTable = sorting(3);
      generatingTable(newTable);
   }
}